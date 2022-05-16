
import "bootswatch/dist/Darkly/bootstrap.css"
type DefaultButton={
    login?: any
}
export default function DefaultButton(props:DefaultButton){
    const {login} = props;
    return (
        <button type="button" style={{
            marginTop:"20px"
        }} className="btn btn-primary" onClick={login}>Enviar</button>

    );
}