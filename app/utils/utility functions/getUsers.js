export const getUsers =async()=>{

    try {
        let response = await fetch("http://localhost:4000/api/v1/user/getUsers",{
            method:"GET",
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