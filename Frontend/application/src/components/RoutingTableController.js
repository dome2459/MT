import React, { Component } from 'react';
import MainEnviroment from '../views/MainEnviroment';
import GlobalContext from './InitStateContext';
import { json } from 'react-router-dom';
import { color } from 'framer-motion';


export default function RoutingTableController(){
    var apiEndpoint = "https://localhost:3000";


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

    async function getRoutingTableWithID(){

    }
}