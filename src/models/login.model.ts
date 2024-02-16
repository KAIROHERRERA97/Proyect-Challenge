import { object, string, number } from "yup";

export const loginSchema = object({
  email: string().required("the field email is required").email("the field must be a email"),
  password: string().required(),
});
