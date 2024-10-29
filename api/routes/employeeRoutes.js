const express = require("express");
const { getAllEmployees, addEmployee, updateEmployee, deleteEmployee } = require("../controllers/employeeController");

const router = express.Router();

router.get("/employees",getAllEmployees);
router.post("/employees",addEmployee);
router.put("/employees/:id",updateEmployee);
router.delete("/employees/:id",deleteEmployee);

module.exports = router;