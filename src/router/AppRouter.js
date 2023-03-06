import { Routes, Route } from "react-router"
import Home from "../pages/index"
import SearchPage  from "../pages/SearchPage"
import UserView from "../pages/UserView"

export const AppRouter = () =>{
    return(
        <Routes>
            <Route path="/" element={<Home/>} />
            <Route path="/searchpage" element={<SearchPage/>}/>
            <Route path="/userview" element={<UserView/>}/>
        </Routes>
    )
}