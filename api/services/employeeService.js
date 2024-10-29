const Employee = require("../models/employee");
const {v4 : uuidv4}=require("uuid");

const employees =[];

const getEmployees = ()=>employees;

const addEmployee = (name,email)=>{
    const newEmployee= new Employee(uuidv4(), name,email);
    employees.push(newEmployee);
    return newEmployee;
}

const updateEmployee = (id, name, email) =>{
    const employeeIndex = employees.findIndex(emp =>emp.id ===id);
    if(employeeIndex===-1) return null;
    employees[employeeIndex]={...employees[employeeIndex],name,email};
    return employees[employeeIndex];
}

const deleteEmployee = (id) =>{
    const employeeIndex = employees.findIndex(emp =>emp.id ===id);
    if(employeeIndex===-1) return null;
    return employees.splice(employeeIndex, 1)[0];
}

module.exports ={getEmployees,addEmployee,updateEmployee,deleteEmployee};