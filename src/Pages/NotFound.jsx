import {Link, useRouteError} from "react-router-dom";


const NotFound = () => {
    
const error = useRouteError();
console.log(error);

return (
    <>
    <div className="text-center font-semibold pt-40 text-9xl">
            <h1>404</h1>
            <p>{error.statusText || error.message}</p>
    </div>
    <div className="text-center pt-10">
    <Link
        to="/"
        type="Link"
        data-te-ripple-init
        data-te-ripple-color="dark"
        className="inline-block rounded items-center  px-6 pb-2 pt-2.5 text-xs font-medium uppercase leading-normal text-dark shadow-[0_4px_9px_-4px_#3b71ca] transition duration-150 ease-in-out hover:bg-primary-600 hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:bg-primary-600 focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:outline-none focus:ring-0 active:bg-primary-700 active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] dark:shadow-[0_4px_9px_-4px_rgba(59,113,202,0.5)] dark:hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)] dark:focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)] dark:active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)]">
        Volver al inicio de la pagina
    </Link>
        
    </div>
    
    </>
)

}


export default NotFound;