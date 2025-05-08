export const deleteTask = async (taskId) => {

    try {
        let response = await fetch(`${process.env.NEXT_PUBLIC_API_BASE_URL}api/v1/task/deleteTask/${taskId}`, {
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