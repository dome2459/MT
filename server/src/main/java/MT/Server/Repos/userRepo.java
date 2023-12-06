package MT.Server.Repos;

import MT.Server.Tables.User;
import org.springframework.data.jpa.repository.JpaRepository;

public interface userRepo extends JpaRepository<User, Long> {
}
