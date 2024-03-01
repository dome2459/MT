package MT.Server.Controller;

import MT.Server.Repos.connectionRepo;
import MT.Server.ResourceNotFoundException;
import MT.Server.Tables.Connection;
import MT.Server.Tables.RoutingTable;
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
public class ConnectionController {


    @Autowired
    private connectionRepo connectionRepo;

    @GetMapping("/getConnection")
    public List<Connection> getAllConnection() {
        return connectionRepo.findAll();
    }

    @PostMapping("/postConnection")
    public ResponseEntity<Connection> createConnection(@RequestBody Connection connection) {
        System.out.println(connection);
        Connection createdConnection = connectionRepo.save(connection);
        System.out.println(createdConnection);
        return new ResponseEntity<>(createdConnection, HttpStatus.CREATED);
    }

    @GetMapping("/getConnection/{id}")
    public ResponseEntity<Connection> getConnectionID(@PathVariable Long id) {
        Connection connection = connectionRepo.findById(id).orElseThrow(() -> new ResourceNotFoundException("routingTable mit Id: " + id + " existiert nicht"));
        return ResponseEntity.ok(connection);
    }

    @PutMapping("/putConnection/{id}")
    public ResponseEntity<Connection> updateConnection(@PathVariable Long id, @RequestBody Connection connectionDetails) {
        Connection connection = connectionRepo.findById(id).orElseThrow(() -> new ResourceNotFoundException("routingTable mit Id: " + id + " existiert nicht"));

        connection.setConnectionId(connectionDetails.getConnectionId());
        connection.setOSPF(connectionDetails.isOSPF());
        connection.setRIP(connectionDetails.isRIP());
        connection.setRouterA(connectionDetails.getRouterA());
        connection.setRouterB(connectionDetails.getRouterB());
        connection.setRouterAInterface(connectionDetails.getRouterAInterface());
        connection.setRouterBInterface(connectionDetails.getRouterBInterface());
        connection.setRouterAIp(connectionDetails.getRouterAIp());
        connection.setRouterBIp(connectionDetails.getRouterBIp());
        Connection updatedConnection = connectionRepo.save(connection);


        return ResponseEntity.ok(updatedConnection);
    }

    @DeleteMapping("/delConnection")
    public ResponseEntity<Connection> deleteConnection(@RequestBody Connection connection) {
        System.out.println("Delete Connection:::: " + connection);


//        Connection deletedConnection = connectionRepo.findByConnectionId(
//                connection.getRouterA(), connection.getRouterB(), connection.getRouterAInterface(), connection.getRouterBInterface(),
//                connection.isOSPF(), connection.getMetrik(), connection.isRIP(), connection.getRouterAIp(), connection.getRouterBIp()
//        );
//        if (deletedConnection != null) {
//            connectionRepo.delete(deletedConnection);
//            return ResponseEntity.ok().build();
//        } else {
//            return ResponseEntity.notFound().build();
//        }+
        return null;
    }
}
