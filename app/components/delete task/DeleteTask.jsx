
"use client"
import toast from "react-hot-toast"
import {
    Dialog,
    DialogContent,

    DialogTitle,

} from "@/components/ui/dialog"
import { useGlobal } from "@/app/context/global"
import { deleteTask } from "@/app/utils/utility functions/deleteTask"



export default function DeleteTask({ deleteTaskDialog, setDeleteTaskDialog, taskId }) {
    const { fetchTask } = useGlobal()
   

    const handleDelete = async () => {
       
        let response = await deleteTask(taskId)
        if (response.ok) {

            toast.success("Task Deleted successfully" , {duration:3000})
           
            await fetchTask()
            
            setDeleteTaskDialog(false)
        }
    }


    return (
        <Dialog open={deleteTaskDialog} onOpenChange={setDeleteTaskDialog}>
            <DialogContent aria-describedby={"add form dialog"} className="bg-white" onInteractOutside={(e) => e.preventDefault()}>

                <DialogTitle className={"text-center m-2"}>Are You sure ?</DialogTitle>

                <div className="flex justify-between items-center p-2">
                    <button onClick={handleDelete} className="p-2 bg-red-400 hover:text-white rounded-md px-4 cursor-pointer">Yes</button>
                    <button onClick={() => setDeleteTaskDialog(false)} className="p-2 bg-green-400 hover:text-white rounded-md px-4 cursor-pointer">No</button>
                </div>

            </DialogContent>
        </Dialog>
    )
}
