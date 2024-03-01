package MT.Server.Tables;

import jakarta.persistence.*;

@Entity
@Table(name="connection")
public class Connection {

  @Id
  @GeneratedValue(strategy = GenerationType.AUTO)
  private Long connectionId;

  // Router A
  @Column(name = "RouterA")
  private String routerAId;

  @Column(name = "RouterAInterface")
  private String routerAInterface;

  @Column(name = "RouterAIp")
  private String routerAIp;

  // Router B
  @Column(name = "RouterB")
  private String routerBId;

  @Column(name = "RouterBInterface")
  private String routerBInterface;

  @Column(name = "RouterBIp")
  private String routerBIp;

  @Column(name = "OSPF")
  private boolean OSPF;

  @Column (name="Metrik")
  private String metrik;

  @Column(name = "RIP")
  private boolean RIP;

  public Connection(){
  }

  public Connection(Long connectionId, String routerA, String routerB, String routerAInterface, String routerBInterface, boolean OSPF, boolean RIP, String routerAIp, String routerBIp, String metrik) {
    this.connectionId = connectionId;
    this.routerAId = routerA;
    this.routerBId = routerB;
    this.routerAInterface = routerAInterface;
    this.routerBInterface = routerBInterface;
    this.OSPF = OSPF;
    this.RIP = RIP;
    this.routerAIp = routerAIp;
    this.routerBIp = routerBIp;
    this.metrik = metrik;
  }

  public Long getConnectionId() {
    return connectionId;
  }

  public void setConnectionId(Long connectionId) {
    this.connectionId = connectionId;
  }

  public String getRouterA() {
    return routerAId;
  }

  public void setRouterA(String routerA) {
    this.routerAId = routerA;
  }

  public String getRouterB() {
    return routerBId;
  }

  public void setRouterB(String routerB) {
    this.routerBId = routerB;
  }

  public String getRouterAInterface() {
    return routerAInterface;
  }

  public void setRouterAInterface(String routerAInterface) {
    this.routerAInterface = routerAInterface;
  }

  public String getRouterBInterface() {
    return routerBInterface;
  }

  public void setRouterBInterface(String routerBInterface) {
    this.routerBInterface = routerBInterface;
  }

  public boolean isOSPF() {
    return OSPF;
  }

  public void setOSPF(boolean OSPF) {
    this.OSPF = OSPF;
  }

  public boolean isRIP() {
    return RIP;
  }

  public void setRIP(boolean RIP) {
    this.RIP = RIP;
  }

  public String getRouterAIp() {
    return routerAIp;
  }

  public void setRouterAIp(String routerAIp) {
    this.routerAIp = routerAIp;
  }

  public String getRouterBIp() {
    return routerBIp;
  }

  public void setRouterBIp(String routerBIp) {
    this.routerBIp = routerBIp;
  }

  public String getMetrik() {
    return metrik;
  }

  public void setMetrik(String metrik) {
    this.metrik = metrik;
  }

  @Override
  public String toString() {
    return "Connection{" +
            "connectionId=" + connectionId +
            ", routerAId='" + routerAId + '\'' +
            ", routerAInterface='" + routerAInterface + '\'' +
            ", routerAIp='" + routerAIp + '\'' +
            ", routerBId='" + routerBId + '\'' +
            ", routerBInterface='" + routerBInterface + '\'' +
            ", routerBIp='" + routerBIp + '\'' +
            ", isOSPF=" + OSPF +
            ", metrik='" + metrik + '\'' +
            ", isRIP=" + RIP +
            '}';
  }
}
