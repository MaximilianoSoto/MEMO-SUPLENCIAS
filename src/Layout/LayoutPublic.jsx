import { Outlet } from "react-router-dom";
import SideBar from "../Components/SideBar";

const Layout = () => {

return (
 <>
    
  <div className="flex  ">
    
  <div className="">

      <SideBar/>

    </div>
    
    <div className=" flex flex-col  w-full"> 
          
          
           <Outlet/>
           
           <div className="grid grid-cols-3">
              <div className="bg-blue-700"> 
                <h1 className="scale-0"> A </h1>
              </div>
              <div className="bg-blue-700"> 
                <h1 className="scale-0"> A </h1>
              </div>
              <div className="bg-red-700">
                <h1 className="scale-0"> A </h1>
              </div>
           </div>


    </div>
  </div>
      
      

 </>

)


}

export default Layout;