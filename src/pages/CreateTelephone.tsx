import DefaultButton from "../components/DefaultButton";
import LargeInput from "../components/LargeInputComponent";
import { Body } from "../styledComponents/Body";
import { Div } from "../styledComponents/Div";

export default function CreateTelephone(){
    return (
        <Body>
            <Div>
    
                <p style={{
                    marginRight:"10px",
                    marginTop:"10px",
                    color:"black"
                }}>Digite seu telefone:</p>
                <LargeInput text="Seu Número"/>
                <DefaultButton />
            </Div>
        </Body>
    )
}