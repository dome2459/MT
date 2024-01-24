package MT.Server.Controller;

import MT.Server.Repos.connectionRepo;
import MT.Server.Repos.routerRepo;
import MT.Server.Repos.sessionRepo;
import MT.Server.Repos.userRepo;
import MT.Server.ResourceNotFoundException;
import MT.Server.Tables.Connection;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@CrossOrigin(origins = "https://localhost:3000")
@RestController
@RequestMapping("/api/v1")
public class TimerController {

    @Autowired
    private MT.Server.Repos.userRepo userRepo;

    @Autowired
    private MT.Server.Repos.sessionRepo sessionRepo;
    @Autowired
    private routerRepo routerRepo;

    @Autowired
    private MT.Server.Repos.connectionRepo connectionRepo;

    @PostMapping("/start")
    public ResponseEntity<Connection> startTimer(Connection connectionFromFrontend) {
        Connection connection = connectionRepo.findById(connectionFromFrontend.getConnectionId()).orElseThrow(
                () -> new ResourceNotFoundException("routingTable mit Id: "+ connectionFromFrontend.getConnectionId()+" existiert nicht"));

        return ResponseEntity.ok(connection);
    }

    @PostMapping("/stop")
    public ResponseEntity<String> stopTimer(){


        return ResponseEntity.ok("Timer gestoppt");
    }

    @PostMapping("/reset")
    public ResponseEntity<String> resetTimer(){



        return ResponseEntity.ok("Timer resetet");
    }
}
