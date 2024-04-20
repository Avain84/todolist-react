import { Link,useNavigate } from "react-router-dom";

function Header() {
  const navigate= useNavigate();
  return(
    <header>
      <div className="wrapper">
        <nav>
          <button type="button" onClick={()=>{
            const token = window.localStorage.getItem('token');
            if(token){
              navigate('/todolist-react/todo');
            }else{
              navigate('/todolist-react/');
            }
          }}>
            <h1 className="home">ONLINE TODO LIST</h1>
          </button>
          <div className="member">
            {window.localStorage.getItem('nickname') && <h2 className="user">{window.localStorage.getItem('nickname')}的待辦</h2>}
            <Link to='/todolist-react/' onClick={() => window.localStorage.clear()}>登出</Link>
          </div>
        </nav>
      </div>
    </header>
  )
}

export default Header;