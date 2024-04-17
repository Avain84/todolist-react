import { Link } from "react-router-dom";

function HomePage() {
  return (
    <>
      <p>Home</p>
      <Link to='signup'>註冊登入</Link>
    </>
  );
}

export default HomePage;
