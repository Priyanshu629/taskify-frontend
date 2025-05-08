"use client";

import { useFormik } from "formik";
import { addTaskValidator } from "../utils/validations/addTask";

import { useGlobal } from "../context/global";
import toast from "react-hot-toast";
export default function useAddTask() {
    const { setTaskDialog, fetchTask,userEmail } = useGlobal()
   
    const initialValues = {
        title: "",
        description: "",
        dueDate: "",
        priority: "",
        status: "To Do"
    };

    const { handleSubmit, handleChange, handleBlur, errors, touched, values, isSubmitting,  setFieldValue } =
        useFormik({
            initialValues,
            validationSchema: addTaskValidator,
            validateOnBlur: true,
            validateOnChange: true,

            onSubmit: async (values) => {

                try {
                    let response = await fetch(`${process.env.NEXT_PUBLIC_API_BASE_URL}api/v1/task/addTask`, {
                        method: "POST",
                        headers: {
                            "Content-Type": "application/json"
                        },
                        body: JSON.stringify({...values,userEmail}),
                        credentials: "include"
                    })
                    let data = await response.json()
                    if (response.ok) {
                        toast.success(data.message,{duration:3000})

                       await fetchTask()

                       setTaskDialog(false)

                    } else{
                        toast.error(data.message,{duration:3000})
                    }
                } catch (error) {
                   return error
                }


            }
        })

    return { handleSubmit, handleChange, handleBlur, errors, touched, values, isSubmitting, setFieldValue }
}
