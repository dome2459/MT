import React from 'react';
import { useState } from 'react';
import Draggable from 'react-draggable';
import { Box, Text, Center } from "@chakra-ui/react";

export default function DragArea() {


    const [RouterArray, setRouterArray] = useState([
        {name: 'Ali', x: 0, y: 0 },
        {name: 'Bob', x: 10, y: 10 },
        {name: 'CHAD', x: 20, y: 20 },
        {name: 'Dic', x: 30, y: 30 }
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
            <Center width={100} className="draggable"  borderWidth={1} borderColor='#000'  position="absolute"

            cursor="grab" w="100px" h="100px" bg="skyblue" borderRadius={5}

            >{item.name}</Center>
            </Draggable>
        )
    }

  return (
    <Box className="target" h={parentHeight} w={parentWidth} borderWidth={1} borderColor='#000' position="relative" padding={2.5}>

        { RouterArray.map((item, i) => {     
                     
                     return RouterObj(item, i)

        })}
    </Box>
  );
}


const theme = {
    position: "absolute", 
    top: "100px", 
    left: "100px",
  }