import axios from "axios";
import { Employee } from "../models/Employee";

const apiUrl = "http://172.20.10.7:3000/api/employees";

export const getEmployees = async (): Promise<Employee[]> => {
  const response = await axios.get(apiUrl);
  return response.data;
};

export const addEmployee = async (employee: Omit<Employee, "id">): Promise<Employee> => {
  const response = await axios.post(apiUrl, employee);
  return response.data;
};

export const updateEmployee = async (id: string, employee: Omit<Employee, "id">): Promise<Employee> => {
  const response = await axios.put(`${apiUrl}/${id}`, employee);
  return response.data;
};

export const deleteEmployee = async (id: string): Promise<void> => {
  await axios.delete(`${apiUrl}/${id}`);
};
