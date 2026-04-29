'use client'

import React from 'react'
import { authClient } from '../../../lib/auth-client'

function Signinpage () {
 
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




  }
  return (
    <div className='flex justify-center items-center'>
       <form  onSubmit={Handlesignin}>
<fieldset className="fieldset bg-base-200  border-base-300 space-y-2 rounded-box w-xs border p-4">
  <legend className="fieldset-legend font-bold text-2xl">
     Sign In
  </legend>

  <label className="label">Email</label>
  <input type="email" name='email' className="input" placeholder="Email" />

  <label className="label">Password</label>
  <input type="password" name='password' className="input" placeholder="Password" />

  <button className="btn btn-neutral mt-4">
    Sign In
  </button>
</fieldset> 
       </form>
      
 </div> 
  )
}

export default Signinpage 