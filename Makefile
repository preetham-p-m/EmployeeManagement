build:
	dotnet build

run:
	dotnet run --project EmployeeManagement.Server/EmployeeManagement.Server.csproj

watch:
	dotnet watch --project EmployeeManagement.Server/EmployeeManagement.Server.csproj

migrate:
	dotnet ef migrations add <Message> -s EmployeeManagement.Server -p EmployeeManagement.Persistance
