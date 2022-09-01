import React from 'react'
import { useEffect,useState } from 'react';
import { useNavigate,Link } from 'react-router-dom';
import "../assets/styles/signin.css";
import lock from '../assets/images/lock.png';
import user from '../assets/images/user.png';
export default function Signin() {
    const navigate =useNavigate();
    const [username,setusername]=useState('');
    const [password,setpassword]= useState('');
    const [alluser,setalluser]=useState([]);
 useEffect(() => {
  if (localStorage.allUser){
  setalluser(JSON.parse(localStorage.allUser))
  console.log(alluser)
  }
  else{
  setalluser([])
  }
  },[])
    const login=(customer)=>{
        let newlist = [...alluser];
        console.log(customer.username);
        let found = newlist.find((val) => {
        return (val.newCustomer.username === customer.username && val.newCustomer.password === customer.password)
        })
    
        if (found){
        alert("correct credentials")
        let currentP ={username:customer.username,password:customer.password}
              localStorage.currentUser= JSON.stringify(currentP);
              console.log(currentP);
             navigate('/todo');
       }
            else{
            alert("incorrect username or password");
            window.location.reload();
        }
    
    } 
  return (
    <>
        <section class="section">
        <div class="box">
            <div class="form">
                <h2>Login</h2>
                    <div class="inputBx">
                    <input type="text" onChange={(e)=>setusername(e.target.value)} value={username} placeholder="Username" name="" id=""/>
                        <img src={user} height={"20"} alt=""/>
                    </div>
                    <div class="inputBx">
                    <input type="password" onChange={(e)=>setpassword(e.target.value)} value={password} placeholder="Password"name="" id=""/>
                        <img src={lock} height="20" alt=""/>
                    </div>
                    <label for="" class="remember"><input type="checkbox" name="" id=""/>Remember Me</label>
                    <div class="inputBx">
                        <input type="submit"onClick={()=>login({username,password})} value="Login"/>
                    </div>
                <p>Forgot Your <Link to="">Password</Link></p>
                <p>Need an Account? <Link to="/signup">Sign Up</Link></p>
            </div>
        </div>
    </section>
    </>
  )
}
