import { Outlet } from "react-router-dom"
import { Navbar } from "../../components/Navbar"
import './style.css'
export function App(){
    return(
        <main>
            <Navbar/>
        <Outlet/>
        </main>
    )
}