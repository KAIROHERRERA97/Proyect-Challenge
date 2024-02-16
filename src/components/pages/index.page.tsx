import { useState } from "react";
import FormElement from "../elements/form.element";
import DetailElement from "../elements/detail.element";

function IndexPage() {
  const [section, setSection] = useState("upload");

  if (section === "upload") {
    return (
      <div className="w-full h-svh flex flex-col bg-blue-300 items-center">
        <h1
          className=" text-4xl font-bold
          text-cyan-1000 mt-20 text-left px-40 w-full"
        >
          Sistema de Carga de Datos
        </h1>
        <FormElement setSection={setSection}></FormElement>
      </div>
    );
  } else if (section === "detail") {
    return ( <div className="w-full h-svh flex flex-col bg-blue-300 items-center">
              <h1
          className=" text-4xl font-bold
      text-cyan-1000 mt-20 text-left px-40 w-full"
        >
          Sistema de Carga de Datos
        </h1>
        <DetailElement setSection={setSection}></DetailElement>
      </div>)
  }
}

export default IndexPage;
