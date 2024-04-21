// import React from 'react';
import { useForm } from 'react-hook-form';
import { todosAPI } from '../apis/urls';
import axios from 'axios';

function AddList() {
  const { register, handleSubmit, formState: { errors } } = useForm();
  const onSubmit = data => {
    const newList = {
      "todo": data
    }
    const token = window.localStorage.getItem('token');
    const config = {
      headers:{ authorization: token }
    };
    async function postList() {
      try {
        const response = await axios.post(todosAPI,newList,config)
        alert("新增成功")
      } catch (error) {
        console.log("發生錯誤，請重新嘗試");
      }
    }
    postList();
  };
  
  return (
    <form className='add' onSubmit={handleSubmit(onSubmit)}>
      <input type="text" placeholder="新增待辦事項" {...register("content", {required: true})} />
      <button type="submit" className="add-btn">
        <i className="fa-solid fa-plus"></i>
      </button>
    </form>
  );
}

export default AddList;