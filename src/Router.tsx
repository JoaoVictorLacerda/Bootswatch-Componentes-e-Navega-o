
import {BrowserRouter, Routes, Route} from "react-router-dom";
import ListCurricularComponentView from "./pages/ListCurricularComponentView";
import Login from "./pages/Login";
import CurricularComponentView from "./pages/CurricularComponentView";

export default function Router(){
    return (

        <BrowserRouter>
      
            <Routes>
                <Route path="/login" element={<Login />} />
                <Route path="/curricular-component-list" element={<ListCurricularComponentView />} />
                <Route path="/" element={<CurricularComponentView />} />
            </Routes>
        </BrowserRouter>
    )
}