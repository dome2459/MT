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
            ospfProtokoll(connectionFromFrontend);
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


    private void ospfProtokoll(Connection connection) {
        Long AId = Long.valueOf(connection.getRouterA());
        Long BId = Long.valueOf(connection.getRouterB());

        Router routerA = routerRepo.findById(AId).orElseThrow(() -> new ResourceNotFoundException("Router nicht gefunden"));
        Router routerB = routerRepo.findById(BId).orElseThrow(() -> new ResourceNotFoundException("Router nicht gefunden"));
        RoutingTable tableRouterA = routingTableRepo.findById(AId).orElseThrow( () -> new ResourceNotFoundException(" RoutingTable Router A nicht gefunden"));
        RoutingTable tableRouterB = routingTableRepo.findById(BId).orElseThrow( () -> new ResourceNotFoundException(" RoutingTable Router B nicht gefunden "));



        tableRouterA.setRouterId(routerB.getId());
        tableRouterA.setRoutingTableName(routerB.getName());
        tableRouterA.setNetworkmask(routerB.getNetworkmask());
        tableRouterA.setGateway("0.0.0.0");
        tableRouterA.setMetric(1);
        tableRouterA.setDestination(routerB.getIp());
        tableRouterA.setRoutingTableId(BId);
        this.routingTableRepo.save(new RoutingTable(BId, routerB.getName(), routerB.getId(),routerB.getIp(),"0",routerB.getNetworkmask(),"", 1));


        tableRouterB.setRouterId(routerA.getId());
        tableRouterB.setRoutingTableName(routerA.getName());
        tableRouterB.setNetworkmask(routerA.getNetworkmask());
        tableRouterB.setGateway("0.0.0.0");
        tableRouterB.setMetric(1);
        tableRouterB.setDestination(routerA.getIp());
        tableRouterB.setRoutingTableId(AId);

        this.routingTableRepo.save(new RoutingTable(AId, routerA.getName(), routerA.getId(),routerA.getIp(),"0",routerA.getNetworkmask(),"", 1));

    }
}


