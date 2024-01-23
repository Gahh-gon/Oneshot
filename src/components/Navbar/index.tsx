import { Link } from "react-router-dom"
export function Navbar(){
    return(
        <nav>
            <Link to={'/'}><img src="#" alt="" /></Link>
            <ul>
                <li><Link to={"/characters"}>Personagens</Link></li>
                <li><Link to={"/downloadPage"}>Baixar</Link></li>
                <li><Link to={"/GameplayPage"}>Gameplay</Link></li>
            </ul>
        </nav>
    )
}