import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import axios from 'axios'


const Signup = () => {
  // initialize the hooks
  const[username,setUsername]=useState("")
  const[email,setEmail]=useState("")
  const[password,setPassword]=useState("")
  const[phone,setPhone]=useState("")
  const[Loading,setLoading]=useState("")
  const[success,setSuccess]=useState("")
  const[error,setError]=useState("")



  const submit=async(e)=>{
    e.preventDefault()
    setLoading("Please Wait As We Upload Your Details")

    if (!username || !email || !password || !phone) {
      setError("All fields are required!")
      setLoading("")
      return
    }

    try{
        const data= new FormData()
      data.append('username',username)
      data.append('email',email)
      data.append('password',password)
      data.append('phone',phone)

      const response= await axios.post("https://almak.pythonanywhere.com/api/signup",data)


      setLoading("")
      setSuccess(response.data.success)


        setUsername("")
        setEmail("")
        setPassword("")
        setPhone("")
    }catch(error){
      setSuccess("")
      setLoading("")
      setError(error.message)      
    }

  }

  return (
    <div className='row justify-content-center mt-4'>
      <div className="col-md-6 card shadow p-4">
        <form onSubmit={submit}>
          {Loading}
          {success}
          {error}
        <h2><b><i>Sign Up ‼️</i></b></h2>
        <input type="text"
        placeholder='Enter Username'
        className='form-control mt-3'
        value={username}
        onChange={(e) =>setUsername(e.target.value)}
        />
        
        <input type="email"
        placeholder='Enter Email'
        className='form-control mt-3'
        value={email}
        onChange={(e) =>setEmail(e.target.value)}
        />
        
        <input type="password"
        placeholder='Enter Password'
        className='form-control mt-3'
        value={password}
        onChange={(e) =>setPassword(e.target.value)}
        />

        <input type="text"
        placeholder='Enter Phone Number'
        className='form-control mt-3'
        value={phone}
        onChange={(e) =>setPhone(e.target.value)}
        />
        
        <button 
        className='btn btn-success my-3 px-5' 
        type='submit'>
        Sign Up 📬
        </button>

        <p>
          Already have an account
          <Link to='/Signin' >Sign In</Link>
        </p>
        </form>
      </div>
    </div>

  )
}

export default Signup