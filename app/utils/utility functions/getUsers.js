export const getUsers =async()=>{

    try {
        let response = await fetch(`${process.env.NEXT_PUBLIC_API_BASE_URL}api/v1/user/getUsers`,{
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