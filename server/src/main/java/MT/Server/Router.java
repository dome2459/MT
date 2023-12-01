package MT.Server;

import jakarta.persistence.*;
import org.springframework.data.annotation.Id;


@Entity
@Table(name="router")
public class Router {

  @Column(name = "name")
  private String name;

  @Id
  @GeneratedValue(strategy = GenerationType.AUTO) 
  private Long id;

  @Column(name = "isActive")
  private Boolean isActive;

  @Column(name = "RoutingTableId")
  private Integer RoutingTableId;
  
  @Column(name = "ip")
  private String ip;

  public Router(String name, Long id, Boolean isActive, Integer routingTableId, String ip) {
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
  public Long getId() {
    return id;
  }

  public void setId(Long id) {
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
