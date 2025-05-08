"use client";

import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { useGlobal } from "../context/global";
import { useState } from "react";
import DeleteTask from "./delete task/DeleteTask";
import EditTask from "./edit task/EditTask";
import GetUsers from "./GetUsers";
import { getUsers } from "../utils/utility functions/getUsers";
import { unAssignTask } from "../utils/utility functions/unAssignTask";
import toast from "react-hot-toast";




const TaskCard = ({
  _id,
  title,
  description,
  priority,
  status,
  dueDate,
  userEmail,
  assignedTo
}) => {
  const { userEmail: loggedUserEmail, setEditTaskId, setEditTaskDialog, fetchTask } = useGlobal()

  const [deleteTaskDialog, setDeleteTaskDialog] = useState(false)
  const [getUsersDialog, setGetUsersDialog] = useState(false)
  const [users, setUsers] = useState([])
  

  const handelUnAssignTask = async () => {
    let response = await unAssignTask(_id)
    if (response.ok) {
      let data = await response.json()
      await fetchTask()
      toast.success(data?.message)
    }
  }
  const handleGetUsers = async () => {
    let response = await getUsers()
    if (response.ok) {
      let data = await response.json()
      setUsers(data?.users)
      setGetUsersDialog(true)
    }
  }


  const statusBadge = (status) => {
    if (status === "To Do") return "secondary";
    if (status === "In Progress") return "warning";
    if (status === "Done") return "success";
    return "neutral";
  };

  let due = new Date(dueDate)
  let today = new Date()
  return (
    <Card className="w-full max-w-sm shadow-lg border border-gray-200 rounded-lg overflow-hidden">

      <CardHeader className="p-4">
        <div className="flex justify-between items-center">
          <span className="text-white bg-orange-400 rounded-md px-2"> {loggedUserEmail === userEmail ? "Task created by you" : `Task assigned by ${userEmail}`}</span>

          {loggedUserEmail === userEmail ? assignedTo === null ? <button onClick={handleGetUsers} className="bg-purple-400 hover:text-white rounded-md px-2 cursor-pointer">Assign Task</button> : <button onClick={handelUnAssignTask} className="bg-purple-400 hover:text-white rounded-md px-2 cursor-pointer">UnAssign Task</button> : ""
          }

        </div>
        {today > due && <p className="px-2 p-2 w-1/3 my-[10px] rounded-md text-white bg-red-800">overdue task</p>}
        <CardTitle className="text-xl font-semibold">{title}</CardTitle>
        <CardDescription className="text-sm text-gray-500">{description}</CardDescription>
      </CardHeader>

      <CardContent className="p-4 space-y-2">
        <div className="flex justify-between">
          <span className="font-semibold text-sm">Priority:</span>
          <Badge variant={priority === "High" ? "danger" : priority === "Medium" ? "warning" : "success"}>
            {priority}
          </Badge>
        </div>
        <div className="flex justify-between">
          <span className="font-semibold text-sm">Status:</span>
          <Badge variant={() => statusBadge(status)}>{status}</Badge>
        </div>
        <div className="flex justify-between">
          <span className="font-semibold text-sm">Due Date:</span>
          <span className="text-sm text-gray-600">{due.toLocaleDateString()}</span>
        </div>

        {loggedUserEmail === userEmail &&
          <div className="flex justify-between mt-[20px]">

            <button className="bg-red-400 hover:text-white rounded-md px-2 cursor-pointer" onClick={() => setDeleteTaskDialog(true)} >Delete Task</button>

            <button onClick={() => {
              setEditTaskDialog(true)
              setEditTaskId(_id)
            }} className="bg-gray-400 hover:text-white rounded-md px-2 cursor-pointer">Edit Task</button>


          </div>
        }
     


        <GetUsers getUsersDialog={getUsersDialog} setGetUsersDialog={setGetUsersDialog} users={users} id={_id} />
        <DeleteTask taskId={_id} deleteTaskDialog={deleteTaskDialog} setDeleteTaskDialog={setDeleteTaskDialog} />
        <EditTask />

      </CardContent>
    </Card>
  );
};

export default TaskCard;
