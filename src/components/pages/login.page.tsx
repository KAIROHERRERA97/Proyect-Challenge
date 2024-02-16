import { FormEvent, useState } from "react";
import { Button } from "../ui/button";
import { useToast } from "@/components/ui/use-toast";
import { Formik } from "formik";
import { loginSchema } from "@/models/login.model";
import { useNavigate } from "react-router-dom";

function LoginPage() {
  const { toast } = useToast();

  const navigate = useNavigate();

  const [data, setData] = useState<{ email: string; password: string }>({
    email: "",
    password: "",
  });

  function handleSubmit(values: any) {
    const response = fetchLogin(values);
    if (!response) {
      toast({
        variant: "destructive",
        title: "OH!🤯",
        description: "Error en la autenticación.",
        duration: 2000,
      });
    } else {
      toast({
        title: "OK!🫡",
        description: "Autenticación correcta, redirigiendo...",
        duration: 2000,
      });

      setTimeout(() => {
        navigate("/");
      }, 2000);
    }
  }

  function fetchLogin(values: any) {
    if (values.email === "admin@gmail.com" && values.password === "admin") {
      return true;
    } else {
      return false;
    }
  }

  return (
    <div className="w-full h-svh flex justify-center bg-blue-300">
      <div className="mt-40">
        <h1
          className=" text-3xl font-bold
      text-cyan-1000"
        >
          Sistema de Carga de Datos
        </h1>
        <div className="mx-8 mt-14 ">
          <Formik
            initialValues={data}
            validationSchema={loginSchema}
            onSubmit={(values) => {
              handleSubmit(values);
            }}
          >
            {({
              values,
              errors,
              touched,
              handleChange,
              handleBlur,
              handleSubmit,
              isSubmitting,
              isValidating,
              /* and other goodies */
            }) => (
              <form onSubmit={handleSubmit} className="gap-4 flex flex-col">
                <div className="flex flex-col gap-2.5">
                  <label htmlFor="" className="font-semibold">
                    Email
                  </label>
                  <input
                    autoComplete="off"
                    type="email"
                    name="email"
                    onChange={handleChange}
                    onBlur={handleBlur}
                    value={values.email}
                    className="px-2 py-1 border rounded-md border-amber-600 outline-none shadow-md"
                  ></input>
                  <span className="text-red-500 font-semibold">
                    {errors.email && touched.email && errors.email}
                  </span>
                </div>
                <div className="flex flex-col gap-2.5">
                  <label htmlFor="" className="font-semibold">
                    Password
                  </label>
                  <input
                    autoComplete="off"
                    type="password"
                    name="password"
                    onChange={handleChange}
                    onBlur={handleBlur}
                    value={values.password}
                    className="px-2 py-1 border rounded-md border-amber-600 outline-none shadow-md"
                  ></input>
                  <span className="text-red-500 font-semibold">
                    {errors.password && touched.password && errors.password}
                  </span>
                </div>

                <div className="flex flex-col gap-2.5">
                  <Button
                    type="submit"
                    disabled={isSubmitting}
                    className="bg-cyan-900 border border-cyan-900 text-amber-400 shadow-md"
                  >
                    Login
                  </Button>
                </div>
              </form>
            )}
          </Formik>
        </div>
      </div>
    </div>
  );
}

export default LoginPage;
