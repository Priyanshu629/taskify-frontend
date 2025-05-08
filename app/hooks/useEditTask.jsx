"use client";

import { useFormik } from "formik";
import { addTaskValidator } from "../utils/validations/addTask";

import { useGlobal } from "../context/global";
import toast from "react-hot-toast";
import { getTask } from "../utils/utility functions/getTask";
import { useEffect, useState } from "react";
export default function useEditTask() {
    const { setEditTaskDialog, fetchTask, editTaskId } = useGlobal()
    const [task, setTask] = useState({})

    const handleGetTask = async () => {
        let response = await getTask(editTaskId)
        if (response.ok) {
            let data = await response.json()
            setTask(data?.task)
        }
    }

    useEffect(() => {
        if (!editTaskId) return
        handleGetTask()
    }, [editTaskId])

    const formatDateForInput = (dateString) => {
        if (!dateString) return "";
        const date = new Date(dateString);
        return date.toISOString().split("T")[0];
    };






    const initialValues = {
        title: task?.title || "",
        description: task?.description || "",
        dueDate: formatDateForInput(task?.dueDate),
        priority: task?.priority || "",
        status: task?.status || ""
    };




    const { handleSubmit, handleChange, handleBlur, errors, touched, values, isSubmitting, setFieldValue } =
        useFormik({
            initialValues,
            enableReinitialize: true,
            validationSchema: addTaskValidator,
            validateOnBlur: true,
            validateOnChange: true,

            onSubmit: async (values) => {

                try {
                    let response = await fetch(`http://localhost:4000/api/v1/task/updateTask/${editTaskId}`, {
                        method: "PUT",
                        headers: {
                            "Content-Type": "application/json"
                        },
                        body: JSON.stringify(values),
                        credentials: "include"
                    })
                    let data = await response.json()
                    if (response.ok) {
                        toast.success(data.message, { duration: 3000 })



                        await fetchTask()

                        setEditTaskDialog(false)

                    } else {
                        toast.error(data.message, { duration: 3000 })
                    }
                } catch (error) {
                    return error
                }


            }
        })

    return { handleSubmit, handleChange, handleBlur, errors, touched, values, isSubmitting, setFieldValue }
}
