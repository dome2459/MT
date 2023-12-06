package MT.Server.Repos;

import MT.Server.Tables.RoutingTable;
import org.springframework.data.jpa.repository.JpaRepository;

public interface routingTableRepo extends JpaRepository<RoutingTable, Long> {
}
