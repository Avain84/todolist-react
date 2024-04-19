import { Link } from "react-router-dom" 

function NotFound() {
  return(
    <main style={{display:"flex",flexDirection:"column",alignItems:"center"}}>
      <h2 className="home-title">無此頁面路徑</h2>
      <Link to='/todolist-react/' className="btn-lg">回首頁</Link>
    </main>
  )
}

export default NotFound;