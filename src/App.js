import './App.css';
import { Route,Routes } from 'react-router-dom'; 
import Home from './components/Home';
import Todo from './components/Todo';
import Signup from './components/Signup';
import Signin from './components/Signin';
const App = () =>{
  return(
  <>
   <Routes>
         <Route path='/' element={<Home/>}></Route>
         <Route path='/signin' element={<Signin/>}></Route> 
         <Route path='/signup' element={<Signup/>}></Route> 
         <Route path='/todo' element={<Todo/>}></Route> 
    </Routes> 
  </>
  )
}

export default App;
