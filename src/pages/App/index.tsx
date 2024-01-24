import { Outlet } from "react-router-dom"
import { Navbar } from "../../components/Navbar"
export function App(){
    return(
        <main>
            <Navbar/>
        <Outlet/>
        </main>
    )
}