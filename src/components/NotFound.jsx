import { Link } from "react-router-dom" 

function NotFound() {
  return(
    <>
      <p>無此頁面路徑</p>
      <Link to='/todolist-react/'>回首頁</Link>
    </>
  )
}

export default NotFound;