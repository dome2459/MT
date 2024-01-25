package MT.Server.Tables;


import jakarta.persistence.*;



@Entity
@Table(name="router")
public class Router {


  @Id
  @GeneratedValue(strategy = GenerationType.AUTO)
  private Long id;

  @Column(name = "name")
  private String name;
  @Column(name = "isActive")
  private boolean isActive;

  @Column(name = "routingTableId")
  private Integer RoutingTableId;
  
  @Column(name = "ip")
  private String ip;
  public Router(){
  }
  public Router(String name, Long id, boolean isActive, Integer routingTableId, String ip) {
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

  public boolean getActive() {
    return isActive;
  }

  public void setActive(boolean active) {
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
