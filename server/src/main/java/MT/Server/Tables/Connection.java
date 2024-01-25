package MT.Server.Tables;

import jakarta.persistence.*;

@Entity
@Table(name="connection")
public class Connection {

  @Id
  @GeneratedValue(strategy = GenerationType.AUTO)
  private Long connectionId;

  @Column(name = "RouterA")
  private Integer routerAId;
  @Column(name = "RouterB")
  private Integer routerBId;
  @Column(name = "RouterAInterface")
  private Integer routerAInterface;
  @Column(name = "RouterBInterface")
  private Integer routerBInterface;

  @Column(name = "OSPF")
  private boolean isOSPF;
  @Column(name = "RIP")
  private boolean isRIP;

  @Column(name = "ip")
  private String ip;
  public Connection(){
  }
  public Connection(Long connectionId, Integer routerA, Integer routerB, Integer routerAInterface, Integer routerBInterface, boolean isOSPF, boolean isRIP, String ip) {
    this.connectionId = connectionId;
    this.routerAId = routerA;
    this.routerBId = routerB;
    this.routerAInterface = routerAInterface;
    this.routerBInterface = routerBInterface;
    this.isOSPF = isOSPF;
    this.isRIP = isRIP;
    this.ip = ip;
  }
  public Long getConnectionId() {
    return connectionId;
  }

  public void setConnectionId(Long connectionId) {
    this.connectionId = connectionId;
  }

  public Integer getRouterA() {
    return routerAId;
  }

  public void setRouterA(Integer routerA) {
    this.routerAId = routerA;
  }

  public Integer getRouterB() {
    return routerBId;
  }

  public void setRouterB(Integer routerB) {
    this.routerBId = routerB;
  }

  public Integer getRouterAInterface() {
    return routerAInterface;
  }

  public void setRouterAInterface(Integer routerAInterface) {
    this.routerAInterface = routerAInterface;
  }

  public Integer getRouterBInterface() {
    return routerBInterface;
  }

  public void setRouterBInterface(Integer routerBInterface) {
    this.routerBInterface = routerBInterface;
  }

  public boolean getOSPF() {
    return isOSPF;
  }

  public void setOSPF(boolean OSPF) {
    isOSPF = OSPF;
  }

  public boolean getRIP() {
    return isRIP;
  }

  public void setRIP(boolean RIP) {
    isRIP = RIP;
  }

  public String getIp() {
    return ip;
  }

  public void setIp(String ip) {
    this.ip = ip;
  }

  @Override
  public String toString() {
    return "Connection{" + "connectionId=" + connectionId + ", routerA=" + routerAId + ", routerB=" + routerBId + ", routerAInterface=" + routerAInterface + ", routerBInterface=" + routerBInterface + ", isOSPF=" + isOSPF + ", isRIP=" + isRIP + ", ip='" + ip + '\'' + '}';
  }




}

