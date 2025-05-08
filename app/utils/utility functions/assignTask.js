export const assignTask = async (assignedTo, taskId) => {
  try {
    let response = await fetch("http://localhost:4000/api/v1/task/assignTask", {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ assignedTo, taskId }),
      credentials: "include",
    });
    return response;
  } catch (error) {
    return error;
  }
};
