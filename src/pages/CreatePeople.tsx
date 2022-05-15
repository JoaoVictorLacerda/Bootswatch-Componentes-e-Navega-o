import DefaultButton from "../components/DefaultButton";
import LargeInput from "../components/LargeInputComponent";
import { Body } from "../styledComponents/Body";
import { Div } from "../styledComponents/Div";

export default function CreatePeople(){
    return (
        <Body>
            <Div>
    
                <p style={{
                    marginRight:"10px",
                    marginTop:"10px",
                    color:"black"
                }}>Digite seu Nome</p>
                <LargeInput text="Seu nome"/>
                <p style={{
                    marginRight:"10px",
                    marginTop:"10px",
                    color:"black"
                }}>Digite o seu E-mail</p>
                <LargeInput text="Seu e-mail"/>
                <p style={{
                    marginRight:"10px",
                    marginTop:"10px",
                    color:"black"
                }}>Escolha seu telefone</p>
                <LargeInput text="Seu telefone"/>
                <DefaultButton />
            </Div>
        </Body>
    )
}