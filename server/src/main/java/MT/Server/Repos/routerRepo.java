package MT.Server.Repos;

import MT.Server.Tables.Router;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface routerRepo extends JpaRepository<Router, Long> {

}
