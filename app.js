const express = require("express");
const cors = require("cors");
const app = express();
app.use(express.json());


const studentRoutes = require("./routes/students.routes");
app.use(cors());

app.use('/api/students', studentRoutes);

app.get("/", (req, res) =>{
    res.send("API is running...");
});
    
module.exports = app;