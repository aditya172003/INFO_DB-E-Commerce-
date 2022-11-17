import React from 'react'
import { useEffect, useState } from "react"
import { Link, useNavigate, } from 'react-router-dom'

function Home() {
  
  
  //   const nevigate=useNavigate()

  // const [userData,setuserData]=useState({})
  // const callAboutPage=async()=>{
  //   try{
  //     const res=await fetch("/home",{
  //       method:"GET",
  //       headers:{
  //         Accept:"application/json",
  //         "Content-Type":"application/json"
  //       },
  //       credentials:"include"

  //     })
  //     const data=await res.json();
  //     setuserData(data)

  //     if(!res.status===200){
  //       const error= new Error(res.error)
  //       throw error; 

  //     }
  //   }catch(err){
  //    console.log(err)
  //    console.log("this is catch")
  //    nevigate('/login',{replace:true})
  //   }
  // }

  // useEffect(()=>{

  // callAboutPage()
  // },[])

  return (
    <div>

      {/* <!-- landing page start --> */}

      <div className="landing">
        <section className="home" id="home">
          <div className="content">
            <h3>Plants Are <span>One Click</span></h3>
            <p>This is plantomainia, an one stop shop location for all horticulturist as well as farmers.</p>
            <Link className="btn btn-outline-success landing-button" to='/nursery'   role="button">SHOP NOW &#8594;</Link>
          </div>
          <div className="landing-image">
            <img src="https://cdn.pixabay.com/photo/2013/07/12/19/24/sapling-154734__480.png" alt="landing image" />
          </div>
        </section>
      </div>

      {/* <!-- landing page ends --> */}



      {/* <!-- feautured products start --> */}

<div class="nurserybody">
  <section class="section-p1" id="product">
    <div>
      <h2 class="title">Featured Products</h2>
      <div class="underline"></div>
    </div>
    <div class="pro-container">
      <div class="pro">
      <Link to={`/product/1`}> 
          <img src={`1.jpg`} alt=""/>
          </Link>
        <div class="des">
          <h5>Button Rose</h5>
          <div class="star">
            <i class="fas fa-star"></i>
            <i class="fas fa-star"></i>
            <i class="fas fa-star"></i>
            <i class="fas fa-star"></i>
          </div>
          <h4>
            <i class="fa-solid fa-indian-rupee-sign"> 120</i>
          </h4>   
        </div>
        <a href="#"><i class="fa-solid fa-cart-shopping cart"></i></a>
      </div>
      <div class="pro">
      <Link to={`/product/2`}> 
          <img src={`2.jpg`} alt=""/>
          </Link>
        <div class="des">
          <h5>Hibiscus</h5>
          <div class="star">
            <i class="fas fa-star"></i>
            <i class="fas fa-star"></i>
            <i class="fas fa-star"></i>
            <i class="fas fa-star"></i>
          </div>
          <h4>
            <i class="fa-solid fa-indian-rupee-sign"> 200</i>
          </h4>   
        </div>
        <a href="#"><i class="fa-solid fa-cart-shopping cart"></i></a>
      </div>
      <div class="pro">
      <Link to={`/product/3`}> 
          <img src={`3.jpg`} alt=""/>
          </Link>
        <div class="des">
          <h5>Shevanti</h5>
          <div class="star">
            <i class="fas fa-star"></i>
            <i class="fas fa-star"></i>
            <i class="fas fa-star"></i>
            <i class="fas fa-star"></i>
          </div>
          <h4>
            <i class="fa-solid fa-indian-rupee-sign"> 190</i>
          </h4>   
        </div>
        <a href="#"><i class="fa-solid fa-cart-shopping cart"></i></a>
      </div>
      <div class="pro">
      <Link to={`/product/4`}> 
          <img src={`4.jpg`} alt=""/>
          </Link>
        <div class="des">
          <h5>Shevanti</h5>
          <div class="star">
            <i class="fas fa-star"></i>
            <i class="fas fa-star"></i>
            <i class="fas fa-star"></i>
            <i class="fas fa-star"></i>
          </div>
          <h4>
            <i class="fa-solid fa-indian-rupee-sign"> 200</i>
          </h4>   
        </div>
        <a href="#"><i class="fa-solid fa-cart-shopping cart"></i></a>
      </div>
    </div>
  </section>
</div>

{/* <!-- feautered products end --> */}


{/* <!-- Offer section start --> */}

    <section class="offer" id="nursery-offer">
      <div class="content">
        <h3>EXCLUSIVE OFFER FOR PLANTOMANIA USERS<br></br><span>5 Fragrant Flowering plants</span></h3>
        <p>
          5 evergreen flowering plants at a minimal price with decorated pots.<br></br>This includes
          Jasmine, Rose, Lily, Mogra & Tulip. <br></br>
        </p>
        <a href="" class="landing-button" id="offer-button">BUY NOW &#8594;</a>
  
      </div>
      <div class="offer-image">
        <img
          src="https://cdn.shopify.com/s/files/1/0047/9730/0847/products/nurserylive-combo-packs-plants-5-best-fragrant-plants-16968509653132_600x600.jpg?v=1634209158"
          alt="landing image"/>
      </div>
    </section>

    {/* <!-- offer section end --> */}
    {/* <!-- latest products starts--> */}

<div class="nurserybody">
  <section class="section-p1" id="product">
    <div>
      <h2 class="title">Latest Products</h2>
      <div class="underline"></div>
    </div>
    <div class="pro-container">
      <div class="pro">
      <Link to={`/product/5`}> 
          <img src={`5.jpg`} alt=""/>
          </Link>
       
        <div class="des">
          <h5>Tulsi</h5>
          <div class="star">
            <i class="fas fa-star"></i>
            <i class="fas fa-star"></i>
            <i class="fas fa-star"></i>
            <i class="fas fa-star"></i>
          </div>
          <h4>
            <i class="fa-solid fa-indian-rupee-sign"> 140</i>
          </h4>   
        </div>
        <a href="#"><i class="fa-solid fa-cart-shopping cart"></i></a>
      </div>
      <div class="pro">
      <Link to={`/product/6`}> 
          <img src={`6.jpg`} alt=""/>
          </Link>
        <div class="des">
          <h5>Jasmine</h5>
          <div class="star">
            <i class="fas fa-star"></i>
            <i class="fas fa-star"></i>
            <i class="fas fa-star"></i>
         
          </div>
          <h4>
            <i class="fa-solid fa-indian-rupee-sign"> 120</i>
          </h4>   
        </div>
        <a href="#"><i class="fa-solid fa-cart-shopping cart"></i></a>
      </div>
      <div class="pro">
      <Link to={`/product/7`}> 
          <img src={`7.jpg`} alt=""/>
          </Link>
        <div class="des">
          <h5>Gokarna</h5>
          <div class="star">
            <i class="fas fa-star"></i>
            <i class="fas fa-star"></i>
       \
          </div>
          <h4>
            <i class="fa-solid fa-indian-rupee-sign"> 120</i>
          </h4>   
        </div>
        <a href="#"><i class="fa-solid fa-cart-shopping cart"></i></a>
      </div>
      <div class="pro">
      <Link to={`/product/8`}> 
          <img src={`8.jpg`} alt=""/>
          </Link>
        <div class="des">
          <h5>Yellow Rose</h5>
          <div class="star">
            <i class="fas fa-star"></i>
            <i class="fas fa-star"></i>
            <i class="fas fa-star"></i>
            <i class="fas fa-star"></i>
          </div>
          <h4>
            <i class="fa-solid fa-indian-rupee-sign"> 180</i>
          </h4>   
        </div>
        <a href="#"><i class="fa-solid fa-cart-shopping cart"></i></a>
      </div>
  
      
     
    </div>
  </section>
</div>

{/* <!-- latest products end --> */}

{/* <!-- Testimonials section starts --> */}

<div class="testimonial">
  <div class="small-container">
      <div class="testrow">
          <div class="testcol">
              <p>Such a great offer and such minimalistic price. Condition of plants was good and the leaves were bright green and are in well condition</p>
              <img src="https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8cmFuZG9tJTIwcGVvcGxlfGVufDB8fDB8fA%3D%3D&w=1000&q=80"/>
              <h3> Shawn Maker</h3>
          </div>
          <div class="testcol">
              <p>Plants are delivered in a good condition with nice potting mixture. the last time purchased plants are still doing good</p>
              <img src="https://images.unsplash.com/photo-1525134479668-1bee5c7c6845?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Nnx8cmFuZG9tJTIwcGVvcGxlfGVufDB8fDB8fA%3D%3D&w=1000&q=80"/>
              <h3> Francia Rosi</h3>
          </div>
          <div class="testcol">
              <p>I couldnt go to buy plants  due to my hectic schedule. Plantomania is my solution. i could do my gardening pretty well due to plantomania. </p>
              <img src="https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NXx8cmFuZG9tJTIwcGVvcGxlfGVufDB8fDB8fA%3D%3D&w=1000&q=80"/>
              <h3> Sean Maker</h3>
          </div>
        </div>
    </div>
</div>

{/* <!-- Testimonials section ends --> */}


{/* <!- Newsletter section starts -->- */}

<section id="newsletter" class="section-p1">
  <div class="newstext">
    <h4>Sign Up for Newsletters</h4>
    <p>Get E-mail updates about our latest shop and <span>special offers.</span></p>
  </div>
  <div class="form">
    <input type="text" placeholder="Your email address"/>
    <button>Sign Up</button>
  </div>
</section>

{/* <!-- Newsletter section ends --> */}

</div>





      )
}

      export default Home
