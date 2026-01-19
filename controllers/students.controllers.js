const Students = require("../models/students.models");

const getStudents = async (req, res) => {
    try{
        const students = await Students.getAllStudents();
        res.json(students);
    } catch(error){
        res.status(500).json({ message: error.message });
    }
    
};

const getStudent = async (req, res) => {
    try{
        const students = await Students.getStudentsById(req.params.id);

        if (!students) {
            return res.status(404).json({ message: "Student not found"});


        }
        res.json(students);
    } catch(err){
        res.status(500).json({ message: err.message });
    }
    
};

const addStudent = async (req, res) => {
    try{
        const result = await Students.createStudent(req.body);
        res.status(201).json({
            id:result.insertId,
            ...req.body,

            
        });
        
            
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

const editStudent = async (req, res) => {
    try{
        await Students.updateStudent(req.params.id, req.body);
        res.json({ message: "Student updated successfully"});
        
            
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
};


const changeStudentStatusOnly = async (req, res) => {
    try{
        const {status} = req.body;

        await Students.updateStudentStatusOnly(req.params.id, status);
        res.json({ message: "Status updated successfully"});
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
};

const removeEmployee = async (req, res) => {
    try{
        await Students.deleteStudent(req.params.id);
        res.json({ message: "Employee Deleted successfully"});
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
};


module.exports = {
  getStudents,
  getStudent,
  addStudent,
  editStudent,
  changeStudentStatusOnly,
  removeEmployee,
};