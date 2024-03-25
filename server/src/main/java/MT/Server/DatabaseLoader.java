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


  }
}
