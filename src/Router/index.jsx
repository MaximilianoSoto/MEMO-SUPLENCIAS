import {createBrowserRouter} from "react-router-dom";

import Inicio from "../Pages/Inicio";
import LayoutPublic from "../Layout/LayoutPublic";
import Formulario from "../Pages/IngresarSolicitud";
import NotFound from "../Pages/NotFound";
import Historial from "../Pages/Historial";
import AprobarSolicitud from "../Pages/AprobarSolicitud";




export const router = createBrowserRouter([
    {
        path: "/",
        element: <LayoutPublic/>,
        errorElement: <NotFound/>,
        children: [ 
            {
                errorElement: <NotFound/>,
                children: [
                    {
                        index:true,
                        element:<Inicio/>,

                    },
                    {
                        path:"/ingresarmemo",
                        element:<Formulario/>,
                    },
                    {
                        path:"/aprobarsolicitud",
                        element:<AprobarSolicitud/>,
                    },
                    {
                        path:"/historial",
                        element:<Historial/>,
                    },
                    







                ],




            }
            

        ],

    }
]);