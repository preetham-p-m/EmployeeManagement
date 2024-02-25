using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using EmployeeManagement.Domain.Enums;

namespace EmployeeManagement.Domain.Employee;

public class Employee
{
    [Key]
    public Guid Id { get; set; }

    public string Name { get; set; }

    [DatabaseGenerated(DatabaseGeneratedOption.Identity)]
    public long EmployeeNumber { get; set; }

    public DateTime DateOfBirth { get; set; }

    public EmployeeStatus Status { get; set; }

    public Employee() { }
}
