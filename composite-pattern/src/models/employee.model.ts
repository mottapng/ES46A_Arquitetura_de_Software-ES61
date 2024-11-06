import { IEmployee } from "../interfaces/employee.interface";
import { EmployeeProps } from "../types/employee.type";

export class Employee implements IEmployee {
  private readonly name: string;
  private readonly salary: number;
  private readonly role: string;

  constructor(props: EmployeeProps) {
    this.name = props.name;
    this.salary = props.salary;
    this.role = props.role;
  }

  public getName(): string {
    return this.name;
  }

  public getSalary(): number {
    return this.salary;
  }

  public getDetails(): string {
    return `${this.name} - ${this.role}`;
  }
}
