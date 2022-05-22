import axios from "axios";

export default function api(){
   return axios.create({
      baseURL:"https://sistema-de-horario.herokuapp.com",
      headers: { "Content-type": "application/json" }
   });
}