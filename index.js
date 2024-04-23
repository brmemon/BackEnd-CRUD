const express = require("express")
const app = express();
const PORT = 5000;
app.use(express.json())
app.use(express.urlencoded({ extended: false }))

const userRouter = require("./routes/user")
const { connectMongoDb } = require("./connection")
const { logReqRes } = require("./middlewares")


app.use(logReqRes("log.txt"))
connectMongoDb("mongodb://127.0.0.1:27017/CRUD-first")
app.use("/user", userRouter)

app.listen(PORT, () => console.log(`Server Start At Post ${PORT}`))









// const express = require("express");
// const app = express();

// app.get("/ports", (request, response) => {
//     response.send({
//         name: "Kamil"
//     })
// })


// app.get("/nodejs", (request, response) => {
//     response.send({
//         name: "Hammad"
//     })
// })


// app.listen(7777, () => {
//     console.log("Server Is Running On Port 7777");
// })












// const students = [
//     {
//         id: "1", name: "Hammad", age: "18"
//     },
//     {
//         id: "2", name: "Kamil", age: "19"
//     },
//     {
//         id: "3", name: "Raheel", age: "20"
//     },
// ]

// // CRUD

// // READ api

// console.log("READ Students Data", students);

// //CREATE api

// students.push({
//     id: "4", name: "Hashim Bhai", age: "30"
// },)

// console.log("CREATE Student Data", students);

// //DELETE api

// const deleteStudent = students.filter((minus) => {
//     return minus.id != 4
// })

// const idsToDelete = ["1", "3"];

// const filteredStudents = students.filter(student => !idsToDelete.includes(student.id));

// console.log(filteredStudents);

// console.log("DELETE Student Data", deleteStudent);

// // UPDATE api

// const indexStudent = students.findIndex((update) => {
//     return update.id == 3
// })
// const updateStudent = students[indexStudent].name = "Bilal";

// console.log("UPDATE Student Data", updateStudent);


// console.log(students);












