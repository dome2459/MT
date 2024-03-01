package MT.Server.Repos;

import MT.Server.Tables.Connection;
import org.springframework.data.jpa.repository.JpaRepository;

public interface connectionRepo extends JpaRepository<Connection, Long> {

    // Methode zum Finden einer Connection anhand ihrer Attribute
   // Connection findByConnectionId(String routerAId, String routerBId, String routerAInterface, String routerBInterface, boolean OSPF, String metrik, boolean RIP, String routerAIp, String routerBIp);
}
