import { useState } from "react";
import FormElement from "../elements/form.element";
import DetailElement from "../elements/detail.element";

function IndexPage() {
  const [section, setSection] = useState("detail");

  if (section === "upload") {
    return (
      <div className="w-full h-svh flex flex-col bg-green-100 items-center">
        <h1
          className=" text-4xl font-bold
      text-red-600 mt-20 text-left px-40 w-full"
        >
          Sistema de Carga de Datos
        </h1>
        <FormElement></FormElement>
      </div>
    );
  } else if (section === "detail") {
    return ( <div className="w-full h-svh flex flex-col bg-green-100 items-center">
              <h1
          className=" text-4xl font-bold
      text-red-600 mt-20 text-left px-40 w-full"
        >
          Sistema de Carga de Datos
        </h1>
        <DetailElement></DetailElement>
      </div>)
  }
}

export default IndexPage;
