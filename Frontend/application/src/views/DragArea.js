import React, { useState, useEffect } from 'react';
import Draggable from 'react-draggable';
import { Box, Text, Center, Image } from "@chakra-ui/react";
import { PathLine } from 'react-svg-pathline';
import RouterSvg from './Router2.svg';
import SubMenu from './SubMenu';

export default function DragArea() {
  // statische Werte im Code zu schreiben ist immer schlecht!!! 
  // const parentWidth = 1800;
  // const parentHeight = 600;
  const [parentWidth, setParentWidth] = useState(window.innerWidth );
  const [parentHeight, setParentHeight] = useState(window.innerHeight/2);

  // die bounds -Werte hätte man locker durch 1min probieren anpassen können !!! 
  const maxX = parentWidth - 350; // Assuming draggable elements are 100x100 okay
  const maxY = parentHeight - 140;

  const [RouterArray, setRouterArray] = useState([
    { name: 'R1', x: 100, y: 100 },
    { name: 'R2', x: 150 , y: 150 },
    { name: 'R3', x: 200, y: 200 },
    { name: 'R4', x: 250, y: 250 },
    { name: 'R5', x: 300, y: 300 },
  ])
  const [CableArray, setCableArray] = useState([
    { connectionId: '1', routerA: 1, routerB: 2, ospf: '', rip: '' },
    { connectionId: '2', routerA: 2, routerB: 4, ospf: '', rip: '' },
    { connectionId: '3', routerA: 0, routerB: 3, ospf: '', rip: '' },
    { connectionId: '4', routerA: 3, routerB: 2, ospf: '', rip: '' },
    { connectionId: '5', routerA: 0, routerB: 4, ospf: '', rip: '' }
  ]);


  const updateRouter = (newRouterData) => {
    console.log("Update Router");

    const lastIndex = RouterArray.length - 1;

    // Füge neue Router-Daten zum RouterArray hinzu
    setRouterArray([...RouterArray, newRouterData]);
    // Erstelle eine Verbindung zum letzten Router
    if (lastIndex >= 0) {
      setCableArray([...CableArray, {
        connectionId: `${lastIndex}-${RouterArray.length}`,
        routerA: lastIndex,
        routerB: RouterArray.length - 1,
        ospf: '',
        rip: ''
      }]);
    }
  };



  const handleDrag = (index) => (e, data) => {
    const { x, y } = data;
    var RouterArr = [...RouterArray]
    RouterArr[index].x = x
    RouterArr[index].y = y
    setRouterArray(RouterArr);
  };


  const RouterObj = (item, index) => {
    return (
      <Draggable
        bounds={{ left: 0, top: 0, right: maxX, bottom: maxY }}
        position={{ x: item.x, y: item.y }}
        onDrag={handleDrag(index)}
        style={theme}>


        <Center flexDirection={'column'} width={100} className="draggable" //borderWidth={1} borderColor='#000' 
          position="absolute" cursor="grab" w="100px" h="100px"

        >

          <Image src={RouterSvg} height={100} width={100} draggable={false} onmousedown={false} />

          <Text marginBottom={-6} backgroundColor='#fff' borderRadius='3' paddingX={2} >{item.name}</Text>

        </Center>

      </Draggable>
    )
  };


  // Fenstergröße wird nun automatisch angepasst 
  useEffect(() => {
    function handleResize() {
      setParentWidth(window.innerWidth);
      setParentHeight(window.innerHeight);
    }

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (


    /*
    * Das ganze Geraffel hier unten auch noch automatisch an die Fenstergöße anpassen  
    * gerade was die X und Y Werte betrifft !!!
    */
    <Box className="target" h={parentHeight} w={parentWidth} borderWidth={1} borderColor='#000' position="relative" padding={2.5}>

      {RouterArray.map((item, i) => (
        <React.Fragment key={i}>
          <Box key={i} item={item} updateRouter={updateRouter} />
          {RouterObj(item, i)}
        </React.Fragment>
      ))}

      <svg style={{ width: '100%', height: '100%' }}>

        {CableArray.map((item, i) => {

          return (
            <PathLine
              points={[{ x: RouterArray[item.routerA].x + 50, y: RouterArray[item.routerA].y + 50 },
              { x: RouterArray[item.routerB].x + 50, y: RouterArray[item.routerB].y + 50 }]}
              stroke="black"
              strokeWidth="3"
              fill="none"
              r={10}
            />
          )
        })}
      </svg>
    </Box>


  );
}
const theme = {
  position: "absolute",
  top: "100px",
  left: "100px",
}