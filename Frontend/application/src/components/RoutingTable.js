import React, { useContext } from "react";
import GlobalContext from '../components/InitStateContext';


export default function RoutingTable(){

 
    const {EditRouter, updateEditRouter} = useContext(GlobalContext);
    const {RoutingTableData, updateRoutingTableData} = useContext(GlobalContext);

    
    const RoutingTable = {
      routingTableID: "",
      destination: "",
      gateway: "",
      networkMask: "",
      interface: "",
      metrik: "",
    };

    

    if (EditRouter.id !== undefined) {

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
             
             {RoutingTableData.map(({Number, Destination, Gateway, Interface, Metric, Networkmask}) => (
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
             } else {
                return null;
             }
}
