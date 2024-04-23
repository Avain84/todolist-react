import { useNavigate,Outlet } from "react-router-dom";

function GuestLayout() {
  const navigate = useNavigate();
  return(
    <div className="wrap">
      <div className="container">
        <div className="title">
        <button type="button" onClick={()=>{
            const token = window.localStorage.getItem('token');
            if(token){
              navigate('/todo');
            }else{
              navigate('/');
            }
          }}>
            <h1 className="home">ONLINE TODO LIST</h1>
          </button>
          <img src="to-do-pic.png" alt="to-do-pic" />
        </div>
        <Outlet />
      </div>
    </div>
  );
}

export default GuestLayout;