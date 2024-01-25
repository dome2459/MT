package MT.Server;

import MT.Server.Repos.routingTableRepo;
import MT.Server.Tables.RoutingTable;
import org.junit.jupiter.api.Assertions;
import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;

@SpringBootTest
public class RoutingTableTests {


    private routingTableRepo routTRepo;

    private DatabaseLoader loader;

    private RoutingTable table = new RoutingTable(1L,"Test","140.0.0.0","172.0.1.2","255.255.255.0","ea12",5);

    RoutingTableTests(@Autowired routingTableRepo routingTRepo){
        this.routTRepo = routingTRepo;
    }

    @BeforeEach
    void setUp() {
        this.loader = new DatabaseLoader(routTRepo);
    }


    @Test
    void saveRouterTableDB(){
        long countBefor = routTRepo.count();
        routTRepo.save(table);
        long countAfter = routTRepo.count();
        Assertions.assertEquals(countBefor +1, countAfter);

        RoutingTable savedTable = routTRepo.findById(table.getRoutingTableId()).orElse(null);

        Assertions.assertNotNull(savedTable);

        Assertions.assertEquals("140.0.0.0", savedTable.getDestination());
        Assertions.assertEquals("172.0.1.2", savedTable.getGateway());
        Assertions.assertEquals("255.255.255.0", savedTable.getNetworkmask());
        Assertions.assertEquals("ea12", savedTable.getInterface());
        Assertions.assertEquals(5, savedTable.getMetric());
        routTRepo.deleteAll();
    }

    @Test
    void modifyTable(){
        routTRepo.save(table);
        RoutingTable savedTable = routTRepo.findById(table.getRoutingTableId()).orElse(null);
        Assertions.assertNotNull(savedTable);
        savedTable.setInterface("ea20");
        savedTable.setDestination("120.0.0.0");
        savedTable.setGateway("140.0.0.0");
        savedTable.setMetric(65);
        Assertions.assertEquals("120.0.0.0", savedTable.getDestination());
        Assertions.assertEquals("140.0.0.0", savedTable.getGateway());
        Assertions.assertEquals("255.255.255.0", savedTable.getNetworkmask());
        Assertions.assertEquals("ea20", savedTable.getInterface());
        Assertions.assertEquals(65, savedTable.getMetric());
        routTRepo.deleteAll();
    }

}
