export const unAssignTask =async(taskId)=>{
    try {
        let response = await fetch(`${process.env.NEXT_PUBLIC_API_BASE_URL}api/v1/task/unAssignTask/${taskId}`,{
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