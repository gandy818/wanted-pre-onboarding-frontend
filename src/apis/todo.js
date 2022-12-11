import todoAxios from "./base"

const getTodo = () => {
  const res = todoAxios.get("/todos")
  return res.data
}

const deleteTodo = (id) => {
  const res = todoAxios.delete("/todos/" + id)
  return res.data
}

export default { getTodo, deleteTodo };