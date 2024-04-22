function NoList() {
  return (
    <div className="no-event">
      <p>目前尚無待辦事項</p>
      <img src="public/empty.png" alt="empty" />
    </div>
  );
}

function List({todos}) {
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
              <div className="state state-btn">
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
              <button className="list-del"><i className="list-del fa-solid fa-xmark"></i></button>
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

function TodoList({todos}) {
  return(
    <section className="todo">
      {
        todos && todos.length > 0 ? <List todos={todos} />:<NoList />
      }
    </section>
  );
}

export default TodoList;