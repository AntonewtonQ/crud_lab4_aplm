const employeeService = require("../services/employeeService");

const getAllEmployees = (req,res) =>{
    res.json(employeeService.getEmployees());
};

const addEmployee=(req,res) =>{
    const {name,email}=req.body;
    const newEmployee = employeeService.addEmployee(name,email);
    res.status(201).json(newEmployee);
};

const updateEmployee = (req, res) => {
    const { id } = req.params;
    const { name, email } = req.body;
    const updatedEmployee = employeeService.updateEmployee(id, name, email);
    if (!updatedEmployee) return res.sendStatus(404);
    res.json(updatedEmployee);
  };
  
  const deleteEmployee = (req, res) => {
    const { id } = req.params;
    const deletedEmployee = employeeService.deleteEmployee(id);
    if (!deletedEmployee) return res.sendStatus(404);
    res.sendStatus(204);
  };
  
  module.exports = { getAllEmployees, addEmployee, updateEmployee, deleteEmployee };