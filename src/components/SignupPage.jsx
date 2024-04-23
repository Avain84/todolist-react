import { useForm } from "react-hook-form";
import { useNavigate, Link } from "react-router-dom";
import axios from "axios";

import { signupAPI } from "../apis/urls";

function SignupPage() {
  const { register, handleSubmit, formState: { errors }, watch, reset } = useForm();
  const password = watch("password");
  const navigate = useNavigate();
  const onSubmit = data => {
    // 創建要打API的資料
    const {email,nickname,password} = data;
    const signupData = {
      user:{email,nickname,password}
    }
    // 打註冊帳號的API
    const signup = async () => {
      try {
        const response = await axios.post(signupAPI,signupData);
        alert(response.data.message);
        reset();
        navigate('/');
      } catch (error) {
        if(error.response.status === 422){
          alert(error.response.data.error[0])
        }else{
          alert("發生錯誤！")
        }
      }
    }
    signup()
  };
  
  return (
    <main>
      <h2 className="sign-title">註冊帳號</h2>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="email">
          <label htmlFor="email">Email</label>
          <input type="text" id="email" placeholder="請輸入Email" {...register("email", {
            required: {
              value: true,
              message: "此欄位不可為空"
            },
            pattern: {
              value: /^\S+@\S+$/i,
              message: "Email格式錯誤"
            }
          })} />
          <div className="alert">
            {errors.email?.message}
          </div>
        </div>
        
        <div className="nickname">
          <label htmlFor="nickname">您的暱稱</label>
          <input type="text" id="nickname" placeholder="請輸入您的暱稱" {...register("nickname", {
            required: {
              value: true,
              message: "此欄位不可為空"
            }
          })} />
          <div className="alert">
            {errors.nickname?.message}
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

        <div className="passwordValidation">
          <label htmlFor="passwordValidation">再次輸入密碼</label>
          <input type="password" id="passwordValidation" placeholder="請再次輸入密碼" {...register("passwordValidation", {
            required: {
              value: true,
              message: "此欄位不可為空"
            },
            validate: value => value === password || "輸入錯誤，與密碼不符"
          })} />
          <div className="alert">
            {errors.passwordValidation?.message}
          </div>
        </div>

        <div className="home-btn">
          <button type="submit" className="btn-lg">註冊帳號</button>
          <Link to='/' className="btn-sm">登入</Link>
        </div>
      </form>
    </main>
  );
}

export default SignupPage;
