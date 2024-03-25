package MT.Server.Controller;

import MT.Server.Tables.Connection;
import MT.Server.Tables.Router;

import java.sql.Timestamp;

public class StartRequest {
  private Connection connection;
  private Router router;
  private Timestamp time;

  // Getter und Setter für die Felder

  public Connection getConnection() {
    return connection;
  }

  public void setConnection(Connection connection) {
    this.connection = connection;
  }

  public Router getRouter() {
    return router;
  }

  public void setRouter(Router router) {
    this.router = router;
  }

  public Timestamp getTime() {
    return time;
  }

  public void setTime(Timestamp time) {
    this.time = time;
  }
}

