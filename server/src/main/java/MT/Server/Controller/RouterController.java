package MT.Server.Controller;


import MT.Server.Repos.*;
import MT.Server.ResourceNotFoundException;
import MT.Server.Tables.*;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.HashMap;
import java.util.List;
import java.util.Map;

@CrossOrigin(origins = "https://localhost:3000")
@RestController
@RequestMapping("/api/v1")
public class RouterController {

  @Autowired
  private routerRepo routerRepo;

  @GetMapping("/router")
  public List<Router> getAllRouter() {
    return routerRepo.findAll();
  }

  @PostMapping("/router")
  public Router createRouter(@RequestBody Router router){
    return routerRepo.save(router);
  }

  @GetMapping("/router/{id}")
  public  ResponseEntity<Router> getRouterID(@PathVariable Long id){
    Router router = routerRepo.findById(id).orElseThrow( () -> new ResourceNotFoundException("Router mit Id: "+ id+" existiert nicht"));
    return  ResponseEntity.ok(router);
  }

  @PutMapping("/router/{id}")
  public ResponseEntity<Router> updateRouter(@PathVariable Long id, @RequestBody Router routerDetails){
    Router router = routerRepo.findById(id).orElseThrow(() -> new ResourceNotFoundException("Router mit Id: "+ id+" existiert nicht"));

    router.setName(routerDetails.getName());
    router.setId(routerDetails.getId());
    router.setActive(routerDetails.getActive());
    router.setRoutingTableId(routerDetails.getRoutingTableId());
    router.setIp(routerDetails.getIp());

    Router updatedRouter = routerRepo.save(router);
    return ResponseEntity.ok(updatedRouter);
  }

  @DeleteMapping("/router/{id}")
  public ResponseEntity<Map<String, Boolean>> deleteRouter(@PathVariable Long id){
    Router router = routerRepo.findById(id).orElseThrow(() -> new ResourceNotFoundException("Router mit Id: "+ id+" existiert nicht"));

    routerRepo.delete(router);
    Map<String, Boolean> response = new HashMap<>();
    response.put("deleted", Boolean.TRUE);
    return  ResponseEntity.ok(response);
  }

}
