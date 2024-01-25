package MT.Server.Tables;

import jakarta.persistence.*;

@Entity
@Table(name="routingTable")
public class RoutingTable {


  @Id
  @GeneratedValue(strategy = GenerationType.AUTO)
  private Long routingTableId;

  @Column(name = "Name")
  private String name;
  @Column(name = "Destination")
  private String destination;
  @Column(name = "Gateway")
  private String gateway;
  @Column(name = "Networkmask")
  private String networkmask;
  @Column(name = "Interface")
  private String interfaces;
  @Column(name = "Metric")
  private Integer metric;

  public RoutingTable(){
  }
  public RoutingTable(Long routingTableId, String name, String destination, String gateway, String networkmask, String interfaces, Integer metric) {
    this.routingTableId = routingTableId;
    this.name=name;
    this.destination = destination;
    this.gateway = gateway;
    this.networkmask = networkmask;
    this.interfaces = interfaces;
    this.metric = metric;
  }


  public Long getRoutingTableId() {
    return routingTableId;
  }

  public void setRoutingTableId(Long routingTableId) {
    this.routingTableId = routingTableId;
  }

  public String getRoutingTableName() {
    return name;
  }

  public void setRoutingTableName(String name) {
    this.name = name;
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

  public String getInterface() {
    return interfaces;
  }

  public void setInterface(String interfaces) {
    this.interfaces = interfaces;
  }

  public Integer getMetric() {
    return metric;
  }

  public void setMetric(Integer metric) {
    this.metric = metric;
  }

  @Override
  public String toString() {
    return "RoutingTable{" + "routingTableId=" + routingTableId + ", name='" + name + '\'' + ", destination='" + destination + '\'' + ", gateway='" + gateway + '\'' + ", networkmask='" + networkmask + '\'' + ", Interface=" + interfaces + ", metric=" + metric + '}';
  }

}



