import dotenv from "dotenv"
dotenv.config()
import app from "./app.js"
import connectDb from "./config/db.js"

// database connection
connectDb()

app.listen(process.env.PORT, () => {
    console.log(`server is running on http://localhost:${process.env.PORT}`) //  Use backticks
})