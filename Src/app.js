import express from "express"
import authRouter from "./Auth/userAuthrRoutes"


const app = express()

// middleware
app.use(express.json())
// default prefix routes for all the authroutes
app.use("/api/auth", authRouter)


// demo route
app.get("/demo" , (req,res)=>{
    res.status(200).json({
        success : true,
        message: "The demo route is working"
    })
})


export default app