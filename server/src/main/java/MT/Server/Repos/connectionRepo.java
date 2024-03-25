package MT.Server.Repos;

import MT.Server.Tables.Connection;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import java.util.List;

public interface connectionRepo extends JpaRepository<Connection, Long> {

}
