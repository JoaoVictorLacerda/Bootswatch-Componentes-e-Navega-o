
import {BrowserRouter, Routes, Route} from "react-router-dom";
import ListTelephone from "./pages/ListTelephone";
import Login from "./pages/Login";
import CreatePeople from "./pages/CreatePeople";
import ListPeople from "./pages/ListPeople";

export default function Router(){
    return (

        <BrowserRouter>
      
            <Routes>
                <Route path="/login" element={<Login />} />
                <Route path="/telephone-list" element={<ListTelephone />} />
                <Route path="/" element={<CreatePeople />} />
                <Route path="/people-list" element={<ListPeople />} />
            </Routes>
        </BrowserRouter>
    )
}