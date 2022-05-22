import {CurricularComponent} from "../types/CurricularComponentType";
import api from "../ApiConfiguration";

export async function saveCurricularComponent(curricularComponent:CurricularComponent){
    const response = await api().post("/curricularComponent",curricularComponent)
    const status = response.status;
    console.log(status)
    if( status == 201 ){
        alert("Criado com Sucesso")
    }else{
        alert("Não foi possível criar")
    }
}

export async function getCurricularComponent(){
    const response = await api().get("/curricularComponent");
    return response.data;
}