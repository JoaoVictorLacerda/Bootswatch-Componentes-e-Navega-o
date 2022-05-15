import "bootswatch/dist/Darkly/bootstrap.css"

type largeInputType={
    text:string
}
export default function LargeInput(props:largeInputType){
    return (
        <div className="form-group">
            <input className="form-control form-control-lg" type="text" placeholder={props.text} id="inputLarge"/>
        </div>

    );
}