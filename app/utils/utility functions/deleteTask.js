export const deleteTask = async (taskId) => {

    try {
        let response = await fetch(`http://localhost:4000/api/v1/task/deleteTask/${taskId}`, {
            method: "DELETE",
            headers: {
                "Content-Type": "application/json"
            },
            credentials: "include"
        })
   return response;
    } catch (error) {
        return error
    }
   
}