using EmployeeManagement.Domain.Employee;
using EmployeeManagement.Service.DTO;

namespace EmployeeManagement.Service;

public interface IEmployeeService
{
    Task<object> CreateEmployee(EmployeeDto employeeDto);

    Task<IList<Employee>> GetEmployees();

    Task<Employee> GetEmployeeById(Guid id);

    Task<object> EditEmployee(Guid id, EmployeeDto employeeDto);

    Task<Employee> ChangeStatus(Guid id);

    Task<Boolean> DeleteEmployee(Guid id);
}
