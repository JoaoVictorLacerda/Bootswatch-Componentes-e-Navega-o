import DefaultButton from "../components/DefaultButton";
import LargeInput from "../components/LargeInputComponent";
import { Body } from "../styledComponents/Body";
import { Div } from "../styledComponents/Div";
import { SetStateAction, useState } from "react"
import { useNavigate } from "react-router-dom";

export default function Login(){
    const [email, setEmail] = useState<string>(); 
    const [pass, setPass] = useState<string>(); 
    const navigate = useNavigate()
    
    function authorize(){
        
        if(email=="monteiro@ifpb.edu.br" && pass=="123"){
            return navigate("/");
        } else {
            return alert("Não encontrado");
        }
    }
    return (
        <Body>

            <Div>
                <h1 style={{
                    marginBottom:"50px"
                }}>Faça seu Login</h1>
            </Div>
            <Div>
                <p style={{
                    marginLeft:"10px",
                    marginBottom:"0px",
                    color:"#fff"
                }}>Email:</p>
                <LargeInput text="Seu nome" change={(e: { target: { value: SetStateAction<string | undefined>; }; })=>{
                    setEmail(e.target.value)
                }}/>
            </Div>
            <Div style={{
                marginTop:"20px",
            }}>
                <p style={{
                    marginLeft:"10px",
                    marginBottom:"0px",
                    color:"#fff",
                    
                }}>Senha:</p>
                <LargeInput text="Seu e-mail" change={(e: { target: { value: SetStateAction<string | undefined>; }; })=>{
                    setPass(e.target.value)
                }}/>
            </Div>
            <Div >
                <DefaultButton cb={authorize}/>
            </Div>
            
        </Body>
    )
}