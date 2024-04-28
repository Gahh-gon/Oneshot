// import { listPersonaInfo } from "../../ts/pagePersonagensInfo"

export function PagePersonagens(){
    // const listPersonaInfoMap = listPersonaInfo.map(
    //     (text)=>
    // )
    return(
        
        <article className=" flex justify-center mt-10">
            <div className="grid grid-cols-2 gap-[22.5em] ">

            <div className="flex flex-col w-[39em] text-cyan-50 space-y-2 ml-20">
                <div className="flex space-x-4 justify-center items-center">
                <img src='' alt="" className="w-36"/>
                <p className="text-left overflow-auto h-[7.4em]">
                 
                </p>
                </div>
                <p className="overflow-auto h-[5.7em]">
                  
                </p>
               
                <div className="flex space-x-3 justify-center">
                <img src='' alt="" className="w-44" />
                <img src='' alt="" className="w-44"/>
                </div>
                
             </div>
             
             <div className="flex flex-col bg-[#06082C] p-4  w-[480px] h-[510px] bg-opacity-80">
             <h2 className="text-white text-2xl ml-4">Personagens</h2>
                <div className="flex items-end space-y-2 flex-wrap space-x-2 justify-end mr-280 mt-20 ">
               
              
                </div>
             </div>

            </div>
            
        </article>
       
    )
       
    
}