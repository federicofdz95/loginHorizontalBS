import { useNavigate, useRouteError } from "react-router-dom";
//import { useHistory } from "react-router-dom";



export default function ErrorPage() {

  const error = useRouteError();
  const navigate = useNavigate();

  
  return (
    <div className="container mt-5">
      <p style={{color: "red", fontSize:"30px"}}>
        Error 404
      </p>

      <button className="btn btn-primary" onClick={() => navigate(-1)}>
        volver
      </button>

    </div>
  );
}