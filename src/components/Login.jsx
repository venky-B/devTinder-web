import axios from 'axios';
import React, { useState } from 'react'
import { useDispatch } from 'react-redux';
import { addUser } from '../utils/userSlice';
import { useNavigate } from 'react-router-dom';
import { BASE_URL } from '../utils/constants';


const Login = () => {

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [emailId, setEmailId] = useState("Venky321@gmail.xyz");
  const [password,setPassword] = useState("Venky@123");

  const handleLogin = async () =>{

    try{
      const res = await axios.post(BASE_URL+ "/signin",{
       emailId,  password 
      }, {withCredentials: true});

      // console.log(res.data);
      dispatch(addUser(res.data));

      return navigate("/feed");

    }
    catch(err){
      console.error(err.message);
    }

  }
  return (
    <div className=' flex justify-center'>
    <div className="card bg-base-300 w-96 shadow-xl m-4 ">
  <div className="card-body ">
    <label className="card-title">Email Id</label>
    <input type="email" value = {emailId} onChange={(e)=>setEmailId(e.target.value)} />
    <label className="card-title">Password</label>
    <input type="Password" value={password} onChange={(e)=>setPassword(e.target.value)}/>
    <div className="card-actions justify-center">
      <button className="btn btn-primary " onClick={handleLogin}>Login</button>
    </div>
  </div>
</div>
</div>
  )
}

export default Login