package MT.Server.Repos;

import MT.Server.Tables.Router;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface routerRepo extends JpaRepository<Router, Long> {

}
