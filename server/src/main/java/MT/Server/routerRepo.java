package MT.Server;

import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;

public interface routerRepo extends JpaRepository<Router, Long> {
  List<Router> findByName(String name);
  List<Router> findByisActive(Boolean isActive);

}
