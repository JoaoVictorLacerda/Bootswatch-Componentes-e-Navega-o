import "bootswatch/dist/Darkly/bootstrap.css"
import {Link} from "react-router-dom";
export default function NavBarComponent(){
    return (
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
            <div className="container-fluid">
                <Link className="navbar-brand" to="/">Atividade Front-end DAC</Link>

                <div className="collapse navbar-collapse" id="navbarColor01">
                    <ul className="navbar-nav me-auto">


                        <li className="nav-item">
                            <Link className="nav-link" to="/">Cadastrar Pessoas</Link>
                        </li>

                        <li className="nav-item">
                            <Link className="nav-link" to="/telephone-list">Listar Telefones</Link>
                        </li>

                        <li className="nav-item">
                            <Link className="nav-link" to="/people-list">Listar Pessoas</Link>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    );
}