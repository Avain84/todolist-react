// import { Link } from "react-router-dom";
import Header from "./Header";
import AddList from "./AddList";
import TodoList from "./TodoList";

function TodoPage() {
  return (
    <>
      <Header></Header>
      <main>
        <AddList></AddList>
        <TodoList></TodoList>
      </main>
    </>
  );
}

export default TodoPage;
