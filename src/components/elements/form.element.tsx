import { useState } from "react";
import { Button } from "../ui/button";
import { useToast } from "../ui/use-toast";

function FormElement({ setSection }: { setSection: any }) {
  // const [file, setFile] = useState("");

  const [selectedFile, setSelectedFile] = useState<File | null>(null);

  const { toast } = useToast();

  function handleSubmit() {
    if (selectedFile) {
      toast({
        title: "Cargando...",
        description: "Estamos validando el archivo 🗃️",
        duration: 2000,
      });
      setTimeout(() => {
        setSection("detail");
      }, 2000);
    } else {
      toast({
        variant: "destructive",
        title: "Hey !",
        description: "Primero selecciona un archivo 📂",
        duration: 2000,
      });
      setTimeout(() => {
        setSection("upload");
      }, 2000);
    }
  }

  return (
    <div className=" mx-10 border bg-amber-100 border-amber-600 shadow-xl rounded-xl flex flex-col gap-14 items-center p-60 mt-10">
      <label htmlFor="" className="font-bold text-xl text-cyan-900">
        Selecciona un Archivo:
      </label>
      <input
        onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
          setSelectedFile(e.target.files ? e.target.files[0] : null)
        }
        accept=".xlsx, .csv"
        type="file"
        className="px-2 py-1 border rounded-md border-red-600 outline-none shadow-md font-semibold"
      />
      <Button
        className="bg-cyan-900 border  text-amber-400 border-cyan-9000 shadow-md"
        onClick={handleSubmit}
      >
        Upload File
      </Button>
    </div>
  );
}

export default FormElement;
