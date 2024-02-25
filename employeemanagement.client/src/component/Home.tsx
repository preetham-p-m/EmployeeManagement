import { useEffect, useState } from "react";
import { EmployeeService } from "../service/employee";
import { Employee } from "../types/employee";

const Home = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [employeeList, setEmployeeList] = useState<Employee[]>();

  useEffect(() => {
    setIsLoading(true);
    EmployeeService.getEmployees().then((result) => setEmployeeList(result));
    setIsLoading(false);
  }, []);

  if (isLoading) {
    return <div>Loading</div>;
  }

  return (
    <table className="table table-striped" aria-labelledby="tabelLabel">
      <thead>
        <tr>
          <th>Employee Number</th>
          <th>Name</th>
          <th>Date of Birth</th>
          <th>Status</th>
        </tr>
      </thead>
      <tbody>
        {employeeList?.map((employee) => (
          <tr key={employee.id}>
            <td>{employee.employeeNumber}</td>
            <td>{employee.name}</td>
            <td>{employee.dateOfBirth.toString()}</td>
            <td>{employee.status}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default Home;
