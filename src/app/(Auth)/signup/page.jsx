'use client'


import React, { useState } from 'react'
import { authClient } from '../../../lib/auth-client'
import { FaRegEye, FaRegEyeSlash } from 'react-icons/fa'

 function Signuppage () {

  const [show , setShow ] = useState(false)


  const Handlesignup = async (e) => {
     e.preventDefault()
     const form = e.target
     const username = form.username.value
     const email = form.email.value
     const password = form.password.value
     console.log(email , password)




const { data, error } = await authClient.signUp.email({
  name: username, // required
  email: email,   // required
  password: password, // required
  callbackURL: "/signin",
});
  
if(data){
  alert('Registration Successfull')
}else{
  alert(`${error.message}`)
}
// console.log(data)
// console.log(error)

  }

 
  return (
    <div className='flex mt-20 justify-center items-center'>
      <form  onSubmit={Handlesignup}>
      <fieldset className="fieldset bg-base-200 border-base-300 space-y-2 rounded-box w-xs border p-4">
  <legend className="fieldset-legend font-bold text-2xl">
     Sign Up
  </legend>

  <label className="label">Username</label>
  <input type="text" name='username' className="input" required placeholder="Username" />


  <label className="label">Email</label>
  <input type="email" name='email' className="input" required placeholder="Email" />

  <label className="label">Password</label>
  <div className='relative'>
 <input type={`${show? 'text' : 'password'}`} name='password' className="input " required placeholder="Password" />

   <span onClick={() => setShow(!show)} className='absolute top-3 right-5'> {show? <FaRegEye  size={20} />   : <FaRegEyeSlash size={20} /> }   </span> 
  </div>
 

  <p className='text-center text-[12px]'>Already Have a Account ? <a href="/signin">signIn</a></p>

  <button className="btn btn-neutral mt-4">
    Sign Up
  </button>
</fieldset> 
</form>
 </div>
  )
}

export default Signuppage 