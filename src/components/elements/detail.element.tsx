import { Button } from "../ui/button";
import { Alert, AlertDescription } from "@/components/ui/alert";

function DetailElement() {
  return (
    <div className=" mx-10 border bg-amber-100 border-amber-500 shadow-xl rounded-xl flex flex-col gap-14 items-center w-[80%] h-[70%] mt-10 pt-10 pl-20 pr-20">
      <header className="flex w-full justify-between items-center gap-[30%]">
        <div className="w-full flex justify-end">
          <Alert className="w-fit text-md border-green-600 text-green-600 shadow-md">
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
      <table className="w-full" cellPadding={8}>
        <tr>
          <td className="font-semibold text-cyan-900">Row</td>
          <td className="font-semibold text-cyan-900">Name</td>
          <td className="font-semibold text-cyan-900">Email</td>
          <td className="font-semibold text-cyan-900">Age</td>
          <td></td>
        </tr>
        <tr>
          <td valign="top" className="font-semibold text-cyan-900">4</td>
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
            <Button className="bg-cyan-900 border border-amber-800 shadow-md" 
            // onClick={showToast}
            >Retry</Button>
          </td>
        </tr>
        <tr>
          <td valign="top" className="font-semibold text-cyan-900">4</td>
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
            <Button className="bg-cyan-900 border border-amber-800 shadow-md" 
            // onClick={showToast}
            >Retry</Button>
          </td>
        </tr>
      </table>
    </div>
  );
}

export default DetailElement;


