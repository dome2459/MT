
import React, { Component } from 'react';


class Router extends Component {
    render() {
      // Hier erstellen Sie Ihr Objekt
      const Router = {
        routerID : '',
        activ: true ,
        name: '',
        connectionId: '',
        routingTableId: '',
        ip: '',
        posx: undefined,
        posy: undefined,
      };
  
      return (
        <div>
          {/* Verwenden Sie Ihr Objekt in JSX */} 
          <p>Name: {Router.name}</p>
          <p>Aktiv: {Router.activ}</p>
          <p>:IP {Router.ip}</p>
        </div>
      );
    }
  }