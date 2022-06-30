import React from 'react';
import { Link,useNavigate } from 'react-router-dom'
import "../assets/styles/home.css";
function Home() {
  document.addEventListener('DOMContentLoaded',animation,false);
  var textArray = ["“If you want to achieve more, start by managing less.The way to get started is to quit talking and start doing - Walt Disney, Just remember that To-Do lists are very personal so make it yours!  You need to discover and break your fear then get out there and start doing."];
  function animation(){
    startAnim(0);
  }
  function effect(currentText,i,callback){
    if(i<currentText.length){
      document.getElementById("music").innerHTML = currentText.substring(0,i+1)+"<span id='cursor'></span>"; 
      setTimeout(function(){effect(currentText,i+1,callback)},50);
    }else if(typeof callback == 'function'){
      setTimeout(callback,700); 
    }
  }
  function startAnim(i){
    if(typeof textArray[i] == 'undefined'){
      setTimeout(function(){startAnim(0)},10000);
    }
    if(i<textArray.length){
      var currentText = textArray[i];
      effect(currentText,0,function(){
        startAnim(i+1);
      });
    }
  }
  const navigate= useNavigate();
  const checkMe=()=>{
    navigate('/todo');
     }
  return (
    <>
        <section>
        <div className="wave wave1"></div>
        <div className="wave wave2"></div>
        <div className="wave wave3"></div>
        <div className="wave wave4"></div>
        <div className="container contain">
               <div class="col-12">
                <nav class="navbar navbar-expand-lg navbar-light nav-tabs initialism nav-pills sticky-top flex-md-nowrap p-0 shadow">
                    <a href="" id="amet">
                        <p class="navbar-brand">THE ToDo</p>
                    </a>
                    <button className="navbar-toggler" data-bs-toggle="collapse" data-bs-target="#my-navbar">
                    <span class="navbar-toggler-icon"></span>
                    </button>
                   
                    <div className="collapse navbar-collapse  justify-content-end" id="my-navbar">
                      <ul className="navbar-nav ">
                       <li className="nav-item"><Link to="/" className="mx-3 nav-link active">Home</Link></li>
                       <li className='nav-item'><Link to="/signup" className="mx-3 nav-link">Sign Up</Link></li>
                       <li className='nav-item'><Link to="/signin" className="mx-3 nav-link">Login</Link></li>
                       <li className='nav-item'><Link to="/todo" className="mx-3 nav-link">Add a todo</Link></li>
                    </ul>
                   </div>
                   </nav>
                   </div>
                <div className="row">
                  <div className="col-md-6 col-lg-12">
                    <div className="d-flex justify-content-between flex-wrap flex-md-nowrap align-items-center pt-3 pb-2 mb-3">
                   <div id='music' className='col-md-6 col-lg-6'>

                   </div>
                   <div className='col-md-6 col-lg-6'>
                    <p className='display-5 text-center'>Click to add a todo</p>
                   <div class="center">
                     <button class="btn1 btn-primary1 mx-5 mt-5" onClick={checkMe}>
                     <div class="btn-cube">
                    <span>Hover me</span>
                    <span>Welcome !!!</span>
                    </div>
                    </button>
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

export default Home