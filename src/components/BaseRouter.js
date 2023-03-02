import { Route, Routes, Navigate } from "react-router-dom"
import Students from "../students"

export const BaseRouter = () => {
    return(
        <Routes>
            <Route path="/login" element={<Login/>}/>
            <Route path="/students" element={<Students/>}/>
            <Route path="/login" element={<Login/>}/>

        </Routes>
    )
}