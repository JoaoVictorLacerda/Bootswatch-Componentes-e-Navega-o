import DefaultButton from "../components/DefaultButton";
import LargeInput from "../components/LargeInputComponent";
import { Body } from "../styledComponents/Body";
import { Div } from "../styledComponents/Div";
import NavBarComponent from "../components/NavBarComponent";
import {SetStateAction, useState} from "react";
import {CurricularComponent} from "../types/CurricularComponentType";
import {saveCurricularComponent} from "../controllers/CurricularComponentController";


export default function CurricularComponentView(){
    const [name, setName] = useState<string>();
    const [workload, setWorkload] = useState<number>();
    const [course, setCourse] = useState<string>();


    return (
        <div>
            <NavBarComponent />
            <Body>
                <Div>
                    <h1>Cadastrar Componente Curricular</h1>
                </Div>
                <Div>
                    <p style={{
                        marginRight:"10px",
                        marginTop:"10px",
                        color:"#fff"
                    }}>Digite o nome:</p>
                    <LargeInput text="Nome" change={(e: { target: { value: SetStateAction<string | undefined>; }; })=>{
                        setName(e.target.value)
                    }}/>
                </Div>
                <Div>
                    <p style={{
                        marginRight:"10px",
                        marginTop:"10px",
                        color:"#fff"
                    }}>Digite a carga horária:</p>
                    <LargeInput text="Carga Horária" change={(e: { target: { value: SetStateAction<string | undefined>; }; })=>{
                        setWorkload( Number.parseInt(e.target.value as string))
                    }}/>
                </Div>
                <Div>
                    <p style={{
                        marginRight:"10px",
                        marginTop:"10px",
                        color:"#fff"
                    }}>Relacione a um curso:</p>
                    <LargeInput text="Id do curso"  change={(e: { target: { value: SetStateAction<string | undefined>; }; })=>{
                        setCourse(e.target.value)
                    }}/>
                </Div>
                <Div >
                    <DefaultButton cb={ async () => {

                        const curricularComponent:CurricularComponent ={
                            name:name || "",
                            courseUuid:course || "",
                            workload:workload || 0
                        }
                        await saveCurricularComponent(curricularComponent);
                    }}/>
                </Div>
            </Body>
        </div>
    
    )
}