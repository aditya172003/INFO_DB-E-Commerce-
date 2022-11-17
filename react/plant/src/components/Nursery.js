import React from 'react'
import "../App.css";
import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom';






function Nursery() {
  const [Data, setData] = useState([])
  const FetchData = async () => {
    const res = await fetch("/inf", {
      method: 'GET'
    })
    const data = await res.json()

    setData(data)

  }
  useEffect(() => {
    FetchData()
  }, [])












  return (
    <div>
      {/* <!-- offer banner section start --> */}

<section class="offer" id="nursery-offer">
  <div class="content">
    <h3>EXCLUSIVE OFFER FOR PLANTOMANIA USERS<br></br><span>5 Fragrant Flowering plants</span></h3>
    <p>
      5 evergreen flowering plants at a minimal price with decorated pots.<br></br> <span> This includes
      Jasmine, Rose, Lily, Mogra & Tulip.</span> <br></br>
    </p>
    <a href="" class="landing-button" id="offer-button">BUY NOW &#8594;</a>

  </div>
  <div class="offer-image">
    <img
      src="https://cdn.shopify.com/s/files/1/0047/9730/0847/products/nurserylive-combo-packs-plants-5-best-fragrant-plants-16968509653132_600x600.jpg?v=1634209158"
      alt="landing image"/>
  </div>
</section>

{/* <!-- offer banner section ends --> */}


<div class="nurserybody">
    <section class="section-p1" id="product">
      <div>
        <h2 class="title">Nursery Section</h2>
        <div class="underline"></div>
      </div>
      <div class="pro-container">
      {
        Data.map((item) => (
       
          <div class="pro">
          <Link to={`/product/${item.id}`}> 
          <img src={`${item.id}.jpg`} alt=""/>
          </Link>
          <div class="des">
            <h5>{item.name}</h5>
            <div class="star">
              <i class="fas fa-star"></i>
              <i class="fas fa-star"></i>
              <i class="fas fa-star"></i>
              <i class="fas fa-star"></i>
            </div>
            <h4>
              <i class="fa-solid fa-indian-rupee-sign">{item.price}</i>
            </h4>
          </div>
          <a href="#"><i class="fa-solid fa-cart-shopping cart"></i></a>
        </div>
        


        ))
      }
      </div>
   </section>


</div>
  </div>
  )

}
export default Nursery

{/*  <div key={item.id} className="card"  >
            <div className="card-body">
              <img src={`${item.id}.jpg`} className="card-img-top" alt="..." />
              <h5 className="card-title">{item.name}</h5>
              <h3>Rs.{item.price}</h3>


               to={`/product/${item.id}`} className="btn btn-primary">Go somewhere</Link>
            </div>
          </div> */}