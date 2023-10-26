import React, { Component } from "react";
export default class RoutingTable extends Component {
  render() {
    // Hier erstellen Sie Ihr Objekt
    const RoutingTable = {
      routingTableID: "",
      destination: "",
      gateway: "",
      networkMask: "",
      interface: "",
      metrik: "",
    };

    const rows = [
      { Number: 0, Destination: '123.456.789.111', Gateway: "192.168.178.8", Interface: 'fa/01', Metric: 2, Networkmask: '255.255.255.192' },
      { Number: 1, Destination: '123.456.789.111', Gateway: "192.168.178.8", Interface: 'fa/02', Metric: 2, Networkmask: '255.255.255.192' },
      { Number: 2, Destination: '123.456.789.111', Gateway: "192.168.178.8", Interface: 'fa/03', Metric: 2, Networkmask: '255.255.255.192' },
      { Number: 3, Destination: '123.456.789.111', Gateway: "192.168.178.8", Interface: 'fa/04', Metric: 2, Networkmask: '255.255.255.192' },
      { Number: 4, Destination: '123.456.789.111', Gateway: "192.168.178.8", Interface: 'fa/05', Metric: 2, Networkmask: '255.255.255.192' },
      { Number: 5, Destination: '123.456.789.111', Gateway: "192.168.178.8", Interface: 'fa/06', Metric: 2, Networkmask: '255.255.255.192' },
      { Number: 6, Destination: '123.456.789.111', Gateway: "192.168.178.8", Interface: 'fa/07', Metric: 2, Networkmask: '255.255.255.192' },
      { Number: 7, Destination: '123.456.789.111', Gateway: "192.168.178.8", Interface: 'fa/08', Metric: 2, Networkmask: '255.255.255.192' },
      { Number: 8, Destination: '123.456.789.111', Gateway: "192.168.178.8", Interface: 'fa/09', Metric: 2, Networkmask: '255.255.255.192' },
      { Number: 9, Destination: '123.456.789.111', Gateway: "192.168.178.8", Interface: 'fa/10', Metric: 2, Networkmask: '255.255.255.192' },
      { Number: 10, Destination: '123.456.789.111', Gateway: "192.168.178.8", Interface: 'fa/11', Metric: 2, Networkmask: '255.255.255.192' },
      { Number: 11, Destination: '123.456.789.111', Gateway: "192.168.178.8", Interface: 'fa/12', Metric: 2, Networkmask: '255.255.255.192' },
      { Number: 12, Destination: '123.456.789.111', Gateway: "192.168.178.8", Interface: 'fa/13', Metric: 2, Networkmask: '255.255.255.192' },
      { Number: 13, Destination: '123.456.789.111', Gateway: "192.168.178.8", Interface: 'fa/14', Metric: 2, Networkmask: '255.255.255.192' },
      { Number: 14, Destination: '123.456.789.111', Gateway: "192.168.178.8", Interface: 'fa/15', Metric: 2, Networkmask: '255.255.255.192' },
      { Number: 15, Destination: '123.456.789.111', Gateway: "192.168.178.8", Interface: 'fa/16', Metric: 2, Networkmask: '255.255.255.192' },
      { Number: 16, Destination: '123.456.789.111', Gateway: "192.168.178.8", Interface: 'fa/17', Metric: 2, Networkmask: '255.255.255.192' },
      { Number: 17, Destination: '123.456.789.111', Gateway: "192.168.178.8", Interface: 'fa/18', Metric: 2, Networkmask: '255.255.255.192' },
      { Number: 18, Destination: '123.456.789.111', Gateway: "192.168.178.8", Interface: 'fa/19', Metric: 2, Networkmask: '255.255.255.192' },
      { Number: 19, Destination: '123.456.789.111', Gateway: "192.168.178.8", Interface: 'fa/20', Metric: 2, Networkmask: '255.255.255.192' },
      { Number: 20, Destination: '123.456.789.111', Gateway: "192.168.178.8", Interface: 'fa/21', Metric: 2, Networkmask: '255.255.255.192' },
  ];

    return (
      <div className="tableDiv">
        {/* Verwenden Sie Ihr Objekt in JSX */}
        {/* <p>Name: {RoutingTable.name}</p>
        <p>Aktiv: {RoutingTable.isActiv}</p>
        <p>:IP {RoutingTable.ip}</p> */}


                  
          <table  className="table" >
              <tr>
                <th className="tableHeader">Number</th>
                <th className="tableHeader">Destination</th>
                <th className="tableHeader">Gateway </th>
                <th className="tableHeader">Interface </th>
                <th className="tableHeader">Metric </th>
                <th className="tableHeader">Networkmask </th>
              </tr>
            <tbody>
             
             {rows.map(({Number, Destination, Gateway, Interface, Metric, Networkmask}) => (
              <tr>
                <td className="tableRow">{Number}</td>
                <td className="tableRow">{Destination}</td>
                <td className="tableRow" isNumeric>{Gateway}</td>
                <td className="tableRow" isNumeric>{Interface}</td>
                <td className="tableRow" isNumeric>{Metric}</td>
                <td className="tableRow" isNumeric>{Networkmask}</td>
              </tr>
             ))}
            </tbody>
          </table>
      </div>
    );
  }
}
