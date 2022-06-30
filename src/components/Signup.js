import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useState,useEffect } from 'react';
import "../assets/styles/signup.css";
function Signup() {
 const [firstname,setfirstname]= useState('');
 const [alluser,setalluser]=useState([]);
 const [username,setusername]=useState('');
 const [password,setpassword]= useState('');
 const [lastname,setlastname]= useState('');
 const [email,setemail]= useState('');
 const navigate =useNavigate();
 useEffect(() => {
  if (localStorage.allUser){
setalluser(JSON.parse(localStorage.allUser))
  }
  else{
 setalluser([])
  }
}, [])
const submit =(newCustomer)=>{
  setalluser(()=>{
    let alllist =[...alluser,{newCustomer}]
    localStorage.allUser= JSON.stringify(alllist);
    setusername('');
    setfirstname('');
    setlastname('');
    setemail('');
    setpassword('')
    alert("registration is successful");
    navigate('/signin')
    return alllist;
  })
}
  return (
    <>
  <section class="section">
      <div>
        <div className="col-6 mt-4 col-sm-12">
        <div className="row shadow-sm box">
            <div className="col-8 col-sm-12 h-100 w-100" >
               <h3 className="lead m-4 fw-bold text-light">Registration Page</h3>
               <div>
                   <label for="">Nickname</label>
                   <input type="text"onChange={(e)=>setusername(e.target.value)} value={username} name="" className="form-control" id="nickInp"/>
               </div>
               <div className="row my-4">
                   <div className="col-6">
                    <label for="">Firstname</label>
                    <input type="text" name="" className="form-control" id="fnameInp"onChange={(e)=>setfirstname(e.target.value)} value={firstname}/>
                   </div>
                   <div className="col-6">
                    <label for="">Lastname</label>
                    <input type="text" name="" className="form-control" id="lnameInp"onChange={(e)=>setlastname(e.target.value)} value={lastname}/>
                   </div>
               </div>
               <div>
                <label for="">Email</label>
                <input type="email"onChange={(e)=>setemail(e.target.value)} value={email} name="" className="form-control" id="emailInput"/>
             <div className="mt-2">
                <label for="">Password</label>
                <input type="password" name="" minlength="6" className="form-control"onChange={(e)=>setpassword(e.target.value)} value={password} id="passwordInp"/>
            </div>
            <div className="row my-4">
                <div className="">
                  <div className="row">
                    <div className="col-3 col-sm-3">
                      <div className="center">
                        <input type="checkbox" name="" id="input"/>
                      </div>
                    </div>
                    <div className="col">
                      <small>I agree to the terms and conditions listed by the above company</small>
                    </div>
                  </div>
                </div>
                <div className="col mx-5 mt-3">
                    <button className="btn btn-primary text-white" id="signupBtn"onClick={()=>submit({username,firstname,lastname,password,email})}>Submit</button> 
                </div>
             </div>
            </div>
          </div>
        </div>
    </div>
      </div>
  </section>
 
    </>
  )
}

export default Signup