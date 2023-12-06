package MT.Server;

import MT.Server.Repos.userRepo;
import org.junit.jupiter.api.BeforeEach;
import org.springframework.boot.test.context.SpringBootTest;

@SpringBootTest
public class UserTests {


    private userRepo usRep;

    private DatabaseLoader loader;

    @BeforeEach
    void setUp() {
        this.loader = new DatabaseLoader(usRep);
    }



}
