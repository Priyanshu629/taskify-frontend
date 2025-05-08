export const logOut = async () => {

    try {
      let response = await fetch("http://localhost:4000/api/v1/user/logout", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        credentials: "include"
      })

      return response
    } catch (error) {
      return error
    }

  }