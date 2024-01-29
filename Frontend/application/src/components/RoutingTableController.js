import React, { Component } from 'react';
import MainEnviroment from '../views/MainEnviroment';
import GlobalContext from './InitStateContext';
import { json } from 'react-router-dom';
import { color } from 'framer-motion';


export default function RoutingTableController(){
    var apiEndpoint = "https://localhost:3000";

    async function Reciever(Function, value1, value2, value3) {

        switch (Function) {
          case 'test':
            return test(value1, value2, value3)
            break;
          //add other function cases here
    
        }
    }

    // holen aller Routing Tables
    async function getRouterTableFromApi(){
        return fetch(apiEndpoint + '/getRoutingTable',{
        mode: 'no-corse',
        method: 'GET',
        headers: new Headers({
            "access-control-allow-origin" : "*",
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
    async function getRoutingTableWithID(){
        return fetch(apiEndpoint + '/getRoutingTable/{id}',{
            mode: 'no-cors',
            method: 'GET',
            headers: new Headers({
                "access-control-allow-origin" : "*",
                'Content-Type': 'application/json'
            })
        })

    }
    // aktualisieren einer RoutingTable eines bestimmten Routers
    // id der Tabelle muss noch mitgegeben werden
    async function putRoutingTableWithID(){
        return fetch( apiEndpoint + '/putRoutingTable/{id}',{
            mode: 'no-cors',
            method:'POST',
            headers: new Headers({
                "access-control-allow-origin" : "*",
                'Content-Type': 'application/json'
            })
        })
    }
}