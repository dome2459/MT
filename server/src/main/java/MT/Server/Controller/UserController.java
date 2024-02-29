package MT.Server.Controller;

import MT.Server.Repos.userRepo;
import MT.Server.ResourceNotFoundException;
import MT.Server.Tables.Connection;
import MT.Server.Tables.User;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.HashMap;
import java.util.List;
import java.util.Map;

@CrossOrigin(origins = "*")
@RestController
@RequestMapping("/api/v1")
public class UserController {


  @Autowired
  private userRepo userRepo;

  @GetMapping("/getUser")
  public List<User> getAllUser() {
    return userRepo.findAll();
  }

  @PostMapping("/postUser")
  public User createUser(@RequestBody User user){
    return userRepo.save(user);
  }

  @GetMapping("/getUser/{id}")
  public ResponseEntity<User> getConnectionID(@PathVariable Long id){
    User user = userRepo.findById(id).orElseThrow( () -> new ResourceNotFoundException("routingTable mit Id: "+ id+" existiert nicht"));
    return ResponseEntity.ok(user);
  }

  @PutMapping("/putUser/{id}")
  public ResponseEntity<User> updateUser(@PathVariable Long id, @RequestBody User userDetails){
    User user = userRepo.findById(id).orElseThrow(() -> new ResourceNotFoundException("user mit Id: "+ id+" existiert nicht"));

    user.setUserId(userDetails.getUserId());
    user.setUserName(userDetails.getUserName());

    User updatedConnection = userRepo.save(user);
    return ResponseEntity.ok(updatedConnection);
  }

  @DeleteMapping("/delUser/{id}")
  public ResponseEntity<Map<String, Boolean>> deleteUser(@PathVariable Long id){
    User user = userRepo.findById(id).orElseThrow(() -> new ResourceNotFoundException("connection mit Id: "+ id+" existiert nicht"));

    userRepo.delete(user);
    Map<String, Boolean> response = new HashMap<>();
    response.put("deleted", Boolean.TRUE);
    return  ResponseEntity.ok(response);
  }
}
