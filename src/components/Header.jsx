import axios from "axios";
import { useNavigate } from "react-router-dom";
import { signoutAPI } from "../apis/urls";

function Header() {
  const navigate= useNavigate();
  const token = window.localStorage.getItem('token');
  const config = {
    headers: { authorization: token},
  };

  return(
    <header>
      <div className="wrapper">
        <nav>
          <button type="button" onClick={()=>{
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
            <button type="button" onClick={() => {
              const signout = async () => {
                try {
                  const response = await axios.delete(signoutAPI,config);
                  alert(response.data.message);
                  window.localStorage.clear();
                  navigate('/todolist-react/');
                } catch (error) {
                  alert('登出失敗');
                }
              };
              signout();
            }}>
              登出
            </button>
          </div>
        </nav>
      </div>
    </header>
  )
}

export default Header;