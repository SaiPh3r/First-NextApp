"use client";
import Link from "next/link";
import React, { useState } from "react";
import { useRouter } from "next/navigation";
import { axios } from "axios";

export default function LoginPage(){
const [user,setUser] = useState({
email:"",
password:"",
 })
const onLogin = async ()=>{
 }
return(
<div className="flex flex-col items-center justify-center min-h-screen py-2 bg-gray-100">
<div className="p-8 bg-white rounded-lg shadow-md w-full max-w-md">
  <h1 className="text-3xl font-bold mb-6 text-center text-gray-800">Login</h1>
  <div className="mb-4">
    <label htmlFor="email" className="block text-gray-700 text-sm font-bold mb-2">Email</label>
    <input id="email" type="email" value={user.email} onChange={(e)=>setUser({...user,email:e.target.value})} placeholder="Email" 
      className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500" />
  </div>
  <div className="mb-6">
    <label htmlFor="password" className="block text-gray-700 text-sm font-bold mb-2">Password</label>
    <input id="password" type="password" value={user.password} onChange={(e)=>setUser({...user,password:e.target.value})} placeholder="Password"
      className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"/>
  </div>
  <button onClick={onLogin} className="w-full bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-700 cursor-pointer transition duration-200 mb-4">Login</button>
  <div className="text-center">
    <Link href="/signUp" className="text-blue-500 hover:text-blue-700">Don't have an account? Sign up</Link>
  </div>
</div>
</div>
 )
}
