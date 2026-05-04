'use client'

import React, { useState } from 'react'
import { authClient } from '../../../lib/auth-client'
import { FaRegEye, FaRegEyeSlash } from 'react-icons/fa'

function Signinpage () {
  const [show , setShow ] = useState(false)
  
 
  const Handlesignin = async (e) => {
     e.preventDefault()
     const form = e.target
     const email = form.email.value
     const password = form.password.value
     console.log(email , password)





     const { data, error } = await authClient.signIn.email({
    email: email , // required
    password: password , // required
    rememberMe: true,
    callbackURL: "/",
});  

if(data){
  alert('Login Successfull')
}else{
  alert(`${error.message}`)
}

  }
  return (
    <div className='flex mt-20 justify-center items-center'>
       <form  onSubmit={Handlesignin}>
<fieldset className="fieldset bg-base-200  border-base-300 space-y-2 rounded-box w-xs border p-4">
  <legend className="fieldset-legend font-bold text-2xl">
     Sign In
  </legend>

  <label className="label">Email</label>
  <input type="email" name='email' className="input" placeholder="Email" />

  <label className="label">Password</label>
   <div className='relative'>
  <input type={`${show? 'text' : 'password'}`} name='password' className="input " required placeholder="Password" />
 
    <span onClick={() => setShow(!show)} className='absolute top-3 right-5'> {show? <FaRegEye  size={20} />   : <FaRegEyeSlash size={20} /> }   </span> 
   </div>
  

  <p className='text-center text-[12px]'>Create a Account ? <a href="/signup">signUp</a></p>

  <button className="btn btn-neutral mt-4">
    Sign In
  </button>
</fieldset> 
       </form>
      
 </div> 
  )
}

export default Signinpage 