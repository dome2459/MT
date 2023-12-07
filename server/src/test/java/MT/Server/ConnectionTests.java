package MT.Server;

import MT.Server.Repos.connectionRepo;
import MT.Server.Tables.Connection;
import org.junit.jupiter.api.Assertions;
import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;

@SpringBootTest
public class ConnectionTests {

    private Connection con =new Connection(999L,1,2,11,22,false,true,"000.111.222.333");
    private connectionRepo connRepo;

    private DatabaseLoader loader;

    ConnectionTests(@Autowired connectionRepo connRepo){
        this.connRepo = connRepo;
    }

    @BeforeEach
    void setUp() {
        this.loader = new DatabaseLoader(connRepo);
    }

    @Test
    void saveConnectionToDbAndDelete(){
    long countBefor = connRepo.count();
    this.connRepo.save(con);
    long countAfter = connRepo.count();
    Assertions.assertEquals(countBefor +1 , countAfter);
    Connection savedCon = connRepo.findById(con.getConnectionId()).orElse(null);
    Assertions.assertNotNull(savedCon);
    Assertions.assertEquals(con.getConnectionId(), savedCon.getConnectionId());
    this.connRepo.delete(con);
    }

    @Test
    void updateConnectionInDB() {
        connRepo.save(con);
        Connection updateConnection = connRepo.findById(con.getConnectionId()).orElse(null);
        Assertions.assertNotNull(updateConnection);
        updateConnection.setRIP(false);
        updateConnection.setOSPF(true);
        connRepo.save(updateConnection);
        Connection retrievedUpdatedConnection = connRepo.findById(con.getConnectionId()).orElse(null);
        Assertions.assertNotNull(retrievedUpdatedConnection);
        Assertions.assertTrue(retrievedUpdatedConnection.getOSPF());
        Assertions.assertFalse(retrievedUpdatedConnection.getRIP());
        Connection updateConnections = connRepo.findById(con.getConnectionId()).orElse(null);
        Assertions.assertNotNull(updateConnections);
        updateConnections.setRIP(true);
        updateConnections.setOSPF(false);
        connRepo.save(updateConnections);
        Connection retrievedUpdatedConnections = connRepo.findById(con.getConnectionId()).orElse(null);
        Assertions.assertNotNull(retrievedUpdatedConnections);
        Assertions.assertFalse(retrievedUpdatedConnections.getOSPF());
        Assertions.assertTrue(retrievedUpdatedConnections.getRIP());
        connRepo.delete(con);
    }

    @Test
    void deleteConnectionFromDB() {
        connRepo.save(con);
        long countBEfor = connRepo.count();
        connRepo.delete(con);
        long countAfter = connRepo.count();
        Assertions.assertEquals(countBEfor -1, countAfter);
        Assertions.assertFalse(connRepo.existsById(con.getConnectionId()));

    }

}
