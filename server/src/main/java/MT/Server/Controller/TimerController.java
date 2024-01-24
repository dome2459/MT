package MT.Server.Controller;

import MT.Server.Repos.routerRepo;
import MT.Server.ResourceNotFoundException;
import MT.Server.Tables.Connection;
import MT.Server.Tables.Router;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;


@CrossOrigin(origins = "https://localhost:3000")
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
    private MT.Server.Repos.connectionRepo connectionRepo;

    @PostMapping("/start")
    public ResponseEntity<StartResponse> startTimer(@RequestBody Connection connectionFromFrontend,
                                                    @RequestBody Router routerFromFrontend) {

        StartResponse response = new StartResponse(connectionFromFrontend, routerFromFrontend);
        pruefen(response.getConnection(), response.getRouter());

       if(geprueft){
           return ResponseEntity.ok(response);
       }else{
           return ResponseEntity.notFound().build();
       }

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

        // Hier prüfen, ob sowohl Connection als auch Router gefunden wurden
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

     public Router getRouter() {
         return router;
     }

     public void setRouter(Router router) {
         this.router = router;
     }

     private Connection connection;
     private Router router;

     public StartResponse(Connection connection, Router router) {
         this.connection = connection;
         this.router = router;
     }

 }
}


