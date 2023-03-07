import { useState } from "react";
import "./Grade.css";
interface GradeProps{
    name:string
    grade?:number
}
function Grade(props:GradeProps): JSX.Element {
    const [grade ,setGrade] =useState<number>(props.grade||0)
    const addPoint =()=>{
        console.log("adding")
        if(grade ===100){
            return
        }
       setGrade(grade=>grade+1)
      }
      const subPoint =()=>{
        console.log("subbing")
        if(grade ===0){
            return
        }
        setGrade(grade=>grade-1)
      }
    return (
        <div className="Grade">
            <p>name: {props.name}</p>
            <div className="row">
            {(grade!==100) &&   <button onClick={addPoint}>+</button>}

            {
                (props.grade) ? <p className={(grade>90)?'exelent':(grade>75)?'good':(grade>60)? 'ok': 'bad'  }> {grade}</p> :<p className="evil">No grade yet</p>
        }
			{(grade!==0) && <button onClick={subPoint}>-</button>}
            </div>
        </div>
    );
}

export default Grade;
