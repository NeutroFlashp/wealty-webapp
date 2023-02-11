import { Routes, Route } from "react-router"
import Home from "../pages/index"

export const AppRouter = () =>{
    return(
        <Routes>
            <Route path="/" element={<Home/>} />
        </Routes>
    )
}