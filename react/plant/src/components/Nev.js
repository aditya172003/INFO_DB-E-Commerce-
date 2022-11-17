import React from 'react'
import "../App.css"

import { Link, useParams } from 'react-router-dom'

import {useState} from 'react';


function Nev() {
 

  const [Home ,setHome]=useState("active")
  const [About,setAbout] = useState("")
  const [Nursery ,setNursery]=useState("")
  const [Contact ,setContact]=useState("")

  const stle = {
    'textDecoration': 'none'
  }
  const nav_name = {
    'color': '#183153'
  }
  const nav_name2 = {
    'color': "#198754"
  }

  const div = {
    "display": 'flex', "alignItems": 'center', "justifyContent": ' center'
  }
  return (




    <header id="full_nav" className="sticky-top">
      <div className="header">
        <nav className="navbar navbar-expand-lg navbar-light">
          <div className="container-fluid">
            <Link className="navbar-brand"  onClick={()=>{setHome("active")
                                    setAbout("")
                                    setContact("")
                                    setNursery("")
                                    
                                    }} to="/home">
              <img src="logo_main_3.png" className="nav_logo" alt="" />
            </Link>
            <Link to="/home" onClick={()=>{setHome("active")
                                    setAbout("")
                                    setContact("")
                                    setNursery("")
                                    
                                    }} style={stle}>
              {/* "color: #183153;" */}
              <span className="nav_name" style={nav_name}>Planto</span>
              <span className="nav_name" style={nav_name2}>Mania</span>
            </Link>
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
              <i className="fa-sharp fa-solid fa-bars-staggered"></i>
            </button>
            <div className="collapse navbar-collapse" id="navbarSupportedContent">
              <ul className="navbar-nav mx-auto mb-2 mb-lg-0">
                <li className="nav-item ">
                  <Link className={`nav-link  ${Home}`} onClick={()=>{setHome("active")
                                    setAbout("")
                                    setContact("")
                                    setNursery("")
                                    
                                    }} aria-current="page" to="/home">Home</Link>
                </li>
                <li className="nav-item">
                  <Link className= {`nav-link ${About}`}  onClick={()=>{setHome("")
                                    setAbout("active")
                                    setContact("")
                                    setNursery("")
                                    
                                    }}  to="/about">About</Link>
                </li>
                <li className="nav-item ">
                  <Link className= {`nav-link ${Nursery}`} onClick={()=>{setHome("")
                                    setAbout("")
                                    setContact("")
                                    setNursery("active")
                                    
                                    }}   to = "/nursery">Nursery</Link>
                </li>
                <li className="nav-item">
                  <Link className={`nav-link  ${Contact}`} onClick={()=>{setHome("")
                                    setAbout("")
                                    setContact("active")
                                    setNursery("")
                                    
                                    }} to="/contact">Contact</Link>
                </li>
              </ul>
              {/* display: flex; align-items: center; justify-content: center; */}
              <div style={div}>
                <Link to="/cart"><i className="fa-solid fa-cart-shopping cart"></i></Link>
                <Link className="btn btn-outline-success button_effect" to="/login" role="button">Login</Link>
                <Link className="btn btn-outline-success button_effect" to="/register" role="button">Signup</Link>
              </div>

            </div>
          </div>
        </nav>
      </div>
  
    </header >







//       <div >
//       <header id="full_nav">
//         <div className="header">
//             <nav className="navbar navbar-expand-lg navbar-light">
//                 <div className="container-fluid">
//                   <Link className="navbar-brand" to="/landing">
//                     <img src='logo_main_3.png' className="nav_logo" alt=""/>
//                   </Link>
//                   {/* style="text-decoration: none;" */}
//                   <Link to="/h" style={stle} >
//                     {/* style={{'color': '#183153'}} */}
//                     <span className="nav_name" style={nav_name} >Planto</span>
//                     {/* style={{'color': '#198754'}} */}
//                     <span className="nav_name" style={nav_name2} >Mania</span>
//                   </Link>
//                   <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
//                     <i className="fa-sharp fa-solid fa-bars-staggered"></i>
//                   </button>
//                   <div className="collapse navbar-collapse" id="navbarSupportedContent">
//                     <ul className="navbar-nav mx-auto mb-2 mb-lg-0">
//                       <li className="nav-item">
//                         <Link className="nav-link active" aria-current="page" to="/h">Home</Link>
//                       </li>
//                       <li className="nav-item">
//                         <Link className="nav-link" to="/about">About</Link>
//                       </li>
//                       <li className="nav-item">
//                         <Link className="nav-link" to="/nursery">Nursery</Link>
//                       </li>
//                       <li className="nav-item">
//                         <Link className="nav-link" to="/contact">Contact</Link>
//                       </li>
//                     </ul>
//                     {/* style={{"display": 'flex', "align-items": 'center', "justify-content":' center'}} */}
//                     <div style={div}>
//                         <Link to='/cart'><i className="fa-solid fa-cart-shopping cart"></i></Link>
//                         <Link className="btn btn-outline-success button_effect" to="/login" role="button">Login</Link>
//                         <Link className="btn btn-outline-success button_effect signup" to="/register" role="button">Signup</Link>
//                     </div>
//                      {/* <form className="d-flex">
//                       <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search">
//                       <button className="btn btn-outline-success" type="submit">Search</button>
//                     </form>  */}
//                   </div>
//                 </div>
//               </nav>
//         </div>
//     </header>
//     </div>
// </div>

  )
}

export default Nev
