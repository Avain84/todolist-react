import axios from "axios";
import { todosAPI } from "../apis/urls";

function NoList() {
  return (
    <div className="no-event">
      <p>目前尚無待辦事項</p>
      <img src="public/empty.png" alt="empty" />
    </div>
  );
}

function List({todos,config,getList}) {
  return(
    <div className="event">
      <ul className="list-menu">
        <li><button className="all list-menu-active" name="alltodo">全部</button></li>
        <li><button name="undonetodo">待完成</button></li>
        <li><button name="donetodo">已完成</button></li>
      </ul>
      <ul className="todolist">
        {
          todos.map((todo)=> (
            <li className="listitem" id={todo.id} key={todo.id}>
              <div className="state state-btn" onClick={()=> {
                async function toggleState() {
                  try {
                    await axios.patch(`${todosAPI}/${todo.id}/toggle`,todo.id,config);
                    getList();
                  } catch (error) {
                    console.log(error);
                  }
                }
                toggleState();
              }}>
                {
                  todo.completed_at?
                  <button className="done state-btn"><i className="state-btn fa-solid fa-check"></i></button>
                  :
                  <button className="undone state-btn"><i className="state-btn fa-regular fa-square"></i></button>
                }
              </div>
              {
                todo.completed_at?
                <p className="done-event">{todo.content}</p>
                :
                <p className="undone-event">{todo.content}</p>
              }
              <button className="list-del" onClick={() => {
                console.log("click");
                async function deleteList() {
                  try {
                    const response = await axios.delete(`${todosAPI}/${todo.id}`,config);
                    alert(response.data.message);
                    getList();
                  } catch (error) {
                    console.log(error);
                  }
                }
                deleteList();
              }}><i className="list-del fa-solid fa-xmark"></i></button>
            </li>
            )
          )
        }
      </ul>
      <div className="about-list">
        <div className="undone-count"></div>
        <button className="clear-done">清除已完成項目</button>
      </div>
    </div>
  )
}

function TodoList({todos,config,getList}) {
  return(
    <section className="todo">
      {
        todos && todos.length > 0 ? <List todos={todos} config={config} getList={getList} />:<NoList />
      }
    </section>
  );
}

export default TodoList;