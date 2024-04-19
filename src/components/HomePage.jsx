import { useNavigate,Link } from "react-router-dom";
import { useForm } from "react-hook-form";
import axios from "axios";

import { signinAPI } from "../apis/urls";

function HomePage() {
  const { register, handleSubmit, formState: { errors }, reset } = useForm();
  const navigate = useNavigate();
  const onSubmit = data => {
    const signinData = {
      user: data
    }

    const signin = async () => {
      try {
        const response = await axios.post(signinAPI,signinData);
        alert(response.data.message);
        reset();
        window.localStorage.setItem('token', response.headers.authorization);
        window.localStorage.setItem('nickname', response.data.nickname);
        navigate('/todolist-react/todo');
      } catch (error) {
        if(error.response.status === 401){
          alert(error.response.data.message);
        }else{
          alert("發生錯誤，請重新嘗試");
        }
      }
    }
    signin();
  };

  return (
    <main>
      <h2 className="home-title">最實用的線上代辦事項服務</h2>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="mail">
          <label htmlFor="email">Email</label>
          <input type="text" id="email" placeholder="請輸入Email" {...register("email", {
            required: {
              value: true,
              message: "此欄位不可為空"
            },
            pattern: {
              value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
              message: "Email格式錯誤"
            }
          })} />
          <div className="alert">
            {errors.email?.message}
          </div>
        </div>
        <div className="password">
          <label htmlFor="password">密碼</label>
          <input type="password" id="password" placeholder="請輸入密碼" {...register("password", {
            required: {
              value: true,
              message: "此欄位不可為空"
            },
            minLength: {
              value: 6,
              message: "密碼至少需 6 碼"
            }
          })} />
          <div className="alert">
            {errors.password?.message}
          </div>
        </div>
        <div className="home-btn">
          <button type="submit" className="btn-lg">登入</button>
          <Link to='/todolist-react/signup' className="btn-sm">註冊帳號</Link>
        </div>
      </form>
    </main>
  );
}

export default HomePage;
