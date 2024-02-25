import { Employee, ValidationResult } from "../types/employee";
import { axiosService } from "./axios";

export const EmployeeService = {
  getEmployees: (): Promise<Employee[]> => axiosService.get("employee"),
  createEmployee: (params: object): Promise<ValidationResult> => axiosService.post("employee", params),
  deleteEmployee: (id: string) => axiosService.delete(`employee/${id}`),
  changeStatus: (id: string) => axiosService.put(`employee/${id}/change-status`, {})
};

