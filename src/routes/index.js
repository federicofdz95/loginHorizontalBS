import { RouterProvider, createBrowserRouter } from "react-router-dom";
import { ProtectedRoute } from "./ProtectedRoute";
import { useAuth } from "../provider/AuthProvider";
import Logout from "../pages/Logout";
import Login from "../pages/Login";

import Socios from "../pages/ActualizacionDeArchivos/Socios";
import Empresas from "../pages/ActualizacionDeArchivos/Empresas";
import Egresos from "../pages/ActualizacionDeArchivos/Egresos";
import Ingresos from "../pages/ActualizacionDeArchivos/Ingresos";
import Cobradores from "../pages/ActualizacionDeArchivos/Cobradores";
import Practicas from "../pages/ActualizacionDeArchivos/Practicas";
import Autorizaciones from "../pages/ActualizacionDeArchivos/Autorizaciones";

import ListadoSocios from "../pages/Listados/ListadoSocios"
import ListadoDeudaSocios from "../pages/Listados/ListadoDeudaSocios"
import ListadoCantSociosMes from "../pages/Listados/ListadoCantSociosMes"
import ListadoIngresoEgreso from "../pages/Listados/ListadoIngresoEgreso"
import ListadoEmpresas from "../pages/Listados/ListadoEmpresas"
import ListadoCobradores from "../pages/Listados/ListadoCobradores"
import ListadoPlanillaCobranza from "../pages/Listados/ListadoPlanillaCobranza"
import ListadoIngresos from "../pages/Listados/ListadoIngresos"
import ListadoEgresos from "../pages/Listados/ListadoEgresos"
import ListadoDeudaEmpresa from "../pages/Listados/ListadoDeudaEmpresa"
import ListadoFamiliaresACargo from "../pages/Listados/ListadoFamiliaresACargo"
import ListadoCobranzasEmitidas from "../pages/Listados/ListadoCobranzasEmitidas"
import ListadoAutorizaciones from "../pages/Listados/ListadoAutorizaciones"


import ErrorPage from "../extras/ErrorPage";
import FinDeTareas from "../pages/FinDeTareas/FinDeTareas";
import { useState } from "react";



const Routes = ( ) => {


  const { token } = useAuth();
  

  const [isLoggedIn, setIsLoggedIn] = useState(false);
  
  
  //console.log(isLoggedIn);
  
  // Define public routes accessible to all users
  const routesForPublic = [
    {
      path: "/publico",
      element: <div>Publico</div>,
    },
    {
      path: "*",
      element: <ErrorPage />,
    },
  ];

  // Define routes accessible only to authenticated users
  const routesForAuthenticatedOnly = [
    {
      path: "/",
      element: <ProtectedRoute/>, // Wrap the component in ProtectedRoute
      children: [
        // HOME
        {
          path: "/",
          element: <div></div>,
        },
        // ARCHIVOS
        {
          path: "/archivos/socios",
          element: <Socios />,
        },
        {
          path: "/archivos/empresas",
          element: <Empresas />,
        },
        {
          path: "/archivos/egresos",
          element: <Egresos />,
        },
        {
          path: "/archivos/ingresos",
          element: <Ingresos />,
        },
        {
          path: "/archivos/cobradores",
          element: <Cobradores />,
        },
        {
          path: "/archivos/practicas",
          element: <Practicas />,
        },
        {
          path: "/archivos/autorizaciones",
          element: <Autorizaciones />,
        },

        // LISTADOS
        {
          path: "/listados/listadosocios",
          element: <ListadoSocios />,
        },
        {
          path: "/listados/listadodeudassocios",
          element: <ListadoDeudaSocios />,
        },
        {
          path: "/listados/listadocantsociosmes",
          element: <ListadoCantSociosMes />,
        },
        {
          path: "/listados/listadoingresosegresos",
          element: <ListadoIngresoEgreso />,
        },
        {
          path: "/listados/listadoempresas",
          element: <ListadoEmpresas />,
        },
        {
          path: "/listados/listadocobradores",
          element: <ListadoCobradores />,
        },
        {
          path: "/listados/listadoplanillacobranzas",
          element: <ListadoPlanillaCobranza />,
        },
        {
          path: "/listados/listadoingresos",
          element: <ListadoIngresos />,
        },
        {
          path: "/listados/listadoegresos",
          element: <ListadoEgresos />,
        },
        {
          path: "/listados/listadodeudaempresa",
          element: <ListadoDeudaEmpresa />,
        },
        {
          path: "/listados/listadofamiliaresacargo",
          element: <ListadoFamiliaresACargo />,
        },
        {
          path: "/listados/listadocobranzasemitidas",
          element: <ListadoCobranzasEmitidas />,
        },
        {
          path: "/listados/listadoautorizaciones",
          element: <ListadoAutorizaciones />,
        },

        // FIN DE TAREAS
        {
          path: "findetareas/findetareas",
          element: <FinDeTareas />,
        },

        // SALIR
        {
          path: "/logout",
          element: <Logout/>,
        },
      ],
    },
  ];


  // Define routes accessible only to non-authenticated users
  const routesForNotAuthenticatedOnly = [
    {
      path: "/",
      element: <Login/>,
    },
    {
      path: "/login",
      element: <Login/>,
    },
  ];

  // Combine and conditionally include routes based on authentication status
  const router = createBrowserRouter([
    ...routesForPublic,
    //...(!isLoggedIn ? routesForNotAuthenticatedOnly : []),
    ...(!token ? routesForNotAuthenticatedOnly : []),
    ...routesForAuthenticatedOnly,
  ]);

  // Provide the router configuration using RouterProvider
  return <RouterProvider router={router} />;
};

export default Routes;