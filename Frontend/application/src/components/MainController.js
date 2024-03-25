
import React, { useContext, useEffect } from 'react';
import MainEnviroment from '../views/MainEnviroment';
import GlobalContext from './InitStateContext';


export default function MainController() {
  const { RouterArray, updateRouterArray } = useContext(GlobalContext);
  const { ConnectionArray, updateConnectionArray } = useContext(GlobalContext);


  var apiEndpoint = "http://localhost:8080/api/v1/";


  async function callBack(Function, value1, value2, value3) {

    switch (Function) {
      case 'test':
        return test(value1, value2, value3)
      case 'getRouterArrayFromApi':
        return getRouterArrayFromApi(value1, value2, value3)
      case 'createRouter':
        return createRouter(value1, value2, value3)
      case 'getConnectionFromApi':
        return getConnectionFromApi(value1, value2, value3)
      case 'getConnectionWithIdFromApi':
        return getConnectionWithIdFromApi(value1, value2, value3)
      case 'deleteConnection':
        return deleteConnection(value1, value2, value3)
      case 'deleteRouter':
        return deleteRouter(value1, value2, value3)
      case 'updateRouterOnDB':
        return updateRouterOnDB(value1, value2, value3)
      case 'getRouterTableFromApi':
        return getRouterTableFromApi(value1, value2, value3)
      case 'getRoutingTableWithID':
        return getRoutingTableWithID(value1, value2, value3)
      case 'putRoutingTableWithID':
        return putRoutingTableWithID(value1, value2, value3)
      case 'postConnection':
        return postConnection(value1, value2, value3)
      case 'updatePosition':
        return updatePosition(value1, value2)
      case 'start':
        return start(value1, value2, value3)
      default:
        break
      //add other function cases here

    }
  }

  // holen aller Connections
  async function getConnectionFromApi() {
    return fetch(apiEndpoint + 'getConnection', {
      mode: 'cors',
      method: 'get',
      headers: new Headers({
        "access-control-allow-origin": "*",
        'Content-Type': 'application/json'
      }),
    })
      .then(response => response.json())
      .then(json => {
        console.log("ConnectionArray response ", json);
        updateConnectionArray(json);
        return json;
      })
      .catch(error => {
        console.log(error);
      });
  };


  // Connection zur DB schicken
  async function postConnection(data) {
    console.log("MainController postConnection", data);
    return fetch(apiEndpoint + 'postConnection', {
      mode: 'cors',
      method: 'POST',
      headers: new Headers({
        "access-control-allow-origin": "*",
        'Content-Type': 'application/json'
      }),
      body: JSON.stringify(data),
    })
      .then(response => response.json())
      .then(json => {
        console.log('Postconnection responsejson', json);
        console.log('Bevor Updated Connection Array ', ConnectionArray);
        
        const newArray = [...ConnectionArray]
        newArray.push(json)
        console.log('newArray: ', newArray)

        updateConnectionArray(newArray);
        console.log('Updated Connection Array ', ConnectionArray);
        return json;
      })
      .catch(error => {
        console.log(error);
      });
  };


  // holen einer bestimmten Connection mit ID
  // ID der Connection noch vom Objekt holen
  async function getConnectionWithIdFromApi() {
    return fetch(apiEndpoint + '/getRoutingTable/{id}', {
      mode: 'cors',
      method: 'GET',
      headers: new Headers({
        "access-control-allow-origin": "*",
        'Content-Type': 'application/json'
      })
    })
      .then(response => response.json())
      .then(json => {
        console.log('Postconnection responsejson', json);
        updateConnectionArray(json);
        return json;
      })
      .catch(error => {
        console.log(error);
      });
  };


  // löschen der Connection die nicht mehr gebraucht wird
  // id des Objekts noch holen
  async function deleteConnection(data) {
    console.log('delete Connection from MainController ' + data);
    return fetch(apiEndpoint + 'delConnection', {
      mode: 'cors',
      method: 'DELETE',
      headers: new Headers({
        "access-control-allow-origin": "*",
        'Content-Type': 'application/json'
      }),
      body: JSON.stringify(data),
    })
      .then(response => response.text()) // Änderung von json() zu text()
      .then(text => {
        console.log('DeleteConnection response:', text); // Ausgabe der Antwort als Text
        try {
          const json = JSON.parse(text); // Versuch, die Antwort zu JSON zu parsen
          console.log('DeleteConnection responsejson', json);
          updateConnectionArray(json);
          return json;
        } catch (error) {
          console.error('Fehler beim Parsen der Antwort:', error);
          throw error; // Weiterwerfen des Fehlers für die weitere Diagnose
        }
      })
      .catch(error => {
        console.log('Fehler beim Löschen der Verbindung:', error);
        throw error; // Weiterwerfen des Fehlers für die weitere Diagnose
      });
  };
  

  //controller Function
   async function getRouterArrayFromApi() {
    console.log('getRouterArrayFromApi');
    return fetch(apiEndpoint + 'router/list', {
      mode: 'cors',
      method: 'get',
      headers: new Headers({
        "access-control-allow-origin": "*",
        'Content-Type': 'application/json'
      })
    })
      .then(response => response.json())
      .then(json => {
        console.log("RouterArray response ", json);

        const newArray = [...RouterArray]
        newArray.push(json)

        updateRouterArray(json);
        return json;
      })
      .catch(error => {
        console.log(error);
      });
  };

  async function createRouter(data) {
    console.log('createRouterController: ', data);
    fetch(apiEndpoint + 'router/create', {
      mode: 'cors',
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    })
    .then(response => response.json())
    .then(json => {
      console.log("RouterArray response ",json);
      updateRouterArray(json);
      return json;
    })
    .catch(error => {
      console.log(error);
    });
  getRouterArrayFromApi();
}
   
  


  async function deleteRouter(data) {
    fetch(apiEndpoint + 'router/delete/' + data.id, {
      mode: 'cors',
      method: 'DELETE',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    })
      .then(response => response.json())
      .then(json => {
        console.log("deleteRouter ",json);
        return json;
      })
      .catch(error => {
        console.log(error);
      });
    getRouterArrayFromApi();
  }
  // id des Routers wird noch benötigt und in Endpoint eingetragen
  async function updateRouterOnDB(data) {
    fetch(apiEndpoint + 'router/' + data.id, {
      mode: 'cors',
      method: 'PUT',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    });
  };

  async function updatePosition(values, id) {
    fetch(apiEndpoint + 'router/' + id, {
      mode: 'cors',
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(values),
    });
}
  async function start(value1, value2, value3) {
  console.log(value1, value2, value3)
    return fetch(apiEndpoint + 'start/', {
      mode: 'cors',
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(value1, value2, value3)
    });
  };
  // holen aller Routing Tables
  async function getRouterTableFromApi() {
    return fetch(apiEndpoint + '/getRoutingTable', {
      mode: 'cors',
      method: 'GET',
      headers: new Headers({
        "access-control-allow-origin": "*",
        'Content-Type': 'application/json'
      })
    })
      .then(response => response.json())
      .then(json => {
        console.log(json);
        return json;
      })
      .catch(error => {
        console.log(error);
      });
  };
  // holen einer bestinmmten Tabelle eines Routers
  async function getRoutingTableWithID() {
    return fetch(apiEndpoint + '/getRoutingTable/{id}', {
      mode: 'cors',
      method: 'GET',
      headers: new Headers({
        "access-control-allow-origin": "*",
        'Content-Type': 'application/json'
      })
    })

  }
  // aktualisieren einer RoutingTable eines bestimmten Routers
  // id der Tabelle muss noch mitgegeben werden
  async function putRoutingTableWithID() {
    return fetch(apiEndpoint + '/putRoutingTable/{id}', {
      mode: 'cors',
      method: 'POST',
      headers: new Headers({
        "access-control-allow-origin": "*",
        'Content-Type': 'application/json'
      })
    })
  }



  return (

    <MainEnviroment callBack={callBack} />


  );
}
