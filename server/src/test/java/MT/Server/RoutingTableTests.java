package MT.Server;

import MT.Server.Repos.routingTableRepo;
import org.junit.jupiter.api.BeforeEach;
import org.springframework.boot.test.context.SpringBootTest;

@SpringBootTest
public class RoutingTableTests {


    private routingTableRepo routTRepo;

    private DatabaseLoader loader;

    @BeforeEach
    void setUp() {
        this.loader = new DatabaseLoader(routTRepo);
    }

}
