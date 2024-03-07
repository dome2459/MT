package MT.Server.Controller;


import MT.Server.Repos.routerRepo;
import MT.Server.ResourceNotFoundException;
import MT.Server.Tables.Router;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.HashMap;
import java.util.List;
import java.util.Map;

@CrossOrigin(origins = "*")
@RestController
@RequestMapping("/api/v1")
public class RouterController {

  @Autowired
  private routerRepo repo;

  @GetMapping("/router/list")
  public List<Router> getAllRouter() {

    System.out.println(repo.findAll());
    return repo.findAll();
  }

  @PostMapping("/router/create")
  public  ResponseEntity<Router> createRouter(@RequestBody Router router){
    Router createdRouter = repo.save(router);
    System.out.println(router);
    System.out.println(createdRouter);
    return new ResponseEntity<>(createdRouter, HttpStatus.CREATED);
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
    router.setActive(routerDetails.isActive());
    router.setRoutingTableId(routerDetails.getRoutingTableId());
    router.setIp(routerDetails.getIp());
    router.setNetworkmask(routerDetails.getNetworkmask());
    router.setPosx(routerDetails.getPosx());
    router.setPosY(routerDetails.getPosy());

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
