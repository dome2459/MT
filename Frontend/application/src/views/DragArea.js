import { Center, Text } from "@chakra-ui/react";
import * as React from "react";
import { useState } from "react";
import Moveable from "react-moveable";

export default function DragArea() {

    const [Moveables, setMoveables] = useState([{itemID: 1},{itemID: 2},{itemID: 3}]);

    const targetRef = React.useRef([]);

    const MoveObject = (itemID,index) => {

        return(
            <>
            <Center className="target" 
            ref={ref => { targetRef.current[index] = ref  }} 
            bgColor='skyblue' borderRadius={10} height={70} width={120}>
                <Text >Network Object</Text>
            </Center>


            <Moveable //moveAble Refs to Target and trannsformes target
                origin={false}
                hideDefaultLines={true}
                target={targetRef[index]}
                draggable={true}
                throttleDrag={1}
                edgeDraggable={false}
                startDragRotate={0}
                throttleDragRotate={0}
                onDrag={e => {
                    e.target.style.transform = e.transform;
                }}
            />
            </>
        )

    }


    return (
        <div className="root">
            <div className="container">
                
                {
                    Moveables.map((item, i) => {     
                     
                        return MoveObject(item.itemID, i)
                     })
                } 
                
            </div>
        </div>
    );
}