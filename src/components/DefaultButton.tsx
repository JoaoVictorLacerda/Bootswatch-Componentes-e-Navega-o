
import "bootswatch/dist/Darkly/bootstrap.css"
type DefaultButton={
    cb?: any
}
export default function DefaultButton(props:DefaultButton){
    const {cb} = props;
    return (
        <button type="button" style={{
            marginTop:"20px"
        }} className="btn btn-primary" onClick={cb}>Enviar</button>

    );
}