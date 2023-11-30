package MT.Server;

import org.springframework.boot.CommandLineRunner;
import org.springframework.stereotype.Component;

@Component
public class DatabaseLoader implements CommandLineRunner {
  private final routerRepo routerRepository;

  public DatabaseLoader(routerRepo routerRepository) {
    this.routerRepository = routerRepository;
  }


  @Override
  public void run(String... args) throws Exception {
    this.routerRepository.save(new Router("test", 1L,true,1,"000.000.000.001"));

  }
}
