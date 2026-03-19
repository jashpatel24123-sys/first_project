function EmployeeTable({ employees, onEdit, onDelete }) {
  if (employees.length === 0) {
    return (
      <div className="empty-state">
        <p>No employees yet. Add one using the form above.</p>
      </div>
    );
  }

  return (
    <div className="table-wrapper">
      <table className="employee-table">
        <thead>
          <tr>
            <th>#</th>
            <th>First Name</th>
            <th>Last Name</th>
            <th>Job Title</th>
            <th>Job Description</th>
            <th>Job Role</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {employees.map((emp, index) => (
            <tr key={emp.id}>
              <td>{index + 1}</td>
              <td>{emp.firstName}</td>
              <td>{emp.lastName}</td>
              <td>{emp.jobTitle}</td>
              <td>{emp.jobDescription}</td>
              <td>{emp.jobRole}</td>
              <td className="actions-cell">
                <button className="btn btn-edit" onClick={() => onEdit(emp)}>
                  Edit
                </button>
                <button className="btn btn-delete" onClick={() => onDelete(emp.id)}>
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default EmployeeTable;
