package MT.Server.Controller;

import MT.Server.Repos.connectionRepo;
import MT.Server.Repos.routerRepo;
import MT.Server.Repos.sessionRepo;
import MT.Server.Repos.userRepo;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

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
    public ResponseEntity<String> startTimer() {


        return ResponseEntity.ok("Timer gestartet");
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
