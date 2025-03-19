import React from 'react'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'

const Login = () => {

  const navigate = useNavigate();

  const [Login, setLogin] = useState({
    username: "",
    password: ""
  })

  const handleClick = (event) => {
    event.preventDefault();

    if(Login.username === "" && Login.password === "")
      navigate("/fans");
  }

  return (

    <form className="max-w-sm mx-auto w-full sm:w-1/2 bg-black h-1/2 flex flex-col justify-center p-6 rounded-3xl">
      <div className='text-white text-3xl mb-5'>
        Login
      </div>
      <div className="mb-5">
        <label for="email" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Your email</label>
        <input
          type="email"
          id="email"
          className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
          placeholder="name@gmail.com"
          required
          onChange={(event) => setLogin({ ...Login, username: event.target.value })}
        />
      </div>

      <div className="mb-5">
        <label for="password" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Your password</label>
        <input
          type="password"
          id="password"
          className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
          required
          onChange={(event) => setLogin({ ...Login, password: event.target.value })}
        />
      </div>

      <div className='mt-5'>
        <button
          type="submit"
          className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
          onClick={handleClick}
        >
          Submit
        </button>
      </div>
    </form>
  )
}

export default Login
