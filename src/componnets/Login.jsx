import React from 'react'
import { useNavigate } from 'react-router-dom'
import { useState } from 'react'
import axios from 'axios'

const Login = () => {
  const[email,setEmail]=useState("")
  const[password,setPassword]=useState("")
  const[loading,setLoading]=useState("")
  const[success,setSuccess]=useState("")
  const[error,setError]=useState("")
  const navigate= useNavigate("")

  const submit= async (e) =>{
    e.preventDefault()
    setLoading("Please Wait...")
  

    try{
      // create form data
      const data=new FormData()
      data.append("email", email)
      data.append("password", password)

      const response= await axios.post("https://almak.pythonanywhere.com/api/signin",data)
      
      setLoading("")
      

      if(response.data.user){
        setSuccess(response.data.success)

        // todo save the details to local storage
        localStorage.setItem("user",JSON.stringify(response.data.user))

        navigate('/')
      }else{
        setError("Login Failed")
      }


    }

    catch (error){
      setLoading("")
      setError("Something went wrong")
      
    }

  }

  return (
    <div>
      <div className="row justify-content-center mt-4">
        <div className='col-md-6 card shadow p-4 '>
        <form onSubmit={submit}>
          {loading}
          {success}
          {error}

        <h2><i><b>Log In✔️</b></i></h2>
        <input 
        type="email" 
        placeholder='Enter Email'
        className='form-control mt-3'
        value={email}
        onChange={(e) =>setEmail(e.target.value)}
        required
        />

      
        
        <input type="password"
        placeholder='Enter Password'
        className='form-control mt-3'
        value={password}
        onChange={(e) =>setPassword(e.target.value)}
        required
        />
        
        <button 
        type='submit'
        className='btn btn-secondary my-3 px-5'>
        Log In 
        </button>

   


          </form>
        </div>
      </div>

      
    </div>
  )
}

export default Login
