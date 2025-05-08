import {
    Select,
    SelectTrigger,
    SelectValue,
    SelectContent,
    SelectItem,
} from "@/components/ui/select";
import { useGlobal } from "../context/global";
import { Input } from "@/components/ui/input";

export default function GroupedSelect() {
    const { setFilterValue } = useGlobal()
    return (
        <div className="flex items-center gap-[10px] flex-wrap justify-center">
            <Select onValueChange={(value) => {
                setFilterValue(prev => {
                    return { ...prev, status: value }
                })
            }}>
                <SelectTrigger className=" border-purple-400 border-2">
                    <SelectValue placeholder="Filter by status" />
                </SelectTrigger>
                <SelectContent>

                    <SelectItem value="To Do" >To Do</SelectItem>
                    <SelectItem value="In Progress" >In Progress</SelectItem>
                    <SelectItem value="Done" >Done</SelectItem>


                </SelectContent>
            </Select>
            <Select onValueChange={(value) => {
                setFilterValue(prev => {
                    return { ...prev, priority: value }
                })
            }}>
                <SelectTrigger className=" border-purple-400 border-2">
                    <SelectValue placeholder="Filter by priority" />
                </SelectTrigger>
                <SelectContent>


                    <SelectItem value="High">High</SelectItem>
                    <SelectItem value="Medium">Medium</SelectItem>
                    <SelectItem value="Low">Low</SelectItem>


                </SelectContent>
            </Select>

            <div className="border-2 border-black rounded-md">

                <Input onChange={(e) => {
                    setFilterValue(prev => {
                        return { ...prev, dueDate: e.target.value }
                    })
                }} type={"date"} placeholder="Filter by date" />

            </div>
            <div className="border-2  border-black rounded-md">

                <button className="bg-amber-300 p-2 hover:text-green-600" onClick={() => setFilterValue(prev => {
                    return { ...prev, overDue: true }
                })}>Overdue task</button>

            </div>


        </div>
    );
}
