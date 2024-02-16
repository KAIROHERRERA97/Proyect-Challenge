import { Button } from "../ui/button";
import { Alert, AlertDescription } from "@/components/ui/alert";
import { useToast } from "../ui/use-toast";
import { useState } from "react";

function DetailElement({ setSection }: { setSection: any }) {
  const { toast } = useToast();

  function handleChange() {
    toast({
      description: "Redirigiendo... ⌛",
      duration: 1000,
    });
    setTimeout(() => {
      setSection("upload");
    }, 1000);
  }

  function showToast() {
    toast({
      variant: "destructive",
      title: "Error",
      description: "Información brindada no válida ✖️",
      duration: 1000,
    });
  }

  const [showInfo, setShowInfo] = useState(true);

  return (
    <div className=" mx-10 border bg-amber-100 border-amber-500 shadow-xl rounded-xl flex flex-col gap-14 items-center w-[80%] h-[70%] mt-10 pt-10 pl-20 pr-20">
      <header className="flex w-full justify-between items-center gap-[30%]">
        <div className="w-[90%] flex flex-col items-center">
          {showInfo ? (
            <Alert className="text-md border-green-600 text-green-600 shadow-md w-fit">
              <AlertDescription className="text-lg">
                ✅ records uploades succefuly
                <span
                  onClick={(e) => setShowInfo(false)}
                  role="button"
                  className="text-sm pl-20"
                >
                  {" "}
                  ✖️{" "}
                </span>
              </AlertDescription>
            </Alert>
          ) : (
            ""
          )}
        </div>
        <div>
          <Button
            className="bg-cyan-900 border shadow-md  text-amber-400 border-cyan-900"
            onClick={handleChange}
          >
            New File
          </Button>
        </div>
      </header>
      <div>
        <h4>
          The (2) records listen below encountered errors. Please rectify these
          issues and retry.
        </h4>
      </div>
      <table className="w-full" cellPadding={8}>
        <thead>
          <tr>
            <td className="font-semibold text-cyan-900">Row</td>
            <td className="font-semibold text-cyan-900">Name</td>
            <td className="font-semibold text-cyan-900">Email</td>
            <td className="font-semibold text-cyan-900">Age</td>
            <td></td>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td valign="top" className="font-semibold text-cyan-900">
              4
            </td>
            <td valign="top">
              <input
                className="w-full px-2 py-1 rounded-md border outline-none shadow-md"
                type="text"
              />
            </td>
            <td valign="top">
              <div className="flex flex-col">
                <input
                  className="px-2 py-1 rounded-md border border-red-500 outline-none shadow-md"
                  type="text"
                />
                <span className="text-red-500 text-sm">
                  El formato email no es valido
                </span>
              </div>
            </td>
            <td valign="top">
              <input
                className="px-2 w-20 py-1 rounded-md border outline-none shadow-md"
                type="text"
              />
            </td>
            <td valign="top">
              <Button
                className="bg-cyan-900 border border-cyan-900 text-amber-400 shadow-md"
                onClick={showToast}
              >
                Retry
              </Button>
            </td>
          </tr>
          <tr>
            <td valign="top" className="font-semibold text-cyan-900">
              4
            </td>
            <td valign="top">
              <input
                className="w-full px-2 py-1 rounded-md border outline-none shadow-md"
                type="text"
              />
            </td>
            <td valign="top">
              <div className="flex flex-col">
                <input
                  className="px-2 py-1 rounded-md border border-red-500 outline-none shadow-md"
                  type="text"
                />
                <span className="text-red-500 text-sm ">
                  El formato email no es valido
                </span>
              </div>
            </td>
            <td valign="top">
              <input
                className="px-2 w-20 py-1 rounded-md border outline-none shadow-md"
                type="text"
              />
            </td>
            <td valign="top">
              <Button
                className="bg-cyan-900 border   text-amber-400 shadow-md border-cyan-900"
                onClick={showToast}
              >
                Retry
              </Button>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}

export default DetailElement;
