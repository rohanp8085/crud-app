const express = require("express")
const product = require("./product")
const connectDB = require("./backend/config/db")
 require("dotenv").config()
const app = express()


const PORT  = process.env.PORT || 5000

connectDB()

app.use(express.json())
app.use(express.urlencoded())

app.get("/" , (req,res)=>{
    res.send("i am nodemon")
})

app.use("/api" , require("./backend/Routes/TodoRoutes"))


app.listen(PORT , ()=>{
    console.log(`server is running at ${PORT}`);
})
