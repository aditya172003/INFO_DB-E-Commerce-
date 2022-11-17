const { json } = require('express')
const express = require('express')
const { model } = require('mongoose')
const authenticate = require('../authenticate')
const router = express.Router()
require("../DB/conn")

const cookieParser = require('cookie-parser')
const User = require("../model/Login_Schema")

const Info = require("../model/schema")
const app = express()
const bcrypt = require("bcrypt")
app.use(cookieParser())
router.get("/inf", async (req, res) => {

  const inf = await Info.find({})
 


  res.json(inf)

})





router.post('/info', (req, res) => {
  console.log(req.body)

  const { name, type, id, price, description, special, delivery } = req.body;
  if (!name || !type || !id || !price || !description || !special || !delivery) {
    return res.status(422).json({ error: "Fill the data first" })
  }


  Info.findOne({ name: name }).then((userE) => {
    if (userE) {
      return res.status(423).json({ error: "Already filled data about this plant" })

    }
    else {  
      const info = new Info({ name, type, id, price, description, special, delivery })

      console.log(Info)



      info.save().then(() => {
        res.status(201).json({ messsage: "saved successfully" })
      })
    }
  }).catch((err) => {
    res.status(500).json({ message: "not saved" })
  })
}

)


router.get('/product/:id',async(req,res)=>{
  const id=req.params.id
  console.log(id)
  const data = await Info.find({id:id})

  console.log(data)
  res.send(data)

})









router.post("/register", (req, res) => {
  console.log(req.body)
  const { name, email, phone, password, cpassword } = req.body;
  if (!name || !email || !phone || !password || !cpassword) {
    return res.status(422).json({ error: "Fill the data first" })
  }


  User.findOne({ email: email }).then((userE) => {
    if (userE) {
      return res.status(423).json({ error: "User already exist" })

    }
    if(password!=cpassword){
      return res.status(425).json({error:"check the password"})
    }
    else {
      const user = new User({ name, email, phone, password, cpassword })





      user.save().then(() => {
        res.status(201).json({ messsage: "saved successfully" })
      })
    }
  }).catch((err) => {
    res.status(500).json({ message: "not saved" })
  })
}


)



router.post("/login", async (req, res) => {
  try {
    const { email, password } = req.body

    if (!email || !password) {

      return res.status(422).json({ error: "Fill the data first" })
    }
    else {

      const aaa = await User.findOne({ email: email })
      if (aaa) {


        const isMatch = await bcrypt.compare(password, aaa.password)  //user entered password ,password saved on database
        let token = await aaa.generateAuthToken()
        console.log(token)
        res.cookie("jwt_login", token, {
            
        })


        if (isMatch) {

          // res.status(400).json({error:"Invalid cradentials"})
          res.json({ message: "user signin successfully" })
        }
        else {
          res.status(400).json({ error: "Invalid cradentials" })
          // res.json({message:"user signin successfully"})
        }
      }
      else {
        res.status(401).json({ error: "Invalid cradentials" })
      }



    }
   


  }




  catch (err) {
    console.log(err)
  }
}
)
router.post("/search", async (req, res) => {
  try {
   const {nam}=req.body
console.log(nam)
    const backres = await Info.findOne({ name: nam})
    res.send(backres)
    console.log(backres)
   

  } catch (err) {
    console.log(err)
  }
})

router.get("/cart",authenticate,(req,res)=>{
  res.send(req.rootUser)
})



module.exports = router
