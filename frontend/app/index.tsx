import React, { useState, useEffect } from "react";
import axios from "axios";
import {
  Text,
  View,
  TextInput,
  Button,
  ScrollView,
  TouchableOpacity,
  StyleSheet,
} from "react-native";
import { Employee } from "./models/Employee";

// Definição da interface para o tipo Employee com ID

export default function EmployeeCrud() {
  const [name, setName] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const [employees, setEmployees] = useState<Employee[]>([]);
  const [editingId, setEditingId] = useState<string | null>(null);

  const apiUrl = "http://172.20.10.7:3000/api/employees"; // Altere para o URL do seu backend

  const fetchEmployees = async () => {
    try {
      const response = await axios.get<Employee[]>(apiUrl);
      setEmployees(response.data);
    } catch (error) {
      console.error("Erro ao buscar funcionários:", error);
    }
  };

  useEffect(() => {
    fetchEmployees();
  }, []);

  const handleAddOrEditEmployee = async () => {
    const employeeData: Omit<Employee, "id"> = { name, email };

    if (editingId) {
      // Editar funcionário
      await axios.put(`${apiUrl}/${editingId}`, employeeData);
      setEditingId(null);
    } else {
      // Adicionar novo funcionário
      await axios.post(apiUrl, employeeData);
    }
    fetchEmployees(); // Recarregar a lista de funcionários
    setName("");
    setEmail("");
  };

  const handleRemoveEmployee = async (id: string) => {
    await axios.delete(`${apiUrl}/${id}`);
    fetchEmployees(); // Recarregar a lista de funcionários
  };

  const handleEditEmployee = (employee: Employee) => {
    setName(employee.name);
    setEmail(employee.email);
    setEditingId(employee.id);
  };

  return (
    <View style={styles.container}>
      <TextInput
        placeholder="Nome"
        value={name}
        onChangeText={setName}
        style={styles.input}
        placeholderTextColor="#888"
      />
      <TextInput
        placeholder="Email"
        value={email}
        onChangeText={setEmail}
        style={styles.input}
        keyboardType="email-address"
        placeholderTextColor="#888"
      />
      <Button
        title={editingId ? "Atualizar Funcionário" : "Adicionar Funcionário"}
        onPress={handleAddOrEditEmployee}
      />

      <ScrollView style={styles.scrollView}>
        {employees.map((employee) => (
          <View key={employee.id} style={styles.employeeContainer}>
            <Text style={styles.employeeText}>
              {employee.name} - {employee.email}
            </Text>
            <TouchableOpacity
              onPress={() => handleEditEmployee(employee)}
              style={styles.editButton}
            >
              <Text style={styles.buttonText}>Editar</Text>
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => handleRemoveEmployee(employee.id)}
              style={styles.deleteButton}
            >
              <Text style={styles.buttonText}>Remover</Text>
            </TouchableOpacity>
          </View>
        ))}
      </ScrollView>
    </View>
  );
}

// Estilos para a interface
const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: "#f0f0f0",
  },
  input: {
    height: 40,
    borderColor: "#ccc",
    borderWidth: 1,
    marginBottom: 10,
    paddingLeft: 8,
    borderRadius: 5,
    backgroundColor: "white",
  },
  scrollView: {
    marginTop: 20,
  },
  employeeContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    marginBottom: 10,
    padding: 10,
    backgroundColor: "#e1e1e1",
    borderRadius: 5,
  },
  employeeText: {
    fontSize: 16,
  },
  editButton: {
    backgroundColor: "#007bff",
    padding: 5,
    borderRadius: 5,
    marginRight: 5,
  },
  deleteButton: {
    backgroundColor: "#ff4d4d",
    padding: 5,
    borderRadius: 5,
  },
  buttonText: {
    color: "white",
    fontWeight: "bold",
  },
});
