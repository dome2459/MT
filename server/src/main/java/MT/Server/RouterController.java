package MT.Server;


import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@CrossOrigin(origins = "https://localhost:8081")
@RestController
@RequestMapping("/api")
public class RouterController {

  @Autowired
  routerRepo repo;

  @GetMapping("/router")
  public ResponseEntity<List<Router>> getAllRouter(@RequestParam(required = false)String name){

  }
}
