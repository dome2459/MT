package MT.Server.Controller;


import MT.Server.Repos.*;
import MT.Server.ResourceNotFoundException;
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
public class RoutingTableController {

  @Autowired
  private routingTableRepo routingTableRepo;

  @GetMapping("/routingTable")
  public List<RoutingTable> getAllRoutingTable() {
    return routingTableRepo.findAll();
  }

  @PostMapping("/routingTable")
  public RoutingTable createRoutingTable(@RequestBody RoutingTable routingTable){
    return routingTableRepo.save(routingTable);
  }

  @GetMapping("/routingTable/{id}")
  public ResponseEntity<RoutingTable> getRoutingTableID(@PathVariable Long id){
    RoutingTable routingTable = routingTableRepo.findById(id).orElseThrow( () -> new ResourceNotFoundException("routingTable mit Id: "+ id+" existiert nicht"));
    return ResponseEntity.ok(routingTable);
  }

  @PutMapping("/routingTable/{id}")
  public ResponseEntity<RoutingTable> updateRoutingTable(@PathVariable Long id, @RequestBody RoutingTable routingTableDetails){
    RoutingTable routingTable = routingTableRepo.findById(id).orElseThrow(() -> new ResourceNotFoundException("routingTable mit Id: "+ id+" existiert nicht"));

    routingTable.setDestination(routingTableDetails.getDestination());
    routingTable.setGateway(routingTableDetails.getGateway());
    routingTable.setInterface(routingTableDetails.getInterface());
    routingTable.setMetric(routingTableDetails.getMetric());
    routingTable.setNetworkmask(routingTableDetails.getNetworkmask());
    routingTable.setRoutingTableId(routingTableDetails.getRoutingTableId());

    RoutingTable updatedRoutingTable = routingTableRepo.save(routingTable);
    return ResponseEntity.ok(updatedRoutingTable);
  }

  @DeleteMapping("/routingTable/{id}")
  public ResponseEntity<Map<String, Boolean>> deleteRoutingTable(@PathVariable Long id){
    RoutingTable routingTable = routingTableRepo.findById(id).orElseThrow(() -> new ResourceNotFoundException("routingTable mit Id: "+ id+" existiert nicht"));

    routingTableRepo.delete(routingTable);
    Map<String, Boolean> response = new HashMap<>();
    response.put("deleted", Boolean.TRUE);
    return  ResponseEntity.ok(response);
  }

}
