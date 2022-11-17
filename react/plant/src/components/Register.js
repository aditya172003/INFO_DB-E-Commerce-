import React from 'react'
import {useState} from 'react'
import {Link, useNavigate} from 'react-router-dom'






function Register() {
  const [worn ,setworn]=useState('*')
  const nevigate=useNavigate();
let [User,setUser]=useState({
  name:"",email:"",phone:"",password:"",cpassword:""
})



let name , value
  const  inputHandel =(e)=>{
    console.log(User)
    name=e.target.name;
    value=e.target.value;
  
  
    setUser({...User,[name]:value})
    
  }
  // this is data fetching using post method .............sending the data to register page in backend ....................;

const fetchdata= async(e)=>{
  e.preventDefault()
  const { name,email,phone,password,cpassword}=User
 const res=await fetch('/register',{
  method:'POST',
  headers:{
    "Content-type":"application/json"
  }
  ,
  body:JSON.stringify({
    name,email,phone,password,cpassword
  })

 });
 const  data=res.json();
 if(res.status===422||!data){
  window.alert("Please enter the information ")

 }
 else if(res.status===423){
  window.alert("User already exist")
 }
 else if(res.status===425){
  setworn("please check the password and conferm password")
  
 }
 else{
  window.alert("your form has been submitted")
  nevigate('/login')
  
 }

}


return (
    <>
     <form  method='POST'>
      <div class="input-group mb-3">
      <span class="input-group-text">Name</span>
      <input type="text"  name="name" value={value} onChange={inputHandel} class="form-control" placeholder="Name" aria-label="Username" aria-describedby="basic-addon1" />
      </div>

      <div class="input-group mb-3">
      <span class="input-group-text">Email Address</span>
        <input type="email" name='email' value={value} onChange={inputHandel} width={5}  placeholder="Email"  />
       
      </div>

     
      <div class="input-group mb-3">
        <span class="input-group-text" id="basic-addon3">Contact</span>
        <input type="text" name='phone' value={value}onChange={inputHandel} class="form-control" id="basic-url" aria-describedby="basic-addon3"placeholder="WhatsApp Number" />
      </div>

      <div class="input-group mb-3">
        <span class="input-group-text">Password</span>
        <input type="Password"name='password' value={value}onChange={inputHandel} class="form-control" placeholder='Password' aria-label="Amount (to the nearest dollar)" />
       
      </div>

     
      <div class="input-group mb-3">
        <span class="input-group-text">Confirm Password</span>
        <input type="Password" name='cpassword' value={value}onChange={inputHandel} class="form-control" placeholder='Confirm the password' aria-label="Amount (to the nearest dollar)" />
        <lable>{worn}</lable>
      </div>
     <button type='Submit' onClick={fetchdata}> Submit</button>
      </form>


    </>

  )
}

export default Register
