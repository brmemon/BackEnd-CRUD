const express = require("express")
const { connectMongoDb } = require("./connection")
const { logReqRes } = require("./middlewares")
const userRouter = require("./routes/user")

const app = express();
const PORT = 5000;

// // //   Connection   // // //
connectMongoDb("mongodb://127.0.0.1:27017/CRUD-first")
    .then(() => console.log("MongoDB Connected!"))

// // //   Midleware - Plugin   // // //
app.use(express.json())
app.use(express.urlencoded({ extended: false }))
app.use(logReqRes("log.txt"))

// // //   Routes   // // //
app.use("/api/users", userRouter)

app.listen(PORT, () => console.log(`Server Start At Post ${PORT}`))