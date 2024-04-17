import { Link } from "react-router-dom";

function SignupPage() {
  return (
    <>
    <p>Signup</p>
    <Link to='../'>回首頁</Link>
    <Link to='../todo'>TODO</Link>
    </>
  );
}

export default SignupPage;
