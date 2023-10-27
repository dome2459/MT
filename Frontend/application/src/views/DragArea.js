import React from 'react';
import { useState } from 'react';
import Draggable from 'react-draggable';
import { Box, Text, Center, Image } from "@chakra-ui/react";
import {PathLine} from 'react-svg-pathline'
import RouterSvg from './Router2.svg'

export default function DragArea() {


    const [RouterArray, setRouterArray] = useState([
        {name: 'R1', x: 0, y: 0 },
        {name: 'R2', x: 10, y: 10 },
        {name: 'R3', x: 20, y: 20 },
        {name: 'R4', x: 30, y: 30 },
        {name: 'R5', x: 400, y: 100 },
    ])
    const [CableArray, setCableArray] = useState([

      { connectionId: '1', routerA: 1, routerB : 2, ospf: '', rip : ''},
      { connectionId: '2', routerA: 2, routerB : 4, ospf: '', rip : ''},
      { connectionId: '3', routerA: 0, routerB : 3, ospf: '', rip : ''},
      { connectionId: '4', routerA: 3, routerB : 2, ospf: '', rip : ''},
      { connectionId: '5', routerA: 0, routerB : 4, ospf: '', rip : ''}

    ])

    const parentWidth = 1800;
    const parentHeight = 600;

    const maxX = parentWidth - 121; // Assuming draggable elements are 100x100
    const maxY = parentHeight - 121;

    const handleDrag = (index) => (e, data) => {

        const { x, y } = data;
        var RouterArr = [...RouterArray]

        RouterArr[index].x = x
        RouterArr[index].y = y

        setRouterArray(RouterArr);
      };


    const RouterObj = (item, index) => {
        return(
            <Draggable bounds={{ left: 0, top: 0, right: maxX, bottom: maxY }} position={{x: item.x, y:item.y}} onDrag={handleDrag(index)} 
                    style={theme}>

                      
            <Center flexDirection={'column'} width={100} className="draggable" //borderWidth={1} borderColor='#000' 
            position="absolute" cursor="grab" w="100px" h="100px"

            >

          <Image src={RouterSvg} height={100} width={100} draggable={false} onmousedown={false}/>
            
            <Text marginBottom={-6} backgroundColor='#fff' borderRadius='3' paddingX={2} >{item.name}</Text>

            </Center>



            </Draggable>
        )
    }

  return (
    <Box className="target" h={parentHeight} w={parentWidth} borderWidth={1} borderColor='#000' position="relative" padding={2.5}>

        { RouterArray.map((item, i) => {     
                     
                     return RouterObj(item, i)

        })}
      <svg style={{width: '100%', height: '100%'}}>

        {CableArray.map((item, i) => {     
                     
            return(
              <PathLine 
              points={[{x:RouterArray[item.routerA].x + 50, y:RouterArray[item.routerA].y + 50}, {x:RouterArray[item.routerB].x + 50, y: RouterArray[item.routerB].y + 50}]} 
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