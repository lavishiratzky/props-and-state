import "./Grade.css";
interface GradeProps{
    name:string
    grade?:number
}
function Grade(props:GradeProps): JSX.Element {
    return (
        <div className="Grade">
            <p>name: {props.name}</p>

            {
                (props.grade) ? <p> grade: {props.grade}</p> :<p className="evil">No grade yet</p>
        }
			
        </div>
    );
}

export default Grade;
