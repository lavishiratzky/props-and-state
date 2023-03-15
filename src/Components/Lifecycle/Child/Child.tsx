import "./Child.css";
interface ChildProps{
    remove: Function

}
function Child(props:ChildProps): JSX.Element {
    const tellMyParent =()=>{props.remove()}

    return (
        <div className="Child">
		<h1>this is a child </h1>
        <button onClick={tellMyParent}>Remove</button>	
        </div>
    );
}

export default Child;
