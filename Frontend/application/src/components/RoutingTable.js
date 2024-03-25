import React, { useContext, useState, useMemo} from "react";
import GlobalContext from '../components/InitStateContext';

export default function RoutingTable() {

  const { EditRouter, updateEditRouter } = useContext(GlobalContext);
  const { RoutingTableData, updateRoutingTableData } = useContext(GlobalContext);
  const { ConnectionArray } = useContext(GlobalContext);
  const noConnectionMessageDisplayed = useMemo(() => {
    if (EditRouter && ConnectionArray) {
      console.log(ConnectionArray)
      return ConnectionArray.map((item) =>( item.routerA !== EditRouter.name && item.routerAIp !== EditRouter.ip));
    }
    return false;
  }, [EditRouter, ConnectionArray]);

  function setGatewayIP(ip) {
    let parts = ip.split('.');
    parts[2] = '0';
    parts[3] = '0';
    return parts.join('.');
  }

  if (EditRouter && EditRouter.id !== undefined && ConnectionArray && ConnectionArray.length > 0) {
    return (
      <div className="tableDiv">
        <table className="table" >
          <thead>
            <tr>
              <th className="tableHeader">Name</th>
              <th className="tableHeader">Destination</th>
              <th className="tableHeader">Gateway </th>
              <th className="tableHeader">Interface </th>
              <th className="tableHeader">Protocol </th>
              <th className="tableHeader">Networkmask </th>
            </tr>
          </thead>
          <tbody>
            {EditRouter != null && ConnectionArray && ConnectionArray.length > 0 && ConnectionArray.map((item, i) => {
              if (item.routerA === EditRouter.name && item.routerAIp === EditRouter.ip) {
                let gateway = setGatewayIP(item.routerBIp);
                let routingProtocol = item.rip ? "RIP" : `OSPF (${item.metrik})`;
                console.log('Routing Table Objekt: ', item);
                console.log('Berechnetes Gateway: ', gateway);
                console.log('RouterBIP sollte nicht verändert werden: ', item.routerBIp)
                return (
                  <tr key={i}>
                    <td className="tableRow">{item.routerB}</td>
                    <td className="tableRow">{item.routerBIp}</td>
                    <td className="tableRow" isNumeric>{gateway}</td>
                    <td className="tableRow" isNumeric>{item.routerBInterface}</td>
                    <td className="tableRow" isNumeric>{routingProtocol}</td>
                    <td className="tableRow" isNumeric>{EditRouter.networkmask}</td>
                  </tr>
                );
              }
            })}
          </tbody>
        </table>
        {noConnectionMessageDisplayed && (
          <div className="noConnectionMessage" style={{ textAlign: "center" }}>Keine Verbindungen vorhanden</div>
        )}
      </div>
    );
  } else {
    return null;
  }
}