import React from 'react'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import LoginForm from '../../components/LoginForm';

const Login = () => {

  const navigate = useNavigate();

  const [Login, setLogin] = useState({
    username: "",
    password: ""
  })

  const handleClick = (event) => {
    event.preventDefault();

    if(Login.username === "" && Login.password === "")
      navigate("/dashboard/fans");
  }

  return (
    <div className='h-screen w-full bg-black'>
      <LoginForm />
    </div>
  )
}

export default Login
