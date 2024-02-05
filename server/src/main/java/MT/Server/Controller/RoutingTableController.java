package MT.Server.Controller;

import MT.Server.Repos.*;
import MT.Server.ResourceNotFoundException;
import MT.Server.Tables.RoutingTable;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.HashMap;
import java.util.List;
import java.util.Map;

// Erlaubt Cross-Origin-Anfragen von "https://localhost:3000"
@CrossOrigin(origins = "https://localhost:3000")
@RestController
@RequestMapping("/api/v1")
public class RoutingTableController {

  // Automatische Verdrahtung des RoutingTable Repositories
  @Autowired
  private routingTableRepo routingTableRepo;

  // Endpunkt zum Abrufen aller RoutingTable-Einträge
  @GetMapping("/getRoutingTable")
  public List<RoutingTable> getAllRoutingTable() {
    return routingTableRepo.findAll();
  }

  // Endpunkt zum Erstellen eines neuen RoutingTable-Eintrags
  @PostMapping("/postRoutingTable")
  public  ResponseEntity<RoutingTable> createRoutingTable(@RequestBody RoutingTable routingTable) {
    RoutingTable createdRoutingTable = routingTableRepo.save(routingTable);
    return new ResponseEntity<>(createdRoutingTable, HttpStatus.CREATED);
  }

  // Endpunkt zum Abrufen eines bestimmten RoutingTable-Eintrags anhand der ID
  @GetMapping("/getRoutingTable/{id}")
  public ResponseEntity<RoutingTable> getRoutingTableID(@PathVariable Long id) {
    // Sucht nach dem Eintrag mit der angegebenen ID und gibt eine Fehlermeldung aus, falls nicht gefunden
    RoutingTable routingTable = routingTableRepo.findById(id)
            .orElseThrow(() -> new ResourceNotFoundException("routingTable mit Id: " + id + " existiert nicht"));
    return ResponseEntity.ok(routingTable);
  }

  // Endpunkt zum Aktualisieren eines bestimmten RoutingTable-Eintrags anhand der ID
  @PutMapping("/putRoutingTable/{id}")
  public ResponseEntity<RoutingTable> updateRoutingTable(@PathVariable Long id,
                                                         @RequestBody RoutingTable routingTableDetails) {
    // Sucht nach dem Eintrag mit der angegebenen ID und gibt eine Fehlermeldung aus, falls nicht gefunden
    RoutingTable routingTable = routingTableRepo.findById(id)
            .orElseThrow(() -> new ResourceNotFoundException("routingTable mit Id: " + id + " existiert nicht"));

    // Aktualisiert die Felder des RoutingTable-Eintrags mit den neuen Werten
    routingTable.setRoutingTableId(routingTableDetails.getRoutingTableId());
    routingTable.setRoutingTableName(routingTableDetails.getRoutingTableName());
    routingTable.setRouterId(routingTableDetails.getRouterId());
    routingTable.setDestination(routingTableDetails.getDestination());
    routingTable.setGateway(routingTableDetails.getGateway());
    routingTable.setInterface(routingTableDetails.getInterface());
    routingTable.setMetric(routingTableDetails.getMetric());
    routingTable.setNetworkmask(routingTableDetails.getNetworkmask());

    // Speichert und gibt den aktualisierten RoutingTable-Eintrag zurück
    RoutingTable updatedRoutingTable = routingTableRepo.save(routingTable);
    return ResponseEntity.ok(updatedRoutingTable);
  }

  // Endpunkt zum Löschen eines bestimmten RoutingTable-Eintrags anhand der ID
  @DeleteMapping("/delRoutingTable/{id}")
  public ResponseEntity<Map<String, Boolean>> deleteRoutingTable(@PathVariable Long id) {
    // Sucht nach dem Eintrag mit der angegebenen ID und gibt eine Fehlermeldung aus, falls nicht gefunden
    RoutingTable routingTable = routingTableRepo.findById(id)
            .orElseThrow(() -> new ResourceNotFoundException("routingTable mit Id: " + id + " existiert nicht"));

    // Löscht den RoutingTable-Eintrag
    routingTableRepo.delete(routingTable);

    // Erstellt eine Antwortmap für die Bestätigung des Löschvorgangs
    Map<String, Boolean> response = new HashMap<>();
    response.put("deleted", Boolean.TRUE);
    return ResponseEntity.ok(response);
  }
}