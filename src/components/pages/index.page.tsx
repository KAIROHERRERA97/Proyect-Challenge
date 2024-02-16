import { useState } from "react";
import FormElement from "../elements/form.element";
import DetailElement from "../elements/detail.element";
import { Button } from "../ui/button";
import { useNavigate } from "react-router-dom";

function IndexPage() {
  
  const navigate = useNavigate();
  const [section, setSection] = useState("upload");
  // FUNCION PARA IR AL LOGIN
  function handleLogout() {
    window.localStorage.clear();
    navigate("/login");
  }
  // RENDERIZAR LA SECCION UPLOAD O DETAIL
  if (section === "upload") {
    return (
      <div className="w-full h-svh flex flex-col bg-blue-300 items-center">
        <header className="w-full flex justify-between">      
        <h1
          className=" text-4xl font-bold
          text-cyan-1000 mt-20 text-left px-40 w-full"
        >
          Sistema de Carga de Datos
        </h1>
        <Button
            onClick={handleLogout}
            className="bg-cyan-900 m-5 border   text-amber-400 shadow-md border-cyan-900"
          >
            Logout
          </Button>
        </header>
        <FormElement setSection={setSection}></FormElement>
      </div>
    );
  } else if (section === "detail") {
    return (
      <div className="w-full h-svh flex flex-col bg-blue-300 items-center">
        <header className="w-full flex justify-between">      
        <h1
          className=" text-4xl font-bold
          text-cyan-1000 mt-20 text-left px-40 w-full"
        >
          Sistema de Carga de Datos
        </h1>
        <Button
            onClick={handleLogout}
            className="bg-cyan-900 m-5 border   text-amber-400 shadow-md border-cyan-900"
          >
            Logout
          </Button>
        </header>
        <DetailElement setSection={setSection}></DetailElement>
      </div>
    );
  }
}

export default IndexPage;
