
using EmployeeManagement.Service.DTO;
using EmployeeManagement.Service.Validation;
using FluentValidation;

namespace API.Extension
{
    public static class ValidationHelper
    {
        public static IServiceCollection AddValidators(this IServiceCollection services)
        {
            services.AddTransient<IValidator<EmployeeDto>, EmployeeDtoValidator>();

            return services;
        }
    }
}
