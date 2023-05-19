
const Historial = () => { 

return (


<>

            <div className="bg-gray-800 p-3">
                    <div className="flex ">
                        <h1 className="text-6xl uppercase text-center text-white flex-grow grid place-content-center">Historial</h1>
                        <img className=" w-32  " src="src/assets/images/logo ministerio.png"></img>
                    </div>
            </div>


            <div className=" bg-gray-200 flex-grow h-screen m-10">
                <div className="  h-screen p-7 ">
                        <div className="text-4xl py-3 font-semibold">Buscar Solicitud</div>
                            <div className=" px-10 pt-2 pb-6 border-2 rounded-md border-black bg-white"> 
                                <h1 className="text-center text-2xl p-3 font-semibold"> FILTROS </h1>
                                <div className="flex justify-between">
                                    <div className="p-2 flex flex-col " >
                                        <label className=" font-semibold"
                                            >NUMERO DE SOLICITUD
                                        </label>
                                        <input className="text-4xl px-2 border-4 rounded-md border-gray-400 mt-2" type="number"/>
                                    </div>
                                    <div className="p-2 flex flex-col " >
                                        <label className=" font-semibold"
                                            >RUT
                                        </label>
                                        <input className="text-4xl px-2 border-4 rounded-md border-gray-400 mt-2" type="text"/>
                                    </div>
                                    <div className="p-2 flex flex-col " >
                                        <label className=" font-semibold"
                                            >NOMBRE Y APELLIDO
                                        </label>
                                        <input className="text-4xl px-2 border-4 rounded-md border-gray-400 mt-2" type="text"/>
                                    </div>
                                </div>
                            </div>
                        <table className="mt-12 text-center">
                            <thead>
                                <tr className="">
                                    <th className=" border-2 border-black bg-gray-500   py-3 px-2 text-2xl font-semibold">N SOLICITUD</th>
                                    <th className=" border-2 border-black bg-gray-500   py-3 px-28 text-2xl font-semibold ">NOMBRE Y APELLIDO</th>
                                    <th className=" border-2 border-black bg-gray-500   py-3 px-28 text-2xl font-semibold ">ESTADO</th>
                                    <th className=" border-2 border-black bg-gray-500   py-3 px-28 text-2xl font-semibold">FECHA Y SOLICITUD</th>
                                    <th className=" border-2 border-black bg-gray-500   py-3 px-28 text-2xl font-semibold">SELECCIÓN</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td className=" border-2 border-gray-700  py-6  px-2">1900912</td>
                                    <td className=" border-2 border-gray-700  py-6  px-28">Juan Muñoz</td>
                                    <td className=" border-2 border-gray-700   text-yellow-500 font-semibold py-6 px-28"> Pendiente </td>
                                    <td className=" border-2 border-gray-700  py-6  px-28">16-05-2023</td>
                                    <td className=" border-2 border-gray-700  py-6  px-28">
                                        <button className="bg-blue-800 text-white rounded-md p-2 px-10 hover:bg-blue-900 text-xl font-semibold"> Ver</button> 
                                    </td>
                                </tr>
                                <tr>
                                    <td className=" border-2 border-gray-700   py-6 px-2">1900913</td>
                                    <td className=" border-2 border-gray-700  py-6  px-28">María Eugenia</td>
                                    <td className=" border-2 border-gray-700   text-green-500 font-semibold py-6 px-28"> Aprobado </td>
                                    <td className=" border-2 border-gray-700   py-6 px-28">16-05-2023</td>
                                    <td className=" border-2 border-gray-700  py-6  px-28">
                                        <button className="bg-blue-800 text-white rounded-md p-2 px-10 hover:bg-blue-900 text-xl font-semibold"> Ver</button> 
                                    </td>
                                </tr>
                                <tr>
                                    <td className=" border-2 border-gray-700   py-6 px-2">1900914</td>
                                    <td className=" border-2 border-gray-700   py-6 px-28">Luis Soto</td>
                                    <td className=" border-2 border-gray-700   text-green-500 font-semibold py-6 px-28"> Pendiente </td>
                                    <td className=" border-2 border-gray-700   py-6 px-28">16-05-2023</td>
                                    <td className=" border-2 border-gray-700  py-6  px-28">
                                        <button className="bg-blue-800 text-white rounded-md p-2 px-10 hover:bg-blue-900 text-xl font-semibold"> Ver</button> 
                                    </td>
                                </tr>
                                <tr>
                                    <td className=" border-2 border-gray-700   py-6 px-2">1900915</td>
                                    <td className=" border-2 border-gray-700   py-6 px-28">Pedro Gonzales</td>
                                    <td className=" border-2 border-gray-700   text-red-500 font-semibold py-6 px-28"> Rechazado </td>
                                    <td className=" border-2 border-gray-700   py-6 px-28">17-05-2023</td>
                                    <td className=" border-2 border-gray-700  py-6  px-28">
                                        <button className="bg-blue-800 text-white rounded-md p-2 px-10 hover:bg-blue-900 text-xl font-semibold"> Ver</button> 
                                    </td>
                                </tr>
                                <tr>
                                    <td className=" border-2 border-gray-700   py-6 px-2">1900915</td>
                                    <td className=" border-2 border-gray-700   py-6 px-28">Pedro Gonzales</td>
                                    <td className=" border-2 border-gray-700   text-red-500 font-semibold py-6 px-28"> Rechazado </td>
                                    <td className=" border-2 border-gray-700   py-6 px-28">17-05-2023</td>
                                    <td className=" border-2 border-gray-700  py-6  px-28">
                                        <button className="bg-blue-800 text-white rounded-md p-2 px-10 hover:bg-blue-900 text-xl font-semibold"> Ver</button> 
                                    </td>
                                </tr>
                            </tbody>
                </table>
                        
                         



                </div>
                
                     
                

            </div>




</>

)


}


export default Historial;