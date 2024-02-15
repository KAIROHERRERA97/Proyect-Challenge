import React, { FormEvent, useState } from "react";
import { Button } from "../ui/button";
import { useToast } from "@/components/ui/use-toast";

function LoginPage() {
  const { toast } = useToast();

  const [data, setData] = useState<{ email: string; password: string }>({
    email: "",
    password: "",
  });

  function handleSubmit(e: FormEvent) {
    e.preventDefault();
    if (data.email.length && data.password.length) {
      const response = fetchLogin();
      if (!response) {
        toast({
          variant: "destructive",
          title: "OH!🤯",
          description: "Error en la autenticación.",
        });
      } else {
        toast({
          title: "OK!🫡",
          description: "Autenticación correcta, redirigiendo...",
        });
      }
    }
  }

  function fetchLogin() {
    if (data.email === "admin@gmail.com" && data.password === "admin") {
      return true;
    } else {
      return false;
    }
  }

  return (
    <div className="w-full h-svh flex justify-center bg-green-100">
      <div className="mt-40">
        <h1 className=" text-3xl font-bold
      text-red-600">Sistema de Carga de Datos</h1>
        <div className="mx-8 mt-14 ">
          <form
            action=""
            className="gap-4 flex flex-col"
            onSubmit={handleSubmit}
          >
            <div className="flex flex-col gap-2.5">
              <label htmlFor="">Email</label>
              <input
                type="text"
                onChange={(e) => setData({ ...data, email: e.target.value })}
                className="px-2 py-1 border rounded-md border-amber-600 outline-none shadow-md"
              ></input>
            </div>
            <div className="flex flex-col gap-2.5">
              <label htmlFor="">Password</label>
              <input
                type="password"
                onChange={(e) => setData({ ...data, password: e.target.value })}
                className="px-2 py-1 border rounded-md border-amber-600 outline-none shadow-md"
              ></input>
            </div>
            <div className="flex flex-col gap-2.5">
              <Button className="bg-cyan-900 border border-amber-600 text-amber-400 shadow-md">Login</Button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default LoginPage;
