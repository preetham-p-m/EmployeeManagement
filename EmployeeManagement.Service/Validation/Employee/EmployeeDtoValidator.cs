using EmployeeManagement.Service.DTO;
using FluentValidation;

namespace EmployeeManagement.Service.Validation
{
    public class EmployeeDtoValidator : AbstractValidator<EmployeeDto>
    {
        public EmployeeDtoValidator()
        {
            RuleFor(a => a.Name).NotEmpty().MinimumLength(3).MaximumLength(50);
        }
    }
}
