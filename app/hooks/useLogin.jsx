"use client";

import { useFormik } from "formik";
import { loginValidator } from "../utils/validations/login";
import { useGlobal } from "../context/global";
import { useRouter } from "next/navigation";
import toast from "react-hot-toast";

export default function useLogin() {

    const { setIsLogin} = useGlobal()
    const router = useRouter()

    const initialValues = {
        email: "",
        password: "",
    };

    const { handleSubmit, handleChange, handleBlur, errors, touched, values, isSubmitting, status, setStatus } =
        useFormik({
            initialValues,
            validationSchema: loginValidator,
            validateOnBlur: true,
            validateOnChange: true,

            onSubmit: async (values) => {

                try {
                    let response = await fetch(`${process.env.NEXT_PUBLIC_API_BASE_URL}api/v1/user/login`, {
                        method: "POST",
                        headers: {
                            "Content-Type": "application/json",

                        },
                        body: JSON.stringify(values),
                        credentials: "include"
                    })
                    let data = await response.json()

                    if (response.ok) {

                        toast.success(data.message, { duration: 3000 })
                        router.replace("/dashboard")
                        setIsLogin(true)
                       
                    }
                    else {
                        toast.error(data.message, { duration: 3000 })
                    }
                } catch (error) {
                    return error
                }

            },
        });

    return { handleSubmit, handleChange, handleBlur, errors, touched, values, isSubmitting, status, setStatus }
}
