import React,{ useState,useEffect} from 'react'
import {useNavigate} from "react-router-dom";
import "../assets/styles/todo.css";

export default function Todo() {
let today = new Date().getUTCDate();
const [listofthings, setlistofthings] = useState('');
const [toUser, settoUser] = useState([]);
const [allTodo, setallTodo] = useState([])
const [currentIndex, setcurrentIndex] = useState(0);
const [todoIndex, settodoIndex] = useState(0)
const [editMode, seteditMode] = useState(false)
const [alluser,setalluser]=useState({});
let date = new Date().toUTCString();
const navigate=useNavigate()
useEffect(() => {
  if (localStorage.allUser && localStorage.currentUser){
      settoUser(JSON.parse(localStorage.allUser));
      setalluser(JSON.parse(localStorage.currentUser))
      let currentUser=JSON.parse(localStorage.currentUser)
      let allUser=JSON.parse(localStorage.allUser)
      let todoUser = allUser.find((val)=>val.newCustomer.username === currentUser.username && val.newCustomer.password === currentUser.password)
      let index= allUser.findIndex((i)=>i.newCustomer.username === currentUser.username)
      setallTodo(todoUser.todo)
    setcurrentIndex(index)
  }
  else{
        settoUser([]);
        setalluser([]);
        navigate('/signup')
  }
}, [])
  const addList =()=>{
    if(listofthings!==''){
      let allList = toUser[currentIndex].todo;
      let alllist ={listofthings,date}
      settoUser(allList.push(alllist))
      localStorage.setItem("allUser", JSON.stringify(toUser));
      setlistofthings('')
    }
  else{
    alert("input something")
  }
  window.location.reload()
}
const deletelist = (index) =>
{
  settoUser(toUser[currentIndex].todo.splice(index,1))
  console.log(toUser)
  localStorage.setItem('allUser',JSON.stringify(toUser));
  window.location.reload()
}

const editlist= (val,index)=>{
  seteditMode(true)
  console.log(val,index)
  setlistofthings(val.listofthings);
  settodoIndex(index);
}
const updateTask=()=>
{
  let changedDetails = {listofthings,date};
  toUser[currentIndex].todo[todoIndex]=changedDetails;
  seteditMode(false);
    localStorage.setItem('allUser',JSON.stringify(toUser));
  window.location.reload();
}

  return (
    <>
     <div className='bod'>
<div className="container-fluid">
      <div className='text-light display-5'>{alluser.username}</div>
  <div className="row">
    <div className="col-lg-6 col-sm-12 mx-auto">
      <div className='col-lg-2 my-2 user text-light'>
      <p className='text-light p'>{today}</p>
      <small className='small'>TODAY</small>
      </div>
     <h1 className="display-3 text-warning text-center">Add a to-do</h1>
     <div class="input">
     <input type="text" placeholder="New Task" className="form-control mb-3 " onChange={(e)=>setlistofthings(e.target.value)} value={listofthings}/>
     {editMode === false?  
        <button className="bg-transparent add mx-2 mb-2" style={{border:"none"}} onClick={addList}><i class="material-icons">add</i></button> :   
        <button className="bg-transparent update mx-2 mb-2"style={{border:"none"}} onClick={updateTask}>
       <i class="material-icons">update</i>
        </button>}
        </div>
    </div>
  </div>
  <div className='row mt-5'>
  <div className="col-lg-6 col-sm-12 h-100 mx-auto" style={{overflow:"scroll"}}>
       <ul class="todo-list">
     {allTodo.map((val,index)=>
      <li key={index}>
      <div class="left-cont">  
      <label className='mx-2'>{index+1}</label>  
      <span>{val.listofthings}</span></div> 
      <p>{val.date}</p>              
      <td><span onClick={()=>deletelist(index)} className="remove mx-4"><i class="material-icons">delete</i></span>                 
       <span className="edit" onClick={()=>editlist(val,index)}><i class="material-icons">edit</i></span>
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
