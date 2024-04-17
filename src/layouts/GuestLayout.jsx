import { Link,Outlet } from "react-router-dom";

function GuestLayout() {
  return(
    <div className="wrap">
      <div className="container">
        <div className="title">
          <Link to='/todolist-react/' className="logo">
            <h1 className="home">ONLINE TODO LIST</h1>
          </Link>
          <img src="to-do-pic.png" alt="to-do-pic" />
        </div>
        <Outlet />
      </div>
    </div>
  );
}

export default GuestLayout;