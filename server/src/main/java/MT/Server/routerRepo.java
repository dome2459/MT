package MT.Server;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface routerRepo extends JpaRepository<Router, Long> {

}
