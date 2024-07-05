import { useNavigate } from "react-router-dom";
import { useAuth } from "../provider/AuthProvider";
import { useEffect } from "react";
import toast, { Toaster } from 'react-hot-toast';


const Logout = () => {


  const { setToken } = useAuth();
  const navigate = useNavigate();

  //console.log(handleEvent)

  useEffect(() => {
    
    myPromise();
    

  }, []);

  

  const myPromise = () => {

    setTimeout(() => {      
      setToken();            
      navigate("/", { replace: true });
    }, 2000);

  };

  
  

  return (
    <>
        <div className='container'>
            
          <div className="alert alert-danger">
            <strong>Hasta luego!</strong>
          </div>

          <Toaster/>

        </div>

    </>
  )

};

export default Logout;