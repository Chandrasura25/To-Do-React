import React from 'react'
import { useEffect,useState } from 'react';
import { useNavigate } from 'react-router-dom';
import "../assets/styles/signin.css";
import lock from '../assets/images/lock.png';
import user from '../assets/images/user.png';
export default function Signin() {
    const navigate =useNavigate();
    const [username,setusername]=useState('');
    const [password,setpassword]= useState('');
    const [alluser,setalluser]=useState([]);
    const [users,setusers]=useState([]);
    useEffect(() => {
  if (localStorage.allUser){
  setalluser(JSON.parse(localStorage.allUser))
//   setuser(JSON.parse(localStorage.currentUser))
  }
  else{
  setalluser([])
//   setuser([])
  }
    }, [])
    const login=(customer)=>{
        let newlist = [...alluser];
        for (let i = 0; i <newlist.length; i++) {
            if(customer.username==newlist[i].newCustomer.username&&customer.password==newlist[i].newCustomer.password)
            {
                console.log(newlist[i].newCustomer.username);
                let currentP =[...users,{customer}]
                localStorage.currentUser= JSON.stringify(currentP);
                navigate('/todo')
            }
            else{
                // alert("incorrect username or password");
                // window.location.reload();
            }
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
                <p>Forgot Your <a href="#">Password</a></p>
                <p>Need an <a href="signup">Account</a></p>
            </div>
        </div>
    </section>
    </>
  )
}
