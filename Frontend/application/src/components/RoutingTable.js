import React, { Component } from 'react';


class RoutingTable extends Component {
    render() {
      // Hier erstellen Sie Ihr Objekt
      const RoutingTable = {
        routingTableID : '',
        desrtination: '',
        gateway: '',
        networkMask: '',
        flags: '',
        interface : '',
        metrik: ''
      };
  
      return (
        <div>
          {/* Verwenden Sie Ihr Objekt in JSX */}
          <p>Name: {RoutingTable.name}</p>
          <p>Aktiv: {RoutingTable.isActiv}</p>
          <p>:IP {RoutingTable.ip}</p>
        </div>
      );
    }
  }
  