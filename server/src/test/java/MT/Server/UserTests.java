package MT.Server;

import MT.Server.Repos.userRepo;
import MT.Server.Tables.User;
import org.junit.jupiter.api.Assertions;
import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;

@SpringBootTest
public class UserTests {

    private userRepo userRepo;

    private DatabaseLoader loader;

    private  User user = new User(234L, "Nikolaus");

    UserTests(@Autowired userRepo userRepo){
        this.userRepo = userRepo;
    }

    @BeforeEach
    void setUp() {
        this.loader = new DatabaseLoader(userRepo);
    }

@Test
void saveUserToDB(){
        long beforsave = userRepo.count();
        userRepo.save(user);
        long after = userRepo.count();
    Assertions.assertEquals(beforsave +1, after);
    User savedUser = userRepo.findById(user.getUserId()).orElse(null);
    Assertions.assertNotNull(savedUser);
    Assertions.assertEquals("Nikolaus", savedUser.getUserName());
    userRepo.delete(user);
}


@Test
void updateUserFromDB(){
   userRepo.save(user);
   User updatedUser = userRepo.findById(user.getUserId()).orElse(null);
   Assertions.assertNotNull(updatedUser);
   updatedUser.setUserName("Weihnachtsmann");
   userRepo.save(updatedUser);
   User retrievedUpdatedUser = userRepo.findById(user.getUserId()).orElse(null);
   Assertions.assertNotNull(retrievedUpdatedUser);
   Assertions.assertEquals("Weihnachtsmann", retrievedUpdatedUser.getUserName());
   userRepo.delete(retrievedUpdatedUser);
   userRepo.delete(updatedUser);
   userRepo.delete(user);
}

}
