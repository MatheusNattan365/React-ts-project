
import { useState, useContext } from 'react';
import AuthContext  from '../../context/AuthProvider';
import { useForm } from 'react-hook-form'
import { useNavigate  } from 'react-router-dom';
import  axios  from "../../api/axios"
import './Login.css'

const LOGIN_URL = '/sign-in';

function Login(){
  const context = useContext(AuthContext);
  const navigate = useNavigate();
  const {register, handleSubmit, formState:{errors}} = useForm();
  const [values, setValues] = useState({
    email:"",
    password:""
  });

return (
    <>
    <div className="d-flex align-items-center py-4 body-dark">
      <main className="form-signin w-100 m-auto">
        <form onSubmit={handleSubmit( async (data)=>{
          try {
            // "data" sao os dados dos forms
            const response = await axios.post(`${LOGIN_URL}`, data);
            navigate("/dashboard");
          } catch (error) {
            alert("Something wrong with your credentials.")
          }

        })}>
          <div className='bg-dark p-3 wrapper'>
          <h1 className="h3 mb-3 fw-normal text-white text-start ">Please sign in</h1>

          <div className="form-floating">
          <input 
            type='email'
            {...register('email', {required:'Email is Required'})}
            className="form-control mb-1" id="floatingPassword" placeholder="name@example.com" onChange={(e)=> setValues({...values, email:e.target.value})} />
            <label htmlFor="floatingPassword">Email</label>
            <label htmlFor="floatingInput">Email address</label>
            <span className='text-danger'>{errors.email?.message as string}</span>
          </div>
          <div className="form-floating">
          <input 
            type='password'
            {...register('password',{required:'Password is requried', minLength:{value:4, message:"Minimum 4 characters"}, maxLength:{value:10, message:"Max 10 characters"}})}
            className="form-control mb-1" id="floatingPassword" placeholder="Password" onChange={(e)=> setValues({...values,password:e.target.value})}/>
            <label htmlFor="floatingPassword">Password</label>
            <span className='text-danger'>{errors.password?.message as string}</span>
          </div>

          <div className="form-check text-start my-2">
          </div>
          <button className="btn btn-primary w-100 py-2 mt-4" type="submit">Sign in</button>
            <label className="form-check-label text-secondary my-1" htmlFor='goToSignup'>
              
        </label>
        <a href="/signup" id='goToSignup'>Or click here to sign up!</a>
          </div>
          
        </form>
      </main>
    </div>
    </>
)
}

export default Login