import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
} from "react-router-dom";

import App from "./App.js";
import TodoList from "./TodoList.js";
import TodoAdd from "./TodoAdd.js";
import TodoDetail from "./TodoDetail.js";
import { getTodos, addTodo, getTodo, actTodo } from "./api.js";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<App />}>
      <Route index={true} element={<TodoList />} loader={getTodos} />
      <Route path="add" element={<TodoAdd />} action={addTodo} />
      <Route
        path=":key"
        element={<TodoDetail />}
        loader={getTodo}
        action={actTodo}
      />
    </Route>,
  ),
);

export default router;
