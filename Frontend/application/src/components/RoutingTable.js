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
      { Number: 4, Destination: '123.456.789.111', Gateway: 29, Interface: 'fa/02', Metric: 2, Networkmask: '255.255.255.192' },
      { Number: 4, Destination: '123.456.789.111', Gateway: 29, Interface: 'fa/02', Metric: 2, Networkmask: '255.255.255.192' },
      { Number: 4, Destination: '123.456.789.111', Gateway: 29, Interface: 'fa/02', Metric: 2, Networkmask: '255.255.255.192' },
      { Number: 4, Destination: '123.456.789.111', Gateway: 29, Interface: 'fa/02', Metric: 2, Networkmask: '255.255.255.192' },
      { Number: 4, Destination: '123.456.789.111', Gateway: 29, Interface: 'fa/02', Metric: 2, Networkmask: '255.255.255.192' },
      { Number: 4, Destination: '123.456.789.111', Gateway: 29, Interface: 'fa/02', Metric: 2, Networkmask: '255.255.255.192' },
      { Number: 4, Destination: '123.456.789.111', Gateway: 29, Interface: 'fa/02', Metric: 2, Networkmask: '255.255.255.192' },
  ];

    return (
      <div>
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
