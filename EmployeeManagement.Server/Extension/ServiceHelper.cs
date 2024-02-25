using EmployeeManagement.Service;

namespace API.Extension
{
    public static class ServiceHelper
    {
        public static IServiceCollection AddServices(this IServiceCollection services)
        {
            services.AddTransient<IEmployeeService, EmployeeService>();

            return services;
        }
    }
}
