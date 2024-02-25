import { useEffect, useState } from "react";
import { EmployeeService } from "../service/employee";
import { Employee } from "../types/employee";
import "./Home.css";
import { useNavigate } from "react-router-dom";

const Home = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [employeeList, setEmployeeList] = useState<Employee[]>();
  const navigate = useNavigate();

  useEffect(() => {
    setIsLoading(true);
    EmployeeService.getEmployees().then((result) => setEmployeeList(result));
    setIsLoading(false);
  }, []);

  const onClickCreateEmployee = () => {
    navigate("create");
  };

  const onClickDeleteEmployee = (employee: Employee) => {
    EmployeeService.deleteEmployee(employee.id).then(() =>
      setEmployeeList(employeeList?.filter((f) => f.id != employee.id))
    );
  };

  const onClickStatus = (employee: Employee) => {
    EmployeeService.changeStatus(employee.id).then(() =>
      setEmployeeList(
        employeeList?.map((e) => {
          if (e.id === employee.id) e.status = e.status === 0 ? 1 : 0;
          return e;
        })
      )
    );
  };

  if (isLoading) {
    return <div>Loading</div>;
  }

  return (
    <>
      <button className="create-button" onClick={onClickCreateEmployee}>
        Creart Employee
      </button>
      <table className="table-fixed">
        <thead>
          <tr>
            <th>Employee Number</th>
            <th>Name</th>
            <th>Date of Birth</th>
            <th>Status</th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          {employeeList?.map((employee) => (
            <tr key={employee.id}>
              <td>{employee.employeeNumber}</td>
              <td>{employee.name}</td>
              <td>{employee.dateOfBirth.toString().substring(0, 10)}</td>
              <td onClick={() => onClickStatus(employee)}>
                {employee.status === 0 ? "Inactive" : "Active"}
              </td>
              <td>
                <button
                  className="delete-button"
                  onClick={() => onClickDeleteEmployee(employee)}
                >
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </>
  );
};

export default Home;
