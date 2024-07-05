import React, { useEffect } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import Cookies from 'universal-cookie';
import { useAuth } from '../provider/AuthProvider';
import toast from 'react-hot-toast';


const BarraNavegacion = () => {


    const navigate = useNavigate();
    const cookies = new Cookies();
    const { setToken } = useAuth();
    const usuario = localStorage.getItem("usuario");

    //alert(cookies.get("userName"));
        
    
    /*
    useEffect(() => {
        
        if (!cookies.get("userName")) {

        
                toast('This is an error!');
            
            
                setToken();
                navigate("/", { replace: true });
            
    
        }
    });
    */
    

  return (
    <>
        <nav className="navbar navbar-expand-lg navbar-dark bg-success flex-column mb-5">
            <Link className="navbar-brand" to="/">
                <h2>Titulo</h2>
            </Link>            
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarText" aria-controls="navbarText" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarText">
                
                <ul className="navbar-nav mr-auto">
                    
                    <li className="nav-item dropdown">
                        <Link className="nav-link dropdown-toggle active" href="#" role="button" data-toggle="dropdown" aria-expanded="false">Link1</Link>
                        <div className="dropdown-menu">
                            <Link className="dropdown-item" to="/">Sub1</Link>
                            <Link className="dropdown-item" to="/">Sub2</Link>
                            <Link className="dropdown-item" to="/">Sub3</Link>                            
                        </div>
                    </li>
                    

                    <li className="nav-item active">
                        <Link className="nav-link active" to="/findetareas/findetareas">Link2</Link>
                    </li>
                
                </ul>
                   
                <ul className="navbar-nav">
                    <li className="nav-item dropdown">
                        <Link className="nav-link dropdown-toggle text-danger" href="#" role="button" data-toggle="dropdown" aria-expanded="false">
                            <strong>
                                {cookies.get("usuario")}
                            </strong>
                        </Link>
                        <div className="dropdown-menu">
                            <Link className="dropdown-item text-danger" to="/logout">Cerrar Sesion</Link>                            
                        </div>
                    </li>
                </ul>
                
            </div>
        </nav>
    </>
  )
}

export default BarraNavegacion
