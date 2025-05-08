import * as Yup from "yup";

export const addTaskValidator = Yup.object({
  title: Yup.string()
    .min(10, "Aleast 10 chracters long")
    .required("Title is required"),
  description: Yup.string()
    .min(20, "Atleast 20 characters long")
    .required("description is required"),
  dueDate: Yup.string()
    .required("Date is required"),
  priority : Yup.string().required("Priority is required"),
  status : Yup.string()
});
