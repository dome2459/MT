package MT.Server;

import MT.Server.Repos.*;
import MT.Server.Tables.*;
import org.springframework.boot.CommandLineRunner;
import org.springframework.stereotype.Component;

@Component
public class DatabaseLoader implements CommandLineRunner {



  private final routerRepo routerRepository;
  private final routingTableRepo routingTableRepo;
  private final connectionRepo connectionRepo;
  private final sessionRepo sessionRepo;
  private final userRepo userRepo;

  public DatabaseLoader(routerRepo routerRepository, MT.Server.Repos.routingTableRepo routingTableRepo, MT.Server.Repos.connectionRepo connectionRepo, MT.Server.Repos.sessionRepo sessionRepo, MT.Server.Repos.userRepo userRepo) {
    this.routerRepository = routerRepository;
    this.routingTableRepo = routingTableRepo;
    this.connectionRepo = connectionRepo;
    this.sessionRepo = sessionRepo;
    this.userRepo = userRepo;
  }


  @Override
  public void run(String... args) throws Exception {
    this.routerRepository.save(new Router("test", 1L,true,1,"000.000.000.001"));
    this.routingTableRepo.save(new RoutingTable("test", 1L,true,1,"000.000.000.001"));
    this.sessionRepo.save(new Session("test", 1L,true,1,"000.000.000.001"));
    this.connectionRepo.save(new Connection(1L, ,true,1,"000.000.000.001"));
    this.userRepo.save(new User(1L, "Name"));

  }
}
