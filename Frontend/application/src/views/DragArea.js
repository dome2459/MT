import React, { useState, useEffect, useRef, useContext } from 'react'; // Fügen Sie useEffect hinzu
import Draggable from 'react-draggable';
import { Box, Text, Center, Image } from "@chakra-ui/react";
import { PathLine } from 'react-svg-pathline';
import RouterSvg from './Router2.svg';
import RouterEditSvg from './Router2edit.svg';
import GlobalContext from '../components/InitStateContext';

export default function DragArea(props) {


  // statische Werte im Code zu schreiben ist immer schlecht!!! 
  // const parentWidth = 1800;
  // const parentHeight = 600;
  const [parentWidth, setParentWidth] = useState(1900);
  const [parentHeight, setParentHeight] = useState(600);

  const AreaRef = useRef(null);

  //useEffect(() => {
    
  //}, [RouterArray]);

  // die bounds -Werte hätte man locker durch 1min probieren anpassen können !!! 
  const maxX = parentWidth - 350; // Assuming draggable elements are 100x100 okay
  const maxY = parentHeight - 140;

  const {RouterArray, updateRouterArray} = useContext(GlobalContext);
  const {EditRouter, updateEditRouter} = useContext(GlobalContext);
  const [CurrendDrag, setCurrendDrag] = useState(false);
  const {CableArray, updateCableArray} = useContext(GlobalContext);



  const handleDrag = (index) => (e, data) => {

    const { x, y } = data;
    var RouterArr = [...RouterArray]

    RouterArr[index].posx = x
    RouterArr[index].posy = y

    updateRouterArray(RouterArr);
  };

  const handleClick = (item) => {
    if(CurrendDrag === false){
     
      if(EditRouter.id === item.id)
      {
        updateEditRouter({});
      }
      else{
        updateEditRouter(item);
      }
    }
    
  };
  function updatePosition(values, id){
    props.callBack('updateRouterOnDB', values, id);
    
  }

  const RouterObj = (item, index) => {
    return (
      <Draggable
        bounds={{ left: 0, top: 0, right: maxX, bottom: maxY }}
        position={{ x: item.posx, y: item.posy }}
        onDrag={handleDrag(index)}
        style={theme}  
        IsEdit={false}
        onStart={() => setCurrendDrag(true)} 
        onStop={() => [updatePosition(item, item.id),setCurrendDrag(false),console.log(item, item.id)] }
        >
        
        <Center flexDirection={'column'} width={100} className="draggable" //borderWidth={1} borderColor='#000' 
          position="absolute" cursor="grab" w="100px" h="100px"
          onDoubleClick={() => handleClick(item)}
        >
          
          <Image src={((EditRouter.id === item.id ) ? RouterEditSvg : RouterSvg)} height={100} width={100} draggable={false} onmousedown={false} />

          <Text marginBottom={-6} backgroundColor='#fff' borderRadius='3' paddingX={2} >{item.name}</Text>

        </Center>

      </Draggable>
    )
  };


  // Fenstergröße wird nun automatisch angepasst 
  useEffect(() => {

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  function handleResize() {
    setParentWidth(AreaRef.current.offsetWidth);
    setParentHeight(AreaRef.current.offsetHeight);
  }

  return (


    /*
    * Das ganze Geraffel hier unten auch noch automatisch an die Fenstergöße anpassen  
    * gerade was die X und Y Werte betrifft !!!
    */
    <Box className="target" h={parentHeight} w={parentWidth} flex={1} borderWidth={1} borderColor='#000' position="relative" padding={2.5} overflow='auto' ref = { AreaRef }>

      {  RouterArray && RouterArray.length > 0 && RouterArray.map((item, i) => {

        return RouterObj(item, i)

      })}
      <svg style={{ width: '100%', height: '100%' }}>

        
        {RouterArray.length !== 0 ?( CableArray && CableArray.length > 0 && CableArray.map((item, i) => {

          return (
            <PathLine
              points={[{ x: RouterArray[item.routerA].x + 50, y: RouterArray[item.routerA].y + 50 }, { x: RouterArray[item.routerB].x + 50, y: RouterArray[item.routerB].y + 50 }]}
              stroke="black"
              strokeWidth="3"
              fill="none"
              r={10}
            />
          )
        })): (null)}
      </svg>
    </Box>
  );
}


const theme = {
  position: "absolute",
  top: "100px",
  left: "100px",
}
