import React, { Component } from 'react';
import MainEnviroment from '../views/MainEnviroment';
import { json } from 'react-router-dom';
import { color } from 'framer-motion';
import { Box } from '@chakra-ui/react';



export default function ConnectionController(){
    var apiEndpoint = "https://localhost:3000";

    async function Reciever(Function, value1, value2, value3) {

        switch (Function) {
          case 'test':
            return test(value1, value2, value3)
            break;
          //add other function cases here
    
        }
    }

    // holen aller Connections
    async function getConnectionFromApi(){
        return fetch(apiEndpoint + '/getConnection/{id}',{
            mode: 'no-corse',
            method: 'GET',
            headers: new Headers({
                "access-control-allow-origin" : "*",
                'Content-Type': 'application/json'
            })
        })
    }




    // holen einer bestimmten Connection mit ID
    // ID der Connection noch vom Objekt holen
    async function getConnectionWithIdFromApi(){
        return fetch(apiEndpoint + '/getRoutingTable/{id}',{
        mode: 'no-corse',
        method: 'GET',
        headers: new Headers({
            "access-control-allow-origin" : "*",
            'Content-Type': 'application/json'
        })
    })
} 

// löschen der Connection die nicht mehr gebraucht wird
// id des Objekts noch holen
async function deleteConnection(){
    return fetch(apiEndpoint + '/delConnection/{id}',{
    mode: 'no-corse',
    method: 'POST',
    headers: new Headers({
        "access-control-allow-origin" : "*",
        'Content-Type': 'application/json'
    })
})
} 
    return(<Box/>)
}