import DefaultButton from "../components/DefaultButton";
import LargeInput from "../components/LargeInputComponent";
import { Body } from "../styledComponents/Body";
import { Div } from "../styledComponents/Div";
import NavBarComponent from "../components/NavBarComponent";

export default function CreatePeople(){
    return (
        <div>
            <NavBarComponent />
            <Body>
                <Div>
                    <h1>Cadastrar Pessoas</h1>
                </Div>
                <Div>
                    <p style={{
                        marginRight:"10px",
                        marginTop:"10px",
                        color:"#fff"
                    }}>Digite seu Nome</p>
                    <LargeInput text="Seu nome" />
                </Div>
                <Div>
                    <p style={{
                        marginRight:"10px",
                        marginTop:"10px",
                        color:"#fff"
                    }}>Digite o seu E-mail</p>
                    <LargeInput text="Seu e-mail"/>
                </Div>
                <Div>
                    <p style={{
                        marginRight:"10px",
                        marginTop:"10px",
                        color:"#fff"
                    }}>Escolha seu telefone</p>
                    <LargeInput text="Seu telefone"/>
                </Div>
                <Div >
                    <DefaultButton />
                </Div>
                
            </Body>
        </div>
    
    )
}