package MT.Server.Controller;

import MT.Server.Repos.routerRepo;
import MT.Server.Repos.routingTableRepo;
import MT.Server.ResourceNotFoundException;
import MT.Server.Tables.Connection;
import MT.Server.Tables.Router;
import MT.Server.Tables.RoutingTable;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.sql.Timestamp;
import java.time.LocalDateTime;
import java.util.Date;
import java.util.HashMap;
import java.util.List;
import java.util.Map;


@CrossOrigin(origins = "*")
@RestController
@RequestMapping("/api/v1")
public class TimerController {

    public boolean geprueft = false;
    @Autowired
    private MT.Server.Repos.userRepo userRepo;

    @Autowired
    private MT.Server.Repos.sessionRepo sessionRepo;
    @Autowired
    private routerRepo routerRepo;
    @Autowired
    private routingTableRepo routingTableRepo;

    @Autowired
    private MT.Server.Repos.connectionRepo connectionRepo;

    @PostMapping("/start")
    public ResponseEntity<StartResponse> startTimer(@RequestBody Connection connectionFromFrontend,
                                                    @RequestBody Router routerFromFrontend,
                                                    @RequestBody Timestamp time) {
        StartResponse response = new StartResponse(connectionFromFrontend, routerFromFrontend, time);
        for(int i = 0; i <= connectionFromFrontend.getConnectionId().intValue(); i++) {
            pruefen(response.getConnection(), response.getRouter());
           if(geprueft){
               return ResponseEntity.ok(response);
           }
        }
        LocalDateTime rip = time.toLocalDateTime().plusSeconds(20);
        Timestamp ts = Timestamp.valueOf(rip);

        if(connectionFromFrontend.isRIP()){
            if(ts.after(time)){
                ripProtokoll(connectionFromFrontend);
            }
        }else{
            ospfProtokoll(connectionFromFrontend, (List<Router>) routerFromFrontend);
        }
      return ResponseEntity.notFound().build();
    }




    @PostMapping("/stop")
    public ResponseEntity<String> stopTimer(){


        return ResponseEntity.ok("Timer gestoppt");
    }

    @PostMapping("/reset")
    public ResponseEntity<String> resetTimer(){



        return ResponseEntity.ok("Timer resetet");
    }

    private boolean pruefen( Connection connection, Router router){

        Connection finalConnection = connectionRepo.findById(connection.getConnectionId()).orElseThrow(
                () -> new ResourceNotFoundException("routingTable mit Id: " + connection.getConnectionId() + " existiert nicht"));

        Router finalRouter = routerRepo.findById(router.getId()).orElseThrow(
                () -> new ResourceNotFoundException("router mit der Id könnte nicht gefunden werden"));

        if (finalConnection != null && finalRouter != null) {
            geprueft = true;
        }
        return geprueft;

    }


 class StartResponse {

     public Connection getConnection() {
         return connection;
     }

     public void setConnection(Connection connection) {
         this.connection = connection;
     }
     public Timestamp getDate() {
         return time;
     }

     public void setTime(Timestamp connection) {
         this.time = time;
     }

     public Router getRouter() {
         return router;
     }

     public void setRouter(Router router) {
         this.router = router;
     }

     private Connection connection;
     private Router router;
     private Timestamp time;

     public StartResponse(Connection connection, Router router, Timestamp time) {
         this.connection = connection;
         this.router = router;
         this.time = time;

     }

 }
    private void ripProtokoll(Connection connection) {



    }


    private void ospfProtokoll(Connection connection, List<Router> routers) {
        if (connection == null) {
            System.out.println("Ungültige Verbindung.");
            return;
        }
            String routerAId = connection.getRouterA();
            String routerBId = connection.getRouterB();

            Router routerA = findRouterById(routerAId, routers);
            Router routerB = findRouterById(routerBId, routers);

            if (routerA != null && routerB != null) {
                if (routerA.getNetworkmask().equals(routerB.getNetworkmask())) {
                    // Die Router haben dieselbe Subnetzmaske
                    System.out.println("OSPF ist aktiviert und die Router haben dieselbe Subnetzmaske.");
                } else {
                    // Die Router haben unterschiedliche Subnetzmasken
                    System.out.println("OSPF ist aktiviert, aber die Router haben unterschiedliche Subnetzmasken.");
                }
            }
        }


    // Hilfsmethode, um einen Router anhand seiner ID zu finden
    private Router findRouterById(String routerId, List<Router> routers) {
        for (Router router : routers) {
            if (router.getName().equals(routerId)) {
                return router;
            }
        }
        return null;
    }
}



