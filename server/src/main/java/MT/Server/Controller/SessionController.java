package MT.Server.Controller;

import MT.Server.Repos.sessionRepo;
import MT.Server.ResourceNotFoundException;
import MT.Server.Tables.Connection;
import MT.Server.Tables.RoutingTable;
import MT.Server.Tables.Session;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.HashMap;
import java.util.List;
import java.util.Map;

@CrossOrigin(origins = "https://localhost:3000")
@RestController
@RequestMapping("/api/v1")
public class SessionController {


  @Autowired
  private sessionRepo sessionRepo;

  @GetMapping("/getSession")
  public List<Session> getAllSession() {
    return sessionRepo.findAll();
  }

  @PostMapping("/postSession")
  public Session createSession(@RequestBody Session session){
    return sessionRepo.save(session);
  }

  @GetMapping("/getSession/{id}")
  public ResponseEntity<Session> getSessionID(@PathVariable Long id){
    Session session = sessionRepo.findById(id).orElseThrow( () -> new ResourceNotFoundException("session mit Id: "+ id+" existiert nicht"));
    return ResponseEntity.ok(session);
  }

  @PutMapping("/putSession/{id}")
  public ResponseEntity<Session> updateConnection(@PathVariable Long id, @RequestBody Session sessionTableDetails){
    Session session = sessionRepo.findById(id).orElseThrow(() -> new ResourceNotFoundException("session mit Id: "+ id+" existiert nicht"));

    session.setSessionId(sessionTableDetails.getSessionId());

    Session updatedSession = sessionRepo.save(session);
    return ResponseEntity.ok(updatedSession);
  }

  @DeleteMapping("/delSession/{id}")
  public ResponseEntity<Map<String, Boolean>> deleteSession(@PathVariable Long id){
    Session session = sessionRepo.findById(id).orElseThrow(() -> new ResourceNotFoundException("session mit Id: "+ id+" existiert nicht"));

    sessionRepo.delete(session);
    Map<String, Boolean> response = new HashMap<>();
    response.put("deleted", Boolean.TRUE);
    return  ResponseEntity.ok(response);
  }

}
