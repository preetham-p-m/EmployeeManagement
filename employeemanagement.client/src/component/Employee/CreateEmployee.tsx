import { SyntheticEvent, useState } from "react";
import "./CreateEmployee.css";
import { EmployeeService } from "../../service/employee";
import { useNavigate } from "react-router-dom";

const CreateEmployye = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    name: "",
    date: "",
  });
  const [errorList, setErrorList] = useState<string[]>();

  const handleSubmit = (e: SyntheticEvent) => {
    e.preventDefault();
    EmployeeService.createEmployee(formData).then((response) => {
      if (response?.isValid != null) {
        const errs: string[] = [];
        response.errors.forEach((error) => errs.push(error.errorMessage));
        setErrorList(errs);
      } else {
        navigate("/");
      }
    });
  };

  return (
    <div className="createEmployee">
      <h2>Create Employee</h2>
      <form onSubmit={handleSubmit}>
        <label htmlFor="name">Name:</label>
        <input
          type="text"
          id="name"
          name="name"
          value={formData.name}
          onChange={(e) => setFormData({ ...formData, name: e.target.value })}
        />

        <label htmlFor="date">Date of Birth:</label>
        <input
          type="date"
          id="date"
          name="date"
          value={formData.date}
          onChange={(e) => setFormData({ ...formData, date: e.target.value })}
        />
        <button type="submit">Submit</button>
      </form>
      {errorList?.toString()}
    </div>
  );
};

export default CreateEmployye;
