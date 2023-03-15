import { useState } from "react";
import Child from "../Child/Child";
import "./Parent.css";

function Parent():JSX.Element {

    const [show, setShow] =useState<Boolean>(true)
    const removeFromShow=()=>{setShow(false)}
    return(
        <div className="Parent">
		<h1>This is parent</h1>
        {show && <Child remove={removeFromShow}/>}	
        </div>
    )
    
}

export default Parent;
