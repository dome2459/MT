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
  @Column(name = "networkmask")
  private String networkmask;
  @Column(name = "isActive")
  private boolean isActive;

  @Column(name = "routingTableId")
  private Integer RoutingTableId;

  @Column(name = "ip")
  private String ip;
  @Column(name = "posx")
  private int posx;

  @Column(name = "posy")
  private int posy;

  public Router(){
  }
  public Router(String name, Long id, boolean isActive, Integer routingTableId, String ip, String networkmask, int posx, int posy) {
    this.name = name;
    this.id = id;
    this.isActive = isActive;
    RoutingTableId = routingTableId;
    this.posx = posx;
    this.posy = posy;
    this.ip = ip;
    this.networkmask=networkmask;
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

  public int getRoutingTableId() {
    return RoutingTableId;
  }

  public void setRoutingTableId(int routingTableId) {
    RoutingTableId = routingTableId;
  }

  public String getIp() {
    return ip;
  }

  public void setIp(String ip) {
    this.ip = ip;
  }
  public String getNetworkmask() {
    return networkmask;
  }

  public void setNetworkmask(String networkmask) {
    this.networkmask = networkmask;
  }

  public int getPosx() {
    return posx;
  }

  public void setPosx(int posx) {
    this.posx = posx;
  }

  public int getPosy() {
    return posy;
  }

  public void setPosY(int posy) {
    this.posy = posy;
  }

  @Override
  public String toString() {
    return "Router{" + "name='" + name + '\'' + ", id=" + id + ", isActive=" + isActive + ", RoutingTableId=" + RoutingTableId + ", ip='" + ip  + ", posx='" + posx  + ", posy='" + posy+ '\'' + '}';
  }

}
