import "bootswatch/dist/Darkly/bootstrap.css"

type largeInputType={
    text:string,
    change?:any

}
export default function LargeInput(props:largeInputType){
    const {change} = props;
    return (
        <div className="form-group">
            <input className="form-control form-control-lg" type="text" placeholder={props.text} id="inputLarge" onChange={change}/>
        </div>

    );
}