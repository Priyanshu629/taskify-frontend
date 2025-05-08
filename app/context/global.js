"use client";

import { useContext, createContext, useState, useEffect } from "react";

const globalContext = createContext();

export const GlobalProvider = ({ children }) => {
  const [taskDialog, setTaskDialog] = useState(false);
  const [editTaskDialog, setEditTaskDialog] = useState(false);
  const [editTaskId, setEditTaskId] = useState(null);
  const [isLogin, setIsLogin] = useState(false);
  const [userEmail, setUserEmail] = useState(null);
  const [loginUserId, setLoginUserId] = useState(null);
  const [tasks, setTasks] = useState([]);
  const [filteredTasks, setFilteredTasks] = useState([]);
  const [searchText, setSearchText] = useState("");
  const [filterValue, setFilterValue] = useState({
    status: "",
    priority: "",
    dueDate: "",
    overDue: false,
  });

  const fetchTask = async () => {
    try {
      let response = await fetch("http://localhost:4000/api/v1/task/getTasks", {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
        credentials: "include",
      });
      if (response.ok) {
        let data = await response.json();
        let allTasks = data?.allTasks;
        setTasks(allTasks);
      }
    } catch (error) {
      return error;
    }
  };

  useEffect(() => {
    if (!isLogin) return;

    fetchTask();
  }, [isLogin]);

  useEffect(() => {
    if (!tasks) return;

    let result = tasks;
    if (searchText) {
      result = result.filter((task) =>
        task.title.toLowerCase().includes(searchText.toLowerCase())
      );
    }
    if (filterValue?.status) {
      result = result.filter((task) => task?.status === filterValue?.status);
    }

    if (filterValue?.priority) {
      result = result.filter(
        (task) => task?.priority === filterValue?.priority
      );
    }

    if (filterValue?.dueDate) {
      result = result.filter((task) => task?.dueDate === filterValue?.dueDate);
    }
    if (filterValue?.overDue) {
      result = result.filter((task) => {
        let due = new Date(task?.dueDate);
        let today = new Date();
        return today > due;
      });
    }

    setFilteredTasks(result);
  }, [searchText, filterValue, tasks]);

  const checkCookie = async () => {
    try {
      const response = await fetch("http://localhost:4000/api/v1/check", {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
        credentials: "include",
      });
      const data = await response.json();

      if (response.status === 200) {
        setIsLogin(true);
        setUserEmail(data?.userEmail);
        setLoginUserId(data?.userId);
      } else {
        setIsLogin(false);
        setUserEmail(null);
        setLoginUserId(null);
      }
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    checkCookie();
  }, [isLogin]);

  return (
    <globalContext.Provider
      value={{
        isLogin,
        userEmail,
        setIsLogin,
        setLoginUserId,
        setUserEmail,
        setFilterValue,
        searchText,
        setSearchText,
        filteredTasks,
        taskDialog,
        setTaskDialog,
        tasks,
        fetchTask,
        loginUserId,
        editTaskId,
        setEditTaskId,
        setTasks,
        editTaskDialog,
        setEditTaskDialog,
      }}
    >
      {children}
    </globalContext.Provider>
  );
};

export const useGlobal = () => useContext(globalContext);
