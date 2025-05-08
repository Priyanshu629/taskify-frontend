
"use client"

import {
    Dialog,
    DialogContent,

    DialogTitle,

} from "@/components/ui/dialog"

import EditTaskForm from "./EditTaskForm"
import { useGlobal } from "@/app/context/global"

export default function EditTask() {
    const { editTaskDialog, setEditTaskDialog }=useGlobal()
    return (
        <Dialog open={editTaskDialog} onOpenChange={setEditTaskDialog}>
            <DialogContent aria-describedby={"add form dialog"} className="bg-white" onInteractOutside={(e) => e.preventDefault()}>

                <DialogTitle className={"text-center m-2"}>Edit & Update Task</DialogTitle>

                <EditTaskForm />

            </DialogContent>
        </Dialog>
    )
}
