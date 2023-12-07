package MT.Server;

import MT.Server.Repos.sessionRepo;
import MT.Server.Tables.Session;
import org.junit.jupiter.api.Assertions;
import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;

@SpringBootTest
public class SessionTests {

    private sessionRepo sessRepo;

    private DatabaseLoader loader;


    private Session session = new Session(123459L);

    SessionTests(@Autowired sessionRepo sessionRepo){
        this.sessRepo = sessionRepo;
    }

    @BeforeEach
    void setUp() {
        this.loader = new DatabaseLoader(sessRepo);
    }


    @Test
    void sessionToDBandDelete(){
    long countBefor = sessRepo.count();
    sessRepo.save(session);
    long countAfter = sessRepo.count();
    Assertions.assertEquals(countBefor +1, countAfter);
    Session savedSession = sessRepo.findById(session.getSessionId()).orElse(null);
    Assertions.assertNotNull(savedSession);
    Assertions.assertEquals(savedSession.getSessionId(),savedSession.getSessionId());
    Assertions.assertEquals(session.getSessionId(),savedSession.getSessionId());
    sessRepo.delete(savedSession);
    sessRepo.delete(session);

    }


}

