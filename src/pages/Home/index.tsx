
import './style.css'
import perfilImag from'../../assets/PerfilGithub.svg'
export function Home() {

  return (
    <article className='mt-[20%] sm:mt-[20%] md:mt-[10%] lg:mt-[6%] xl:mt-[9%] 2xl:mt-[9%] '>
      <div className=' flex justify-center items-center flex-col space-y-5 '>
      <p className='leading-normal  text-justify text-white text-[10px] sm:text-base lg:text-xl xl:text-2xl 2xl:text-3xl w-[65%] sm:w-[70%] lg:w-[70%] xl:w-[50%]'>Bem vindo a esse site, ele e apenas um projeto para  aprender e fixa alguns aprendizados de desenvolvimento web aqui abaixo temos um botão que vai levar a meu perfil do github caso queira ver mais do meus projetos </p>

<div className='flex  flex-col  items-center space-y-3 '>
    <img src={perfilImag} alt="" className='w-32'/>
    <span className='text-white'>Gahh-gon</span>
    <a className='bg-yellow-300 p-1 rounded-md ' href="https://github.com/Gahh-gon" target='_blank'>Ver perfil</a>
    
</div>
      </div>

       
       
    </article>
   
  )

}


