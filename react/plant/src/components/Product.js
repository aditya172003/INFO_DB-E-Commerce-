import React,{useEffect,useState ,} from 'react'
import {useParams,useNavigate ,Link} from 'react-router-dom'
import {useDispatch} from 'react-redux'
import {add} from '../components/store/Cartslice'





function Product() {
  const dispatch=useDispatch()
  const nevigate=useNavigate()
  const [productdata,setproductdata]=useState([])
  const [qty,setqty]=useState(1)
  const {id} = useParams()
  console.log(id)
 
     const  fetchData= async()=>{
      
      const res=await fetch(`/product/${id}`,{
            method:"GET",
            headers:{
              Accept:"application/json",
              "Content-Type":"application/json"
            },
            credentials:"include"
      })
      const data= await res.json()
      
      console.log(data)
    
      setproductdata(...data)
      console.log("this is ",productdata)



     }

     useEffect(()=>{
      fetchData()
     },[])


 const change=(e)=>{
  setqty(e.target.value)
 }



const handelAdd=(...productdata)=>{
   dispatch(add(...productdata))
}










  return (
   







<div>






{/* <!-- Product details page start--> */}

    <div class="product-details-body">
        <section id="prodetails" class="section-p1">
            <div class="single-pro-image">
                <img src={`/${productdata.id}.jpg`} id="mainimg" alt=""/>
            </div>
            <div class="single-pro-details">
                <h6>
                    <Link to= '/home'>Home</Link>
                    <Link to="/nursery"> / Nursery</Link>
                </h6>
                <h4>Button Rose</h4>
                <h2><i class="fa-solid fa-indian-rupee-sign"> 200</i></h2>
                <input type="number" onChange={change}  value={qty}/>
                <button class="landing-button" onClick={()=>handelAdd(productdata)} id="offer-button">Add to Cart</button>
                <h4>Product Details</h4>
                <p>
                    Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ducimus molestiae temporibus, voluptatibus molestias quod nihil illo tempore beatae esse optio!
                    Lorem ipsum dolor, sit amet consectetur adipisicing elit. Animi perferendis aliquid ipsum, nemo eaque molestiae inventore in quod porro laboriosam nisi optio assumenda voluptatibus. Dolorem voluptatem magnam rerum officia commodi.
                </p>
            </div>
        </section>
    </div>

    {/* <!-- Product details page ends--> */}






     {/* <h1>thid is product</h1>
     <img src='/1.jpg' alt='/'></img>
      <h1>{productdata.name}</h1>
      <h2>{productdata.price}</h2>
      <button onClick={()=>handelAdd(productdata)}>Add to cart </button>
      <label>Quantity</label>
      <input    value={qty} onChange={change}></input>
     
  </div> */}
  </div>
  )
}

export default Product
