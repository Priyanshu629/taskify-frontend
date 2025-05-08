
"use client"

import {
    Dialog,
    DialogContent,

    DialogTitle,

} from "@/components/ui/dialog"
import { assignTask } from "../utils/utility functions/assignTask"
import toast from "react-hot-toast"
import { useGlobal } from "../context/global"


export default function GetUsers({ getUsersDialog, setGetUsersDialog, users, id }) {
    const { loginUserId ,fetchTask} = useGlobal()

    const handleAssign = async (assignedTo) => {

        let response = await assignTask(assignedTo, id)
        if (response.ok) {
            let data = await response.json()
            toast.success(data?.message)
            await fetchTask()
            setGetUsersDialog(false)
        }

    }


    return (
        <Dialog open={getUsersDialog} onOpenChange={setGetUsersDialog}>
            <DialogContent aria-describedby={"add form dialog"} className="bg-white" onInteractOutside={(e) => e.preventDefault()}>

                <DialogTitle className={"text-center m-2"}>All Users</DialogTitle>

                <div className="w-full p-2 flex flex-col gap-[12px]">
                    {users
                        ?.filter(user => user._id !== loginUserId)
                        .map(user => (
                            <div key={user._id} className="text-lg font-bold flex justify-between items-center gap-[15px]">
                                <span>{user.name} ({user.email})</span>
                                <button
                                    onClick={() => handleAssign(user._id)}
                                    className="px-2 bg-yellow-400 hover:text-white rounded-md cursor-pointer"
                                >
                                    Assign
                                </button>
                            </div>
                        ))
                    }

                </div>


            </DialogContent>
        </Dialog>
    )
}
