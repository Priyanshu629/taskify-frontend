"use client";

import { useFormik } from "formik";
import { registerValidator } from "../utils/validations/register";
import { useRouter } from "next/navigation";
import toast from "react-hot-toast";
export default function useRegister() {
    const router = useRouter()
    const initialValues = {
        name: "",
        email: "",
        password: "",
    };

    const { handleSubmit, handleChange, handleBlur, errors, touched, values, isSubmitting } =
        useFormik({
            initialValues,
            validationSchema: registerValidator,
            validateOnBlur: true,
            validateOnChange: true,

            onSubmit: async (values) => {

                try {
                    let response = await fetch("http://localhost:4000/api/v1/user/register", {
                        method: "POST",
                        headers: {
                            "Content-Type": "application/json",

                        },
                        body: JSON.stringify(values),
                    })
                    let data = await response.json()

                  
                    if (response.ok) {
                        toast.success(data.message,{duration:3000})
                        router.push("/login")
                        

                    }else{
                        toast.error(data.message,{duration:3000})
                    }
                } catch (error) {
                    return error
                }

            },
        });

    return { handleSubmit, handleChange, handleBlur, errors, touched, values, isSubmitting}
}
