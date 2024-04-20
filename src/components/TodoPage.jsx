import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import Header from "./Header";
import AddList from "./AddList";
import TodoList from "./TodoList";
import { testAPI } from "../apis/urls";

function TodoPage() {
  const navigate = useNavigate();
  async function checkToken(){
    const token = window.localStorage.getItem('token');
    const config = {
      headers:{ authorization: token }
    };
    try {
      const response = await axios.get(testAPI,config);
      console.log(response);
      alert("歡迎回來");
    } catch (error) {
      alert(error.response.data.message);
      window.localStorage.clear();
      navigate('/todolist-react/');
    }
  }
  
  useEffect(()=>{
    checkToken();
  },[]);
  return (
    <>
      <Header />
      <main>
        <AddList />
        <TodoList />
      </main>
    </>
  );
}

export default TodoPage;
