import React from "react";
import { Button } from "../ui/button";
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";

function DetailElement() {
  return (
    <div className=" mx-10 border bg-amber-100 border-amber-600 shadow-xl rounded-xl flex flex-col gap-14 items-center w-[80%] h-[70%] mt-10 pt-10 pl-20 pr-20">
      <header className="flex w-full justify-between items-center gap-[40%]">
        <div className="w-full flex justify-end">
          <Alert className="w-fit text-md border-green-600 text-green-600">
            <AlertDescription>
              You can add components and dependencies to your app using the cli.
            </AlertDescription>
          </Alert>
        </div>
        <div>
          <Button className="bg-cyan-900 border border-red-800 shadow-md">
            New File
          </Button>
        </div>
      </header>
      <div>
        <h4> 
          exrctvybuinhugyftdsrasdtfyguhgyftdrsghjghfytdfyghjghfertgyuytrtyuy
        </h4>
      </div>
      <table>
        
      </table>
    </div>
  );
}

export default DetailElement;

{
  /* <label htmlFor='' className='font-bold text-xl text-cyan-900'> Selecciona un Archivo:</label>
      <input type='file' className="px-2 py-1 border rounded-md border-red-600 outline-none shadow-md font-semibold"/>
       */
}
