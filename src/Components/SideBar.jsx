
import {Link} from "react-router-dom";
import { BsArrowLeftShort, BsFillHouseDoorFill,BsFillClipboardCheckFill, BsFillFileEarmarkPlusFill, BsArchiveFill } from "react-icons/bs";
import {useState} from "react";

const SideBar = () => {
    const [abrir,setAbrir] = useState(true);




    return (
    
       <>
            <div className={`bg-gray-900 p-5 pt-8 pr-24 h-full  ${abrir ? " w-60" : " w-20"} duration-700 relative`}>
                <BsArrowLeftShort className={`bg-white text-black text-5xl rounded-full absolute -right-5 top-28 border-2
                                            border-black cursor-pointer ${!abrir && " duration-500 rotate-180"}`} 
                                onClick={() => setAbrir(!abrir)} />
                <div className="flex">
                    <img src="src/assets/images/logo hospital.png" className={`flex cursor-pointer w-24 duration-700 ${!abrir && " rotate-[360deg]  "}`}></img>
                    <h1 className={`text-white  font-medium text-4xl grid place-content-center ml-4 pt-6 duration-300 ${!abrir && "scale-0 duration-300"}`}> SSR </h1>
                
                </div>
                <div className={`my-2 pr-48 duration-500 bg-gray-600 h-[1px] ${!abrir && "scale-0 duration-500"} `} />

                <div className="flex flex-col ">

                    <div className="flex"> 
                        <div className= { `p-2.5  mt-3 flex items-center px-4`} >
                            <Link to="/">
                                <BsFillHouseDoorFill className={`text-white text-2xl`}/>
                            </Link>

                            <Link to="/" className={`text-[15px] p-1 pr-20 ml-3 hover:bg-blue-600 rounded-md text-gray-200 font-bold duration-300 ${!abrir && "scale-0 duration-500"}`} >Inicio</Link>
                        </div>
                    </div>
                    <div className={`my-2 pr-48 duration-500 bg-gray-600 h-[1px] ${!abrir && " scale-0 duration-500"} `}/>
                    <div className="flex"> 
                        <div className= { `p-2.5  mt-3 flex items-center px-4`} >
                            <Link to="/">
                                <BsFillFileEarmarkPlusFill className={`text-white text-2xl`}/>
                            </Link>

                            <Link to="/ingresarmemo" className={`text-[15px] p-1 pr-20 ml-3 hover:bg-blue-600 rounded-md text-gray-200 font-bold duration-300 ${!abrir && "scale-0 duration-500"}`} >Ingresar Solicitud</Link>
                        </div>
                    </div>
                    <div className={`my-2 pr-48 duration-500 bg-gray-600 h-[1px] ${!abrir && "scale-0 duration-500"} `}/>
                    <div className="flex"> 
                        <div className= { `p-2.5  mt-3 flex items-center px-4`} >
                            <Link to="/">
                                <BsFillClipboardCheckFill className={`text-white text-2xl`}/>
                            </Link>

                            <Link to="/aprobarsolicitud" className={`text-[15px] p-1 pr-20 ml-3 hover:bg-blue-600 rounded-md text-gray-200 font-bold duration-300 ${!abrir && "scale-0 duration-500"}`} >Aprobar Solicitudes</Link>
                        </div>
                    </div>
                    <div className={`my-2 pr-48 duration-500 bg-gray-600 h-[1px] ${!abrir && "scale-0 duration-500"} `}/>
                    <div className="flex"> 
                        <div className= { `p-2.5  mt-3 flex items-center px-4`} >
                            <Link to="/">
                                <BsArchiveFill className={`text-white text-2xl`}/>
                            </Link>

                            <Link to="/historial" className={`text-[15px] p-1 pr-20 ml-3 hover:bg-blue-600 rounded-md text-gray-200 font-bold duration-300 ${!abrir && "scale-0 duration-500"}`} >Historial</Link>
                        </div>
                    </div>
                </div>
            </div>
        









        
    
       </>
 );


}


export default SideBar;

