import { IEmployee } from "../interfaces/employee.interface";
import { DepartmentProps } from "../types/employee.type";

export class Department implements IEmployee {
  private readonly name: string;
  private readonly description: string;
  private readonly employees: IEmployee[];

  constructor(props: DepartmentProps) {
    this.name = props.name;
    this.description = props.description;
    this.employees = [];
  }

  public addEmployee(employee: IEmployee): void {
    this.employees.push(employee);
  }

  public removeEmployee(employeeName: string): void {
    const index = this.employees.findIndex(
      (emp) => emp.getName() === employeeName
    );
    if (index !== -1) {
      this.employees.splice(index, 1);
    }
  }

  public getName(): string {
    return this.name;
  }

  public getSalary(): number {
    return this.employees.reduce(
      (total, employee) => total + employee.getSalary(),
      0
    );
  }

  public getDetails(): string {
    const employeeDetails = this.employees
      .map((emp) => `  - ${emp.getDetails()}`)
      .join("\n");
    return `${this.name} (${this.description})\n${employeeDetails}`;
  }
}
