"use client";

import React, { useEffect } from "react";
import useCheck from "../../hooks/useCheck";
import useEditTask from "@/app/hooks/useEditTask";
import AddEditFormFields from "./EditTaskFormFields";

function EditTaskForm() {
    useCheck();
    const {
        handleSubmit,
        handleChange,
        handleBlur,
        errors,
        touched,
        values,
        isSubmitting,
        setFieldValue
    } = useEditTask();




    return (


        <form
            onSubmit={handleSubmit}
            className="max-w-[400px] w-full  rounded-md mx-auto  p-4 shadow-md shadow-purple-200 flex flex-col gap-[25px]  overflow-y-scroll max-h-[600px]">


            {/* name */}
            <div className="flex flex-col gap-[15px]">
                <label htmlFor="title" className="font-bold text-lg">
                    Title
                </label>
                <input
                    value={values.title}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    type="text"
                    name="title"
                    id="title"
                    className={`w-full p-2 border-[2px]  ${touched.title && errors.title
                        ? "border-red-500"
                        : "border-green-300"
                        }`}
                    placeholder="Enter Title.."
                />
                {touched.title && errors.title && (
                    <div style={{ color: "red", fontStyle: "italic" }}>
                        {errors.title}
                    </div>
                )}
            </div>

            {/* email */}
            <div className="flex flex-col gap-[15px]">
                <label htmlFor="description" className="font-bold text-lg">
                    Description
                </label>
                <input
                    value={values.description}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    type="description"
                    name="description"
                    id="description"
                    className={`w-full p-2 border-[2px]  ${touched.description && errors.description
                        ? "border-red-500"
                        : "border-green-300"
                        }`}
                    placeholder="Enter Description.."
                />
                {touched.description && errors.description && (
                    <div style={{ color: "red", fontStyle: "italic" }}>
                        {errors.description}
                    </div>
                )}
            </div>


            <AddEditFormFields values={values} errors={errors} touched={touched} handleChange={handleChange} handleBlur={handleBlur} setFieldValue={setFieldValue} />

            <div className="w-full">
                <button
                    type="submit"
                    className="p-2 rounded-md border-2 w-[100%] bg-blue-600 border-white font-semibold text-[17px] text-white cursor-pointer hover:text-black"
                >
                    {isSubmitting ? "Updating.." : "Update"}
                </button>
            </div>

        </form>

    );
}

export default EditTaskForm;
