package MT.Server.Repos;

import MT.Server.Tables.Connection;
import org.springframework.data.jpa.repository.JpaRepository;

public interface connectionRepo extends JpaRepository<Connection, Long> {
}
