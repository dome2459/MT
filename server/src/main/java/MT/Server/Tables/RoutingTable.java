package MT.Server.Tables;

import jakarta.persistence.*;

@Entity
@Table(name="routingTable")
public class RoutingTable {


  @Id
  @GeneratedValue(strategy = GenerationType.AUTO)
  private Long routingTableId;

  @Column(name = "Destination")
  private String destination;
  @Column(name = "Gateway")
  private String gateway;
  @Column(name = "Networkmask")
  private String networkmask;
  @Column(name = "Interface")
  private Integer interfac;
  @Column(name = "Metric")
  private Integer metric;

  public RoutingTable(){
  }
  public RoutingTable(Long routingTableId, String destination, String gateway, String networkmask, Integer interfac, Integer metric) {
    this.routingTableId = routingTableId;
    this.destination = destination;
    this.gateway = gateway;
    this.networkmask = networkmask;
    this.interfac = interfac;
    this.metric = metric;
  }


  public Long getRoutingTableId() {
    return routingTableId;
  }

  public void setRoutingTableId(Long routingTableId) {
    this.routingTableId = routingTableId;
  }

  public String getDestination() {
    return destination;
  }

  public void setDestination(String destination) {
    this.destination = destination;
  }

  public String getGateway() {
    return gateway;
  }

  public void setGateway(String gateway) {
    this.gateway = gateway;
  }

  public String getNetworkmask() {
    return networkmask;
  }

  public void setNetworkmask(String networkmask) {
    this.networkmask = networkmask;
  }

  public Integer getInterface() {
    return interfac;
  }

  public void setInterface(Integer interfac) {
    this.interfac = interfac;
  }

  public Integer getMetric() {
    return metric;
  }

  public void setMetric(Integer metric) {
    this.metric = metric;
  }

  @Override
  public String toString() {
    return "RoutingTable{" + "routingTableId=" + routingTableId + ", destination='" + destination + '\'' + ", gateway='" + gateway + '\'' + ", networkmask='" + networkmask + '\'' + ", Interface=" + interfac + ", metric=" + metric + '}';
  }

}



