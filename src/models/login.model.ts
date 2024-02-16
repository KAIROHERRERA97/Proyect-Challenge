import { object, string } from "yup";

// USO DE LIBRERIA YUP (ESTRUCTURA DEL SCHEMA)
export const loginSchema = object({
  email: string().required("the field email is required").email("the field must be a email"),
  password: string().required(),
});
