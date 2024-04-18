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













const express = require("express")
const users = require("./MOCK_DATA.json")

const app = express();
const PORT = 5000;

// MidleWare - plugin
app.use(express.urlencoded({ extended: false }))

// Routes 
app.get("/users", (req, res) => {
    const html = `
    <ul>
      ${users.map((user) => `<li>${user.last_name}</li>`).join("")}
    </ul>
    `;
    res.send(html)
})

app.get("/api/users", (req, res) => {
    return res.json(users)
});

app.post("/api/users", (req, res) => {
    // Todo Create New user
    const body = req.body;
    console.log(body , "hellow body");
    return res.json({ status: "pending" })
});

app.route("/api/users:id")
    .get((req, res) => {
        const id = Number(req.params.id);
        const user = users.find((user) => user.id === id)
        return res.json(user)
    })
    .patch((req, res) => {
        // Edit User With ID
        return res.json({ status: "pending" })
    })
    .delete((req, res) => {
        // Delete User With ID
        return res.json({ status: "pending" })
    })

// app.patch("/api/users", (req, res) => {
//     // Todo Edit The user With ID
//     return res.json({ status: "pending" })
// });

// app.delete("/api/users", (req, res) => {
//     // Todo Delete The user With ID
//     return res.json({ status: "pending" })
// });

// app.get("/api/users/:id", (req, res) => {
//     const id = Number(req.params.id);
//     const user = users.find((user) => user.id === id)
//     return res.json(user)
// })


app.listen(PORT, () => console.log(`Server Start At Post ${PORT}`))
