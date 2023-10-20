<<<<<<< HEAD
import React, { Component } from 'react';


class Router extends Component {
    render() {
      // Hier erstellen Sie Ihr Objekt
      const Router = {
        routerID : '',
        isActiv: '',
        name: '',
        connectionId: '',
        routingTableId: '',
        ip: '0.0.0.0',
      };
  
      return (
        <div>
          {/* Verwenden Sie Ihr Objekt in JSX */}
          <p>Name: {Router.name}</p>
          <p>Aktiv: {Router.isActiv}</p>
          <p>:IP {Router.ip}</p>
        </div>
      );
    }
  }
  
=======
import React from 'react';
import RouterPicture from "../Pictures/Router.png"
export default function Router()
{
 
 return(
    <>
    <div className="Router">    
             <img src={RouterPicture} alt="Router"/> 
    </div>
      
    </>
    )
}
>>>>>>> origin/main
