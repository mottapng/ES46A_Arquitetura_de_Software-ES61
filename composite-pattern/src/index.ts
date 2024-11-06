import { Employee } from "./models/employee.model";
import { Department } from "./models/department.model";

const employee1 = new Employee({
  name: "João da Silva",
  salary: 5000,
  role: "Desenvolvedor",
});

const employee2 = new Employee({
  name: "Maria Oliveira",
  salary: 6000,
  role: "Designer",
});

const employee3 = new Employee({
  name: "Carlos Souza",
  salary: 7000,
  role: "Gerente",
});

const techDepartment = new Department({
  name: "Departamento de Desenvolvimento",
  description: "Equipe de Desenvolvimento de Software",
});

const designDepartment = new Department({
  name: "Departamento de Design",
  description: "Equipe Criativa",
});

const projectsDepartment = new Department({
  name: "Departamento de Projetos",
  description: "Equipe de Projetos",
});

techDepartment.addEmployee(employee1);
techDepartment.addEmployee(employee3);
designDepartment.addEmployee(employee2);

projectsDepartment.addEmployee(techDepartment);
projectsDepartment.addEmployee(designDepartment);

console.log("Estrutura:");
console.log(projectsDepartment.getDetails());

console.log("\nSalário Total:", projectsDepartment.getSalary());
