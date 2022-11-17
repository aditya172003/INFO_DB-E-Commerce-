
import './App.css';
import {useState,useEffect} from 'react'
import Home from './components/Home';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from "react-router-dom";
import About from './components/About';
import Contact from './components/Contact';
import Nursery from './components/Nursery';
import Nev from './components/Nev';
import Register from './components/Register';
import Login from './components/Login';
import Landing from './components/Landing';
import Info from './components/Info';
import Product from './components/Product';
import Cart from './components/Cart';
import Finlogin from './components/Finlogin';


function App() {

//   const [userData,setuserData]=useState([])
// const callAboutPage=async()=>{
  
//     const res=await fetch("/inf",{
//       method:"GET",
//       headers:{
//         Accept:"application/json",
//         "Content-Type":"application/json"
//       },
//       credentials:"include"
  
//     })
//     const data=await res.json()
//     setuserData(data)
//     console.log(data)
  

// }

// useEffect(()=>{
  
// callAboutPage()
// },[])

  return (
 
   <>
 
   <Router>
         <Nev/>
         {/* <Finlogin/> */}
    <Routes>
      <Route path='/landing' element={<Landing/>}/>
      <Route path='/login' element={<Login/>}/>
      <Route path='/register' element={<Register/>}/>
      <Route path='/home' element={<Home/>}/>
     <Route path='/about' element={<About/>}/>
     <Route path='/contact' element={<Contact/>}/>
     <Route path='/nursery' element={<Nursery/>}/>
     <Route path='/Info' element={<Info/>}/>
     <Route path='/product/:id' element={<Product />}/>
     <Route path='/cart' element={<Cart/>}/>

     </Routes>
     </Router>
   {/* <h1>fetch data</h1>
   {
    userData.map((item)=>{
        return  (<div >
        <h1>{item.name}</h1>
        <h3>{item.type}</h3>
        <br></br>
        </div>)
    })
   } */}

   </>
  
  );
}

export default App;
