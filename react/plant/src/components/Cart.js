import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { Link } from 'react-router-dom'
import { useNavigate } from 'react-router-dom'
import { remove } from './store/Cartslice'
import { useEffect, useState } from 'react'
import "../App.css";
function Cart() {
  const dispatch = useDispatch()
  const[qty,setqty]=useState(1)

  const data = useSelector((state) => state.cart)

  const removeIt = (dataId) => {
    dispatch(remove(dataId))
  }
  const nevigate = useNavigate()

  const [userData, setuserData] = useState({})
  const callAboutPage = async () => {
    try {
      const res = await fetch("/cart", {
        method: "GET",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json"
        },
        credentials: "include"

      })
      const data = await res.json();
      setuserData(data)

      if (!res.status === 200) {
        const error = new Error(res.error)
        throw error;

      }
    } catch (err) {
      console.log(err)
      console.log("this is catch")
      nevigate('/login', { replace: true })
    }
  }

  useEffect(() => {

    callAboutPage()
  }, [])


  return (
    <>
      <div>
        <h1>Welcome {userData.name}  </h1>
        <h2>Items Selected : {data.length}</h2>
        <section id="cart" class="section-p1">
          <table>
         <table>
            <thead>
                <tr>
                    <th>Remove</th>
                    <th>Image</th>
                    <th>Product</th>
                    <th>Price</th>
                    <th>Quantity</th>
                    <th>Subtotal</th>
                </tr>
             </thead>
            
             </table>
          {
            data.map((item) => (
              <div>
                <table>
                 <tbody>

                <tr>
                  <td><i class="far fa-times-circle" onClick={()=>removeIt(item.id)} ></i><a href="#"></a></td>
                  <td><img src={`${item.id}.jpg`} alt="" /></td>
                  <td>{item.name}</td>
                  <td><i class="fa-solid fa-indian-rupee-sign">Rs.{item.price}</i></td>
                  <td><input type="number" onChange={(e)=>{setqty(e.target.value)}} value={qty}/></td>
                  <td><i class="fa-solid fa-indian-rupee-sign"> Rs.({item.price*{qty}})</i></td>
                </tr>

                </tbody>
                </table>

              </div>
            ))
          }
         
          </table>
         

        </section>



        <section id="cart-add" class="section-p1">
          <div id="coupon">
            <h3>Apply Coupon</h3>
            <div>
              <input type="text" placeholder="Enter Your Coupon"/>
                <a href="" class="landing-button" id="offer-button">Apply</a>
            </div>
          </div>

          <div id="subtotal">
            <h3>Cart Totals</h3>
            <table>
              <tr>
                <td>Cart Subtotal</td>
                <td><i class="fa-solid fa-indian-rupee-sign"> 360</i></td>
              </tr>
              <tr>
                <td>Shipping</td>
                <td>Free</td>
              </tr>
              <tr>
                <td><strong>Total</strong></td>
                <td><strong><i class="fa-solid fa-indian-rupee-sign"> 360</i></strong></td>
              </tr>
            </table>
            <a href="" class="landing-button" id="offer-button">Proceed to Checkout</a>
          </div>
        </section>







      </div>

    </>
  )
}

export default Cart
