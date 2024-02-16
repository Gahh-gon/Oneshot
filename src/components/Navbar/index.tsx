import { Link } from "react-router-dom"
import LogoOneshot from '../../assets/logoOneshot.svg'
import './style.css'
export function Navbar(){
    return(
        <nav className="flex justify-between space-x-5 h-[100px] sticky top-0 shadow-lg z-10 items-center ">

                  <Link to='/' className=" items-center flex ">
                    <img src={LogoOneshot} alt="Imagem da lampada de oneshot que muitos tratam como sol " className="w-48 sm:w-52 md:w-60 lg:w-62 xl:w-72 2xl:80"/>
                  </Link>
          
          
            <ul className="flex space-x-3 md:space-x-6 lg:space-x-8 pr-10 text-white text-[9px] sm:text-sm md:text-base lg:text-xl xl:text-2xl uppercase">
                <li><Link to="/characters">Personagens</Link></li>
                <li><Link to="/downloadPage">Baixar</Link></li>
                <li><Link to="/GameplayPage">Gameplay</Link></li>
            </ul>
        </nav>
    )
}