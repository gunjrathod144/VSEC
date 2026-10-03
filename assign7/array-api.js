const express = require("express");

const app = express();

app.use(express.json());

let students = [
    { id: 1, name: "Gunj", age: 20, marks: 85 },
    { id: 2, name: "Rahul", age: 21, marks: 78 }
];

// GET - Show all students
app.get("/students", (req, res) => {
    res.json(students);
});

// POST - Add student
app.post("/students", (req, res) => {

    students.push(req.body);

    res.json({
        message: "Student added"
    });
});

// PUT - Update student
app.put("/students/:id", (req, res) => {

    let id = Number(req.params.id);

    let student = students.find(s => s.id === id);

    if (!student) {
        return res.json({
            message: "Student not found"
        });
    }

    student.name = req.body.name;
    student.age = req.body.age;
    student.marks = req.body.marks;

    res.json({
        message: "Student updated",
        student: student
    });
});

// DELETE - Delete student
app.delete("/students/:id", (req, res) => {

    let id = Number(req.params.id);

    students = students.filter(s => s.id !== id);

    res.json({
        message: "Student deleted"
    });
});

// Start server
app.listen(3000, () => {
    console.log("Server running on port 3000");
});
