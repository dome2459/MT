package MT.Server;

import jakarta.persistence.EmbeddedId;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import org.springframework.data.annotation.Id;

public class Router {


  public String name;

  public @EmbeddedId
  @GeneratedValue Integer id;
  public Boolean isActive;
  public Integer RoutingTableId;
  public String ip;

  public Router(String name, Integer id, Boolean isActive, Integer routingTableId, String ip) {
    this.name = name;
    this.id = id;
    this.isActive = isActive;
    RoutingTableId = routingTableId;
    this.ip = ip;
  }

  public String getName() {
    return name;
  }

  public void setName(String name) {
    this.name = name;
  }
  public Integer getId() {
    return id;
  }

  public void setId(Integer id) {
    this.id = id;
  }

  public Boolean getActive() {
    return isActive;
  }

  public void setActive(Boolean active) {
    isActive = active;
  }

  public Integer getRoutingTableId() {
    return RoutingTableId;
  }

  public void setRoutingTableId(Integer routingTableId) {
    RoutingTableId = routingTableId;
  }

  public String getIp() {
    return ip;
  }

  public void setIp(String ip) {
    this.ip = ip;
  }


  @Override
  public String toString() {
    return "Router{" + "name='" + name + '\'' + ", id=" + id + ", isActive=" + isActive + ", RoutingTableId=" + RoutingTableId + ", ip='" + ip + '\'' + '}';
  }

}
