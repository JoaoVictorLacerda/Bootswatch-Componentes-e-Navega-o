import "bootswatch/dist/Darkly/bootstrap.css"
export default function SelectComponent(){

    return (
        <div className="form-group" style={{
            width:"250px"
        }}>
            <label className="form-label mt-4">Escolha seu telefone</label>
            <select className="form-select" id="exampleSelect1">
                <option>1</option>
                <option>2</option>
                <option>3</option>
                <option>4</option>
                <option>5</option>
            </select>
    </div>
    );
}