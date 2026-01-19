const express = require("express");

const router = express.Router();

const {
    getStudents, getStudent, addStudent, editStudent, changeStudentStatusOnly, removeEmployee
} =  require("../controllers/students.controllers");

router.get('/',getStudents);
router.get('/:id',getStudent);
router.post('/',addStudent);
router.put('/:id',editStudent);
router.patch('/:id/status',changeStudentStatusOnly);
router.delete('/:id',removeEmployee);



module.exports = router;