
import { useState } from 'react'
import { useForm } from 'react-hook-form'
import { useNavigate } from 'react-router-dom';
import './Signup.css'
import axios from '../../api/axios'

const SIGNUP_URL = '/sign-up';

function Signup(){
const {register, handleSubmit, formState:{errors}} = useForm();
const navigate = useNavigate();
  const [values, setvalues]= useState({
    name:"",
    password:"",
    email:""
  })


return (
    <>
<div className="d-flex align-items-center py-4 div-dark">
        
<main className=" w-100 m-auto">
  <form onSubmit={handleSubmit(async (data)=>{
   try {
    // "data" sao os dados dos forms
    const response = await axios.post(`${SIGNUP_URL}`, data)
    navigate("/");
  } catch (error) {
    alert("Something wrong with your credentials.")
  }
  })}>
    <div className='bg-dark p-3 wrapper'>
    <h1 className="h3 mb-3 fw-normal text-white text-start ">Enter Your Information</h1>

    <div className="form-floating">
      <input 
      type='text'
      {...register("name",{required:"Name is Required",minLength:{value:3, message:"Minimum 3 characters"}})}
      className="form-control text-dark mb-1" id="floatingInput" placeholder="name@example.com"  onChange={(e)=> setvalues({...values,name:e.target.value})}/>
      <label htmlFor="floatingInput">Name</label>
      <span className='text-danger'>{errors.fullName?.message as string}</span>
    </div>
    <div className="form-floating">
      <input 
      type='email'
      {...register('email', {required:'Email is Required'})}
      className="form-control mb-1" id="floatingPassword" placeholder="name@example.com" onChange={(e)=> setvalues({...values, email:e.target.value})} />
      <label htmlFor="floatingPassword">Email</label>
      <span className='text-danger'>{errors.email?.message as string}</span>
    </div>
    <div className="form-floating">
      <input 
      type='password'
      {...register('password',{required:'Password is requried', minLength:{value:4, message:"Minimum 4 characters"}, maxLength:{value:10, message:"Max 10 characters"}})}
      className="form-control mb-1" id="floatingPassword" placeholder="Password" onChange={(e)=> setvalues({...values,password:e.target.value})}/>
      <label htmlFor="floatingPassword">Password</label>
      <span className='text-danger'>{errors.password?.message as string}</span>
    </div>
    
    <div className="button-wrapper">
    <button className="btn btn-primary w-50 py-2 mt-4 mr-1" type="button" onClick={()=>{
      window.location.href = '/'
    }} >Go Back</button>
    <button className="btn btn-primary w-50 py-2 mt-4 ml-1" type="submit">Sign Up</button>
    </div>
    </div>
  </form>
</main>
    </div>
    </>
)

}

export default Signup