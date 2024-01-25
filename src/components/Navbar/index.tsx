import { Link } from "react-router-dom"
import LogoOneshot from '../../assets/logoOneshot.svg'
import './style.css'
export function Navbar(){
    return(
        <nav className="flex justify-between h-[100px] sticky top-0 shadow-lg z-10 items-center ">

                  <Link to={'/'} className=" items-center flex ">
                    <img src={LogoOneshot} alt="Imagem da lampada de oneshot que muitos tratam como sol " className="w-64 "/>
                  </Link>
          
          
            <ul className="flex space-x-9 pr-10 text-xl text-white uppercase  ">
                <li><Link to={"/characters"}>Personagens</Link></li>
                <li><Link to={"/downloadPage"}>Baixar</Link></li>
                <li><Link to={"/GameplayPage"}>Gameplay</Link></li>
            </ul>
        </nav>
    )
}