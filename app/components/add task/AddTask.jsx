
"use client"

import {
    Dialog,
    DialogContent,

    DialogTitle,

} from "@/components/ui/dialog"


import AddTaskForm from "./AddTaskForm"
import { useGlobal } from "@/app/context/global"

export default function AddTask() {
    const { taskDialog, setTaskDialog }= useGlobal()
    return (
        <Dialog open={taskDialog} onOpenChange={setTaskDialog}>
            <DialogContent aria-describedby={"add form dialog"} className="bg-white" onInteractOutside={(e) => e.preventDefault()}>

                <DialogTitle className={"text-center m-2"}>Add New Task</DialogTitle>

                <AddTaskForm />

            </DialogContent>
        </Dialog>
    )
}
