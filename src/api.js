import { redirect } from "react-router-dom";

import todos from "./todos.js";

export function getTodos() {
  return todos;
}

export async function addTodo({ request }) {
  const fd = await request.formData();
  const date = new Date();
  const newTodo = {
    title: fd.get("title"),
    desc: fd.get("desc"),
    image: fd.get("image"),
    done: false,
    createdAt: date.toLocaleString(),
    key: date.getTime(),
  };
  todos.push(newTodo);
  return redirect("/");
}
