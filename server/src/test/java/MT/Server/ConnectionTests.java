package MT.Server;

import MT.Server.Repos.connectionRepo;
import MT.Server.Tables.Connection;
import org.junit.jupiter.api.BeforeEach;
import org.springframework.boot.test.context.SpringBootTest;

@SpringBootTest
public class ConnectionTests {

    //private ConnectionTests = new Connection();
    private connectionRepo connRepo;

    private DatabaseLoader loader;

    @BeforeEach
    void setUp() {
        this.loader = new DatabaseLoader(connRepo);
    }


}
