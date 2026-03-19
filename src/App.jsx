import { useState } from "react";
import EmployeeForm from "./components/EmployeeForm";
import EmployeeTable from "./components/EmployeeTable";
import "./App.css";

function App() {
  const [employees, setEmployees] = useState([]);
  const [editingEmployee, setEditingEmployee] = useState(null);

  const handleSubmit = (formData) => {
    if (editingEmployee) {
      setEmployees((prev) =>
        prev.map((emp) =>
          emp.id === editingEmployee.id ? { ...formData, id: emp.id } : emp
        )
      );
      setEditingEmployee(null);
    } else {
      const newEmployee = { ...formData, id: Date.now() };
      setEmployees((prev) => [...prev, newEmployee]);
    }
  };

  const handleEdit = (employee) => {
    setEditingEmployee(employee);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const handleDelete = (id) => {
    if (window.confirm("Are you sure you want to delete this employee?")) {
      setEmployees((prev) => prev.filter((emp) => emp.id !== id));
      if (editingEmployee?.id === id) setEditingEmployee(null);
    }
  };

  const handleCancelEdit = () => {
    setEditingEmployee(null);
  };

  return (
    <div className="app-container">
      <header className="app-header">
        <h1>Employee Management</h1>
        <p className="subtitle">Manage your team with ease</p>
      </header>

      <main>
        <section className="form-section">
          <EmployeeForm
            onSubmit={handleSubmit}
            editingEmployee={editingEmployee}
            onCancelEdit={handleCancelEdit}
          />
        </section>

        <section className="table-section">
          <h2>Employee List <span className="count">({employees.length})</span></h2>
          <EmployeeTable
            employees={employees}
            onEdit={handleEdit}
            onDelete={handleDelete}
          />
        </section>
      </main>
    </div>
  );
}

export default App;