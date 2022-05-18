import './App.css';

import { useState,useEffect } from "react";
const App = () =>{
const [listofthings, setlistofthings] = useState('');
const [toDolist, settoDolist] = useState([]);
const [currentIndex, setcurrentIndex] = useState(0);
const [editMode, seteditMode] = useState(false)

useEffect(() => {
  if (localStorage.toDolist){
settoDolist(JSON.parse(localStorage.toDolist))
  }
  else{
 settoDolist([])
  }
}, [])

const addList =()=>{
  settoDolist(()=>{
    let alllist =[...toDolist,{listofthings}]
    localStorage.toDolist= JSON.stringify(alllist);
    setlistofthings('');
    return alllist;
  })
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

const updateTask=(index)=>
{
  //  let list=JSON.parse(localStorage.getItem('toDolist'));
  let newAllList = [...toDolist];
  let changedDetails = {listofthings};
  newAllList[currentIndex]=changedDetails;
  seteditMode(false);
  localStorage.setItem('toDolist',JSON.stringify(newAllList));
  // setlistofthings('');
  window.location.reload()
}

  return(
    <div>

      <div className="container-fluid">
        <div className="row">
          <div className="col-6 border-right">
           <h1 className="card-header"> Add a to-do</h1>

           <input type="text" placeholder="To Do" className="form-control mb-3 " onChange={(e)=>setlistofthings(e.target.value)} value={listofthings}/>
           {editMode == false?  
              <button className="btn btn-info" onClick={addList}>Add
              </button> :   
              <button className="btn btn-success" onClick={updateTask}>
              Update
              </button>}
          </div>

          <div className="col-6 vh-100">
              <h1>List of  Things</h1>
              <table className="table table-striped table-border">
            <thead>
            <td>S/N</td>
            <td>List</td>
            <td>Actions</td>
             </thead>
           
           {toDolist.map((val,index)=>
            <tr key={index}>  
            <td>{index+1}</td>  
            <td>{val.listofthings}</td>                
            <td> <button onClick={()=>deletelist(index)} className="btn btn-danger">Delete</button>                 
             <button className="btn btn-warning" onClick={()=>editlist(index)}>Edit</button>
                </td>
              </tr>
          )}
            </table>
              
          </div>
        </div>
      </div>
    </div>
  )
}

export default App;
