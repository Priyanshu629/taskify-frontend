"use client";

import React, { useEffect } from "react";
import useRegister from "../hooks/useRegister";
import Link from "next/link";
import useCheck from "../hooks/useCheck";

function Register() {
  useCheck();
  const {
    handleSubmit,
    handleChange,
    handleBlur,
    errors,
    touched,
    values,
    isSubmitting,
   
  } = useRegister();

 

  return (
    <main className="w-full p-2 mt-[100px]">
      <h1 className="text-2xl text-center my-[20px]  font-bold">
        Register Yourself 😀
      </h1>

      <form
        onSubmit={handleSubmit}
        className="max-w-[400px] w-full border-[2px] rounded-md mx-auto bg-white p-4 shadow-md shadow-purple-200 flex flex-col gap-[25px] font-mono"
      >
       
        {/* name */}
        <div className="flex flex-col gap-[15px]">
          <label htmlFor="name" className="font-bold text-lg">
            Name
          </label>
          <input
            value={values.name}
            onChange={handleChange}
            onBlur={handleBlur}
            type="text"
            name="name"
            id="name"
            className={`w-full p-2 border-[2px]  ${
              touched.name && errors.name
                ? "border-red-500"
                : "border-green-300"
            }`}
            placeholder="Enter your name.."
          />
          {touched.name && errors.name && (
            <div style={{ color: "red", fontStyle: "italic" }}>
              {errors.name}
            </div>
          )}
        </div>

        {/* email */}
        <div className="flex flex-col gap-[15px]">
          <label htmlFor="email" className="font-bold text-lg">
            Email
          </label>
          <input
            value={values.email}
            onChange={handleChange}
            onBlur={handleBlur}
            type="email"
            name="email"
            id="email"
            className={`w-full p-2 border-[2px]  ${
              touched.email && errors.email
                ? "border-red-500"
                : "border-green-300"
            }`}
            placeholder="Enter your email.."
          />
          {touched.email && errors.email && (
            <div style={{ color: "red", fontStyle: "italic" }}>
              {errors.email}
            </div>
          )}
        </div>

        {/* password */}
        <div className="flex flex-col gap-[15px]">
          <label htmlFor="password" className="font-bold text-lg">
            Password
          </label>
          <input
            value={values.password}
            onChange={handleChange}
            onBlur={handleBlur}
            type="password"
            name="password"
            id="password"
            className={`w-full p-2 border-[2px]  ${
              touched.password && errors.password
                ? "border-red-500"
                : "border-green-300"
            }`}
            placeholder="Enter your password.."
          />
          {touched.password && errors.password && (
            <div style={{ color: "red", fontStyle: "italic" }}>
              {errors.password}
            </div>
          )}
        </div>
        <div className="w-full">
          <button
            type="submit"
            className="p-2 rounded-md border-2 w-[100%] bg-blue-600 border-white font-semibold text-[17px] text-white cursor-pointer hover:text-black"
          >
            {isSubmitting ? "Registering..." : "Register"}
          </button>
        </div>
        <div className="w-full">
          <p>
            Already have an account ? <Link href={"/login"}>Login</Link>
          </p>
        </div>
      </form>
    </main>
  );
}

export default Register;
