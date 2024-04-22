import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { testAPI,todosAPI } from "../apis/urls";

import Header from "./Header";
import AddList from "./AddList";
import TodoList from "./TodoList";

function TodoPage() {
  const navigate = useNavigate();
  const [todos,setTodos] = useState([]);
  
  const token = window.localStorage.getItem('token');
  const config = {
    headers:{ authorization: token }
  };

  async function checkToken(){
    try {
      await axios.get(testAPI,config);
      alert("歡迎回來");
    } catch (error) {
      alert(error.response.data.message);
      window.localStorage.clear();
      navigate('/todolist-react/');
    }
  }

  async function getList() {
    try {
      const response = await axios.get(todosAPI,config);
      console.log(response.data.todos);
      setTodos(response.data.todos);
    } catch (error) {
      console.log(error);
    }
  }
  
  useEffect(()=>{
    checkToken();
    getList();
  },[]);
  
  return (
    <body className="inside">
      <Header />
      <main className="mylist">
        <div className="wrapper">
          <AddList getList={getList} />
          <TodoList todos={todos} />
        </div>
      </main>
    </body>
  );
}

export default TodoPage;
