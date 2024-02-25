using EmployeeManagement.Domain.Employee;
using Microsoft.EntityFrameworkCore;

namespace EmployeeManagement.Persistance;

public class DataContext : DbContext
{
    public DbSet<Employee> Employees { get; set; }

    public DataContext(DbContextOptions<DataContext> options)
        : base(options) { }
}
