import NavBarComponent from "./components/NavBarComponent";
import {BrowserRouter, Routes, Route} from "react-router-dom";
import CreateTelephone from "./pages/CreateTelephone"
import ListTelephone from "./pages/ListTelephone";
import CreatePeople from "./pages/CreatePeople";
import ListPeople from "./pages/ListPeople";

export default function Router(){
    return (
        <BrowserRouter>
            <NavBarComponent />
                <Routes>
                    <Route path="/" element={<CreateTelephone />} />
                    <Route path="/telephone-list" element={<ListTelephone />} />
                    <Route path="/people" element={<CreatePeople />} />
                    <Route path="/people-list" element={<ListPeople />} />
                </Routes>
        </BrowserRouter>
    )
}