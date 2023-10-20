import { Center, Text } from "@chakra-ui/react";
import * as React from "react";
import { useState, useEffect, useRef } from "react";
import Moveable from "react-moveable";

export default function DragArea() {

    const [Moveables, setMoveables] = useState([{itemID: 1, ref: useRef(null)},{itemID: 2, ref: useRef(null)},{itemID: 3, ref: useRef(null)}]);
    const [RefArray, setRefArray] = useState([]);

    //const targetRef = React.useRef(null);

    

    useEffect(() => {
    //    targetRef.current = targetRef.current.slice(0,Moveables.length);

        CreateRefs();


    }, []);

    const CreateRefs = () => {

        /*Moveables.forEach((item, index) => {
            const newMoveableRef = useRef(null);

            var Refs = [...Moveables]

            Refs[index].ref = newMoveableRef;
            setMoveables(Refs)
        
            // You can also do other initialization here if needed
        
            return newMoveableRef;
        });*/

    }

    const MoveObject = (itemID, index) => {
        return(
            <>
            <Center className="target" 
            //ref={ref => { targetRef.current[index] = ref  }} 
            ref={itemID.ref}
            bgColor='skyblue' borderRadius={10} height={70} width={120} transform={Moveables[index].pos} >
                <Text >Network Object</Text>
            </Center>


            <Moveable //moveAble Refs to Target and trannsformes target
                origin={false}
                hideDefaultLines={true}
                //target={ref => { targetRef.current[index] = ref}}
                ref={itemID.ref}
                draggable={true}
                throttleDrag={1}
                edgeDraggable={false}
                startDragRotate={0}
                throttleDragRotate={0}
                onDrag={e => {
                    //e.target.style.transform = e.transform;
                    
                    var Arr = [...Moveables]
                    Arr[index].pos = e.transform;
                    setMoveables(Arr);

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