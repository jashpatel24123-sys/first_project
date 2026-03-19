import { useState, useEffect } from "react";

const emptyForm = {
  firstName: "",
  lastName: "",
  jobTitle: "",
  jobDescription: "",
  jobRole: "",
};

function EmployeeForm({ onSubmit, editingEmployee, onCancelEdit }) {
  const [formData, setFormData] = useState(emptyForm);

  useEffect(() => {
    if (editingEmployee) {
      setFormData(editingEmployee);
    } else {
      setFormData(emptyForm);
    }
  }, [editingEmployee]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (Object.values(formData).some((v) => v.trim() === "")) {
      alert("Please fill in all fields.");
      return;
    }
    onSubmit(formData);
    setFormData(emptyForm);
  };

  const isEditing = Boolean(editingEmployee);

  return (
    <form className="employee-form" onSubmit={handleSubmit}>
      <h2>{isEditing ? "Edit Employee" : "Add Employee"}</h2>

      <div className="form-row">
        <div className="form-group">
          <label htmlFor="firstName">First Name</label>
          <input
            id="firstName"
            name="firstName"
            type="text"
            placeholder="First Name"
            value={formData.firstName}
            onChange={handleChange}
          />
        </div>

        <div className="form-group">
          <label htmlFor="lastName">Last Name</label>
          <input
            id="lastName"
            name="lastName"
            type="text"
            placeholder="Last Name"
            value={formData.lastName}
            onChange={handleChange}
          />
        </div>
      </div>

      <div className="form-row">
        <div className="form-group">
          <label htmlFor="jobTitle">Job Title</label>
          <input
            id="jobTitle"
            name="jobTitle"
            type="text"
            placeholder="Job Title"
            value={formData.jobTitle}
            onChange={handleChange}
          />
        </div>

        <div className="form-group">
          <label htmlFor="jobRole">Job Role</label>
          <input
            id="jobRole"
            name="jobRole"
            type="text"
            placeholder="Job Role"
            value={formData.jobRole}
            onChange={handleChange}
          />
        </div>
      </div>

      <div className="form-group">
        <label htmlFor="jobDescription">Job Description</label>
        <textarea
          id="jobDescription"
          name="jobDescription"
          placeholder="Job Description"
          rows={3}
          value={formData.jobDescription}
          onChange={handleChange}
        />
      </div>

      <div className="form-actions">
        <button type="submit" className="btn btn-primary">
          {isEditing ? "Update Employee" : "Add Employee"}
        </button>
        {isEditing && (
          <button type="button" className="btn btn-secondary" onClick={onCancelEdit}>
            Cancel
          </button>
        )}
      </div>
    </form>
  );
}

export default EmployeeForm;
