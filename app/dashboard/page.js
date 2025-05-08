"use client";
import React, { useEffect, useState } from "react";
import { useGlobal } from "../context/global";
import { useRouter } from "next/navigation";
import Filter from "../components/Filter";
import { Input } from "@/components/ui/input";
import TaskCard from "../components/TaskCard";
import Loader from "../components/Loader";
import AddTask from "../components/add task/AddTask";

function Dashboard() {
  const {
    isLogin,
    filteredTasks,
    setSearchText,
    searchText,
    setFilterValue,
    setTaskDialog,
    tasks,
    userEmail,
  } = useGlobal();
  const router = useRouter();

  let taskLength = tasks?.length;

  useEffect(() => {
    if (!isLogin) {
      router.replace("/");
      return;
    }
  }, [router, isLogin]);

  if (!isLogin) {
    return (
      <div className="w-full min-h-screen flex items-center justify-center">
        <Loader />
      </div>
    );
  }

  return (
    <main className="w-[90%] mx-auto pt-[100px] ">
      {userEmail && (
        <p className="text-[15px] font-bold text-pink-700 text-center">
          Hello , {userEmail}
        </p>
      )}
      <div className="w-[100%] mx-auto  flex justify-center items-center max-lg:flex-wrap gap-[40px]   p-4">
        <Input
          type={"text"}
          placeholder="Search"
          className=" w-full border-2"
          value={searchText}
          onChange={(e) => setSearchText(e.target.value)}
        />

        <div className="flex gap-[10px] items-center flex-wrap justify-center  w-full">
          <span
            onClick={() =>
              setFilterValue({
                status: "",
                priority: "",
                duedate: "",
                overDue: false,
              })
            }
            className=" cursor-pointer border-2 border-black p-2 rounded-md font-semibold "
          >
            Clear Filters
          </span>
          <Filter />
        </div>
      </div>

      {!!taskLength && (
        <p className="text-center my-[10px]">
          Showing {filteredTasks?.length} of {taskLength}
        </p>
      )}
      <div className="w-full flex items-center justify-center my-[10px]">
        <button
          onClick={() => setTaskDialog(true)}
          className="bg-violet-500 text-white p-2 hover:border-green-500 border-2 border-pink-700 cursor-pointer rounded-md"
        >
          Add New Task +
        </button>
      </div>
      <AddTask />
      <section className="w-[100%]  flex justify-center items-center gap-[20px] p-2 flex-wrap">
        {filteredTasks?.length !== 0 ? (
          filteredTasks.map((task) => {
            return <TaskCard key={task.title} {...task} />;
          })
        ) : (
          <p>No Task Found</p>
        )}
      </section>
    </main>
  );
}

export default Dashboard;
