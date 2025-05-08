export const getTask = async (editTaskId) => {
  try {
    let response = await fetch(
      `http://localhost:4000/api/v1/task/getTask/${editTaskId}`,
      {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
        credentials: "include",
      }
    );

    if (response.ok) {
      return response;
    }
  } catch (error) {
    return error;
  }
};
