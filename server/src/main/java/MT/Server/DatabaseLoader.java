package MT.Server;

import MT.Server.Repos.*;
import MT.Server.Tables.*;
import org.springframework.boot.CommandLineRunner;
import org.springframework.stereotype.Component;

@Component
public class DatabaseLoader implements CommandLineRunner {



  private routerRepo routerRepository;
  private routingTableRepo routingTableRepo;
  private connectionRepo connectionRepo;
  private sessionRepo sessionRepo;
  private userRepo userRepo;
  public DatabaseLoader() {

  }
  public DatabaseLoader(routerRepo routerRepository) {
    this.routerRepository = routerRepository;

  }
  public DatabaseLoader(routingTableRepo routingTableRepo) {
    this.routingTableRepo = routingTableRepo;
  }
  public DatabaseLoader(sessionRepo sessionRepo) {
    this.sessionRepo = sessionRepo;
  }
  public DatabaseLoader(userRepo userRepo) {
    this.userRepo = userRepo;
  }
  public DatabaseLoader(connectionRepo connectionRepo) {
    this.connectionRepo = connectionRepo;
  }





  @Override
  public void run(String... args) throws Exception {
    this.routerRepository.save(new Router("test", 1L,true,1,"000.000.000.001"));
    this.routingTableRepo.save(new RoutingTable(1L,"10.0.20.30","10.0.0.0","28", 5, 2));
    this.sessionRepo.save(new Session(1L));
    this.connectionRepo.save(new Connection(1L, 10,20,300,400,false, true,"10.20.30.40"));
    this.userRepo.save(new User(1L, "Name"));

  }
}