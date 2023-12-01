package MT.Server;


import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.ArrayList;
import java.util.List;

@CrossOrigin(origins = "https://localhost:8081")
@RestController
@RequestMapping("/api")
public class RouterController {

  @Autowired
  routerRepo repo;

  @GetMapping("/router")
  public ResponseEntity<List<Router>> getAllRouter(@RequestParam(required = false)String name, Boolean isActive){
    try{
      List<Router> router = new ArrayList<Router>();
      if( name== null){
        repo.findByName(name).forEach(router::add);
      }else{
        repo.findByisActive(isActive).forEach(router::add);
      }if(router.isEmpty()){
        return  new ResponseEntity<>(HttpStatus.NO_CONTENT);
      }
      return  new ResponseEntity<>(router, HttpStatus.OK);

    }catch (Exception e) {
      return new ResponseEntity<>(null, HttpStatus.INTERNAL_SERVER_ERROR);
    }
  }
}
