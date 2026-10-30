import express from "express"



const app = express()

// middleware
app.use(express.json())


// demo route
app.get("/demo" , (req,res)=>{
    res.status(200).json({
        success : true,
        message: "The demo route is working"
    })
})


export default app