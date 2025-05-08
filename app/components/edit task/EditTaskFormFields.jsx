import {
    Select,
    SelectTrigger,
    SelectValue,
    SelectContent,
    SelectItem,
  } from "@/components/ui/select";
  
  import { Input } from "@/components/ui/input";
  
  export default function AddEditFormFields({
    values,
    errors,
    touched,
    handleChange,
    handleBlur,
    setFieldValue,
  }) {
    const today = new Date().toISOString().split("T")[0];
  
    return (
      <div className="flex flex-col gap-4">
        {/* STATUS SELECT */}
        <div>
          <label className="text-lg mb-1 block">Choose Status</label>
          <Select
            value={values.status}
            onValueChange={(value) => setFieldValue("status", value)}
          >
            <SelectTrigger className="border-purple-400 border-2">
              <SelectValue placeholder="Status" />
            </SelectTrigger>
            <SelectContent className="bg-white">
              <SelectItem value="To Do">To Do</SelectItem>
              <SelectItem value="In Progress">In Progress</SelectItem>
              <SelectItem value="Done">Done</SelectItem>
            </SelectContent>
          </Select>
          {touched.status && errors.status && (
            <div className="text-red-500 italic text-sm mt-1">{errors.status}</div>
          )}
        </div>
  
        {/* PRIORITY SELECT */}
        <div>
          <label className="text-lg mb-1 block">Choose Priority</label>
          <Select
            value={values.priority}
            onValueChange={(value) => setFieldValue("priority", value)}
          >
            <SelectTrigger className="border-purple-400 border-2">
              <SelectValue placeholder="Priority" />
            </SelectTrigger>
            <SelectContent className="bg-white">
              <SelectItem value="High">High</SelectItem>
              <SelectItem value="Medium">Medium</SelectItem>
              <SelectItem value="Low">Low</SelectItem>
            </SelectContent>
          </Select>
          {touched.priority && errors.priority && (
            <div className="text-red-500 italic text-sm mt-1">{errors.priority}</div>
          )}
        </div>
  
        {/* DUE DATE INPUT */}
        <div>
          <label className="text-lg mb-1 block">Choose Date</label>
          <Input
            type="date"
            name="dueDate"
            value={values.dueDate}
            onChange={handleChange}
            onBlur={handleBlur}
            min={today}
            className="border-purple-400 border-2"
          />
          {touched.dueDate && errors.dueDate && (
            <div className="text-red-500 italic text-sm mt-1">{errors.dueDate}</div>
          )}
        </div>
      </div>
    );
  }
  