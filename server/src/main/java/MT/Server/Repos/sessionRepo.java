package MT.Server.Repos;

import MT.Server.Tables.Session;
import org.springframework.data.jpa.repository.JpaRepository;

public interface sessionRepo extends JpaRepository<Session, Long> {
}
