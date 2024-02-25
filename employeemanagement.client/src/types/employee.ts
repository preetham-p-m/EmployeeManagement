export interface Employee {
  id: string;
  name: string,
  dateOfBirth: Date,
  employeeNumber: number;
  status: number;
}

export interface ValidationResult {
  isValid: boolean;
  errors: { errorMessage: string; }[];
}