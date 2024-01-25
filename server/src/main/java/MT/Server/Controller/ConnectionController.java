package MT.Server.Controller;

import MT.Server.Repos.connectionRepo;
import MT.Server.ResourceNotFoundException;
import MT.Server.Tables.Connection;
import MT.Server.Tables.RoutingTable;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.HashMap;
import java.util.List;
import java.util.Map;

@CrossOrigin(origins = "https://localhost:3000")
@RestController
@RequestMapping("/api/v1")
public class ConnectionController {


  @Autowired
  private connectionRepo connectionRepo;

  @GetMapping("/getConnection")
  public List<Connection> getAllConnection() {
    return connectionRepo.findAll();
  }

  @PostMapping("/postConnection")
  public Connection createConnection(@RequestBody Connection connection){

    return connectionRepo.save(connection);
  }

  @GetMapping("/getConnection/{id}")
  public ResponseEntity<Connection> getConnectionID(@PathVariable Long id){
    Connection connection = connectionRepo.findById(id).orElseThrow( () -> new ResourceNotFoundException("routingTable mit Id: "+ id+" existiert nicht"));
    return ResponseEntity.ok(connection);
  }

  @PutMapping("/putConnection/{id}")
  public ResponseEntity<Connection> updateConnection(@PathVariable Long id, @RequestBody Connection connectionDetails){
    Connection connection = connectionRepo.findById(id).orElseThrow(() -> new ResourceNotFoundException("routingTable mit Id: "+ id+" existiert nicht"));

    connection.setConnectionId(connectionDetails.getConnectionId());
    connection.setIp(connectionDetails.getIp());
    connection.setOSPF(connectionDetails.getOSPF());
    connection.setRIP(connectionDetails.getRIP());
    connection.setRouterA(connectionDetails.getRouterA());
    connection.setRouterB(connectionDetails.getRouterB());
    connection.setRouterAInterface(connectionDetails.getRouterAInterface());
    connection.setRouterBInterface(connectionDetails.getRouterBInterface());

    Connection updatedConnection = connectionRepo.save(connection);



    return ResponseEntity.ok(updatedConnection);
  }

  @DeleteMapping("/delConnection/{id}")
  public ResponseEntity<Map<String, Boolean>> deleteConnection(@PathVariable Long id){
    Connection connection = connectionRepo.findById(id).orElseThrow(() -> new ResourceNotFoundException("connection mit Id: "+ id+" existiert nicht"));

    connectionRepo.delete(connection);
    Map<String, Boolean> response = new HashMap<>();
    response.put("deleted", Boolean.TRUE);
    return  ResponseEntity.ok(response);
  }
}
