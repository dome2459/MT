package MT.Server.Controller;


import MT.Server.Repos.routerRepo;
import MT.Server.ResourceNotFoundException;
import MT.Server.Tables.Router;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

@CrossOrigin(origins = "https://localhost:3000")
@RestController
@RequestMapping("/api/v1")
public class RouterController {

  @Autowired
  private routerRepo repo;

  @GetMapping("/router/list")
  public List<Router> getAllRouter() {
    return repo.findAll();
  }

  @PostMapping("/router")
  public Router createRouter(@RequestBody Router router){
    return repo.save(router);
  }

  @GetMapping("/router/{id}")
  public  ResponseEntity<Router> getRouterID(@PathVariable Long id){
    Router router = repo.findById(id).orElseThrow( () -> new ResourceNotFoundException("Router mit Id: "+ id+" existiert nicht"));
    return  ResponseEntity.ok(router);
  }

  @PutMapping("/router/{id}")
  public ResponseEntity<Router> updateRouter(@PathVariable Long id, @RequestBody Router routerDetails){
    Router router = repo.findById(id).orElseThrow(() -> new ResourceNotFoundException("Router mit Id: "+ id+" existiert nicht"));

    router.setName(routerDetails.getName());
    router.setId(routerDetails.getId());
    router.setActive(routerDetails.getActive());
    router.setRoutingTableId(routerDetails.getRoutingTableId());
    router.setIp(routerDetails.getIp());

    Router updatedRouter = repo.save(router);
    return ResponseEntity.ok(updatedRouter);
  }

  @DeleteMapping("/router/delete/{id}")
  public ResponseEntity<Map<String, Boolean>> deleteRouter(@PathVariable Long id){
    Router router = repo.findById(id).orElseThrow(() -> new ResourceNotFoundException("Router mit Id: "+ id+" existiert nicht"));

    repo.delete(router);
    Map<String, Boolean> response = new HashMap<>();
    response.put("deleted", Boolean.TRUE);
    return  ResponseEntity.ok(response);
  }

}
