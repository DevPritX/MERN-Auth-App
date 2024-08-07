import React, { useRef } from 'react'

const Login = () => {
  const usernameRef = useRef(null)
  const passwordRef = useRef(null)

  const loginDataHandler = (ev) => {
    ev.preventDefault()
    const formData = {
      username: usernameRef.current.value,
      password: passwordRef.current.value
    }
    console.log(formData)

    // Clear Inputs
    usernameRef.current.value = ""
    passwordRef.current.value = ""
  }
  return (
    <form id="login"
    className='mx-auto mt-5 p-5 w-[80%] h-auto flex flex-col gap-5 bg-green-500' onSubmit={loginDataHandler}>
      <h1 className='mx-auto text-white font-medium text-2xl'>Login</h1>
      <input type="text" id='username' ref={usernameRef} placeholder='Username?' className='w-[60%] mx-auto py-1 px-4 font-medium text-sm border-white bg-white rounded-md text-green-800 placeholder:text-green-500 placeholder:text-sm placeholder:font-normal outline-none border-2 border-transparent focus:border-2 focus:border-green-800'/>
      <input type="text" id='password'ref={passwordRef} placeholder='Password' className='w-[60%] mx-auto py-1 px-4 font-medium text-sm border-white bg-white rounded-md text-green-800 placeholder:text-green-500 placeholder:text-sm placeholder:font-normal outline-none border-2 border-transparent focus:border-2 focus:border-green-800'/>
      <button type='submit' className='mx-auto px-5 py-1 uppercase bg-white text-green-600 font-medium text-lg rounded'>Login</button>
      <p className='text-white/90 text-base font-normal'>I don&apos;t have an account <a href="/register" className='font-bold text-lg  underline text-white'>Register here</a></p>
    </form>
  )
}

export default Login