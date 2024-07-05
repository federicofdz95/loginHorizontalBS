import { useNavigate } from "react-router-dom";
import { useAuth } from "../provider/AuthProvider";
import { useState } from "react";
import logo from '../images/mutual.png';
import toast, { Toaster } from 'react-hot-toast';
import { EscriptarJs } from "./Clave";
import { jwtDecode } from "jwt-decode";
import Cookies from "universal-cookie";
import { FaEye, FaEyeSlash  } from "react-icons/fa";



const Login = () => {


    const { setToken } = useAuth();
    const navigate = useNavigate();
    const cookies = new Cookies();

    
    //console.log(handleValor);
    
  
    
    const handleLogin = () => {
      setToken("this is a test token");
      navigate("/", { replace: true });
    };
    

    
    const [usuario, setUsuario] = useState("");
    const [pass, setPass] = useState("");
    const [msg, setMsg] = useState("El afiliado no existe");
    const [dni, setDni] = useState("");
    const [len, setLen] = useState("");
    const [type, setType] = useState('password');
    const [icon, setIcon] = useState(FaEye);

    /*
    const handleSubmit = (event) => {
      event.preventDefault();
      //alert(`Nombre: ${usr} -- Clave: ${pass}`);
      localStorage.setItem("usuario", usr);      
      setToken("this is a test token");
      navigate("/", { replace: true });
    }
      */

    const handleToggle = (e) => {

        
      if (type==='password'){
         setIcon(FaEyeSlash);
         setType('text')
      } else {
         setIcon(FaEye)
         setType('password')
      }

   }

    
    async function ingresar() {

      let clave1;        
      
      //La llave es smatacentral TODO en minuscula
      clave1 = EscriptarJs('smatacentral',pass); 
      


      let data  = {
          "nombreUsuario": usuario,
          "clave": clave1
      }                   
              
      console.log(process.env.REACT_APP_USUARIOS);

      const response = await fetch(process.env.REACT_APP_USUARIOS, {
          //mode:  'no-cors' ,
          method: "POST",            
          headers: {
              Accept: "*/*",
              'Content-Type': 'application/json',
              'Access-Control-Allow-Origin':'*',
          },
          body: JSON.stringify(data),
      });
      const status = await response.status
      //const ok = await response.ok

      
      if (status === 200) {

          const res = await response.json();
          //let len = await (res.length);
          
          //console.log(res);                                

          if(1===1) {                                
              
              setDni(res.dni)

              //1 seg = 1000; 1 min = 60000;  30 min = 1800000 ; 1 hora = 3600000

              let time = 3600000;

              /*
              cookies.set('userDni', res.dni, { path: '/', expires: new Date(Date.now()+time) });
              cookies.set('userCuil', res.cuil, { path: '/', expires: new Date(Date.now()+time) });
              cookies.set('userName', (res.name).toUpperCase(), { path: '/', expires: new Date(Date.now()+time) });
              cookies.set('userLastName', (res.lastname).toUpperCase(), { path: '/', expires: new Date(Date.now()+time) });
              cookies.set('userAlta', res.alta, { path: '/', expires: new Date(Date.now()+time) });              
            */
              //cookies.set('userToken', res.token, { path: '/', expires: new Date(Date.now()+time) });
              let decoded = jwtDecode(res.token);
              localStorage.setItem("userRol", decoded['http://schemas.microsoft.com/ws/2008/06/identity/claims/role']);                
              
              //setUserRol(decoded['http://schemas.microsoft.com/ws/2008/06/identity/claims/role']);
              
              
              
              toast.success("¡Bienvenido!",
              {
                  duration: 1000,
                  position: 'top-center',
                  className: 'mt-5',
                  style: {
                      border: '1px solid #713200',
                      padding: '16px',
                      color: '#fff',
                      background: 'green',
                    },                      
              });
              
              
              cookies.set('usuario', usuario, { path: '/', expires: new Date(Date.now()+time) });
              localStorage.setItem("usuario", usuario);

              setTimeout(() => {
                setToken(res.token);
                navigate("/", { replace: true });                
              }, 1500); 
              

              //handleEvent(true);

          } else {
              setLen(0);
              setMsg("Usuario inexistente")
              //handleEvent(false);
              //toast.error('Usuario inexistente');
          }
                                              
      } else {
          setLen(0);
          setMsg("Usuario inexistente")
          //toast.error('Datos invalidos');
      }
             
      
      
    }

  
    return (
      <>

        <div className='container p-5'>
                        
            <div className='d-flex justify-content-center mt-1'>
                <div className="card p-4" style={{width: '20rem'}}>
                    
                    <div className="card-body mt-3 text-center">
                        <div className="form-group">
                            <div className='row justify-content-md-center'>
                                <div className='col-12'>                                
                                    <label className=''>USUARIO</label>
                                    <input   
                                        autoFocus                                                                                  
                                        className="form-control text-center"
                                        onChange={e => {
                                            setUsuario(e.target.value);                                                                                                
                                        }}
                                        maxLength={15}
                                    />      
                                    
                                    <label className='mt-3'>CONTRASEÑA</label>                                        

                                    <div className="input-group mb-3">
                                        <input                                                                                     
                                            className="form-control text-center"
                                            onChange={e => {
                                                setPass(e.target.value);                                                                                                
                                            }}
                                            onKeyUp={e => {
                                                if(e.key === 'Enter'){                                                    
                                                    ingresar()
                                                }
                                            }
                                            }
                                            maxLength={8}
                                            type={`${type}`}
                                        />
                                        <div className="input-group-append" onClick={(e) => handleToggle(e)}>                                                
                                            <span className="input-group-text">
                                                {icon}
                                            </span>
                                        </div>
                                    </div>

                                </div>
                                
                                
                            </div>
                        </div>

                                                    
                        <button 
                            type="button" 
                            className="btn btn-success"                                    
                            onClick={() => {ingresar()}}                         
                        >
                            INGRESAR
                        </button>    

                        {len === 0 &&                                        
                            <div className="alert alert-danger mt-3" role="alert">
                                {msg}
                            </div>
                        }
                        
                        
                        
                    </div>
                </div>
            </div>
                    
        
        </div>
        <Toaster />
      
      </>
    );
        

  };
  
  export default Login;