export const unAssignTask =async(taskId)=>{
    try {
        let response = await fetch(`http://localhost:4000/api/v1/task/unAssignTask/${taskId}`,{
            method :"PATCH",
            headers:{
                "Content-Type":"application/json"
            },
            credentials:"include"
        })

        return response
    } catch (error) {
        return error
    }
   


}