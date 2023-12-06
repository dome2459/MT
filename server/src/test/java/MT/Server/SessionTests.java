package MT.Server;

import MT.Server.Repos.sessionRepo;
import org.junit.jupiter.api.BeforeEach;
import org.springframework.boot.test.context.SpringBootTest;

@SpringBootTest
public class SessionTests {

    private sessionRepo sessRepo;

    private DatabaseLoader loader;

    @BeforeEach
    void setUp() {
        this.loader = new DatabaseLoader(sessRepo);
    }

}
