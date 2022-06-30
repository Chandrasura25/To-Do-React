import React from 'react'
import { useState,useEffect} from "react";
import "../assets/styles/todo.css";

export default function Todo() {
let today = new Date().getUTCDate();
console.log(today);
const [listofthings, setlistofthings] = useState('');
const [toDolist, settoDolist] = useState([]);
const [currentIndex, setcurrentIndex] = useState(0);
const [editMode, seteditMode] = useState(false)
const [alluser,setalluser]=useState([]);
let date = new Date().toUTCString();

useEffect(() => {
  if (localStorage.toDolist && localStorage.currentUser){
settoDolist(JSON.parse(localStorage.toDolist));
setalluser(JSON.parse(localStorage.currentUser))
  }
  else{
 settoDolist([]);
 setalluser([])
  }
}, [])
// console.log(date);
const check =()=>{
  if('input[type="checkbox"]:checked'){
    document.querySelector('#check-1').classList.add('.left-cont input:checked + label::after')
  }
}
const addList =()=>{
    if(listofthings!=''){
    settoDolist(()=>{
      let alllist =[...toDolist,{listofthings,date}]
      localStorage.toDolist= JSON.stringify(alllist);
      setlistofthings('');
      return alllist;
    })
  }
  else{
    alert("input something")
  }
}
const deletelist = (index) =>
{
  let newlist = [...toDolist]
  let updatedlist = newlist.filter((val,ind)=>( ind!=index));
  settoDolist(updatedlist)
  localStorage.setItem('toDolist',JSON.stringify(updatedlist));
}

const editlist= (index)=>{
  seteditMode(true)
  let newlist = [...toDolist]
  let currentlist = newlist[index]
  let {listofthings}=currentlist;
  setlistofthings(listofthings);
  setcurrentIndex(index);
}
const updateTask=()=>
{
  let newAllList = [...toDolist];
  let changedDetails = {listofthings};
  newAllList[currentIndex]=changedDetails;
  seteditMode(false);
  localStorage.setItem('toDolist',JSON.stringify(newAllList));
  window.location.reload();
}

  // let currentUser = [...alluser];
  // var user =currentUser[0].customer.username
  // console.log(user);
  return (
    <>
     <div className='bod'>
<div className="container-fluid">
  <div className="row">
    <div className="col-lg-6 col-sm-12 mx-auto">
      <div className='col-lg-2 my-2 user text-light'>
      <p className='text-light p'>{today}</p>
      <small className='small'>TODAY</small>
      </div>
     <h1 className="display-3 text-warning text-center">Add a to-do</h1>
     <div class="input">
     <input type="text" placeholder="New Task" className="form-control mb-3 " onChange={(e)=>setlistofthings(e.target.value)} value={listofthings}/>
     {editMode == false?  
        <button className="bg-transparent add mx-2 mb-2" style={{border:"none"}} onClick={addList}><i class="material-icons">add</i></button> :   
        <button className="bg-transparent update mx-2 mb-2"style={{border:"none"}} onClick={updateTask}>
       <i class="material-icons">update</i>
        </button>}
        </div>
    </div>
  </div>
  <div className='row mt-5'>
  <div className="col-lg-6 col-sm-12 h-100 mx-auto">
       <ul class="todo-list">
     {toDolist.map((val,index)=>
      <li key={index}>
      <div class="left-cont">  
      <label className='mx-2'>{index+1}</label>  
      <input type="checkbox" onClick={check} name="" id="check-1"></input>
      <span>{val.listofthings}</span></div> 
      <p>{val.date}</p>              
      <td><span onClick={()=>deletelist(index)} className="remove mx-4"><i class="material-icons">delete</i></span>                 
       <span className="edit" onClick={()=>editlist(index)}><i class="material-icons">edit</i></span>
          </td>
        </li>
    )}
      </ul>
        
    </div>

  </div>
</div>
</div>
    </>
  )
}
