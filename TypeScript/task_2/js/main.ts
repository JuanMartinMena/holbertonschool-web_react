// Define the TeacherInterface
interface TeacherInterface {
    workFromHome(): string;
    getCoffeeBreak(): string;
    workTeacherTasks(): string;
  }
  
  // Define the DirectorInterface
  interface DirectorInterface {
    workFromHome(): string;
    getCoffeeBreak(): string;
    workDirectorTasks(): string;
  }
  
  // Implement the Director class
  class Director implements DirectorInterface {
    workFromHome(): string {
      return "Working from home";
    }
    getCoffeeBreak(): string {
      return "Getting a coffee break";
    }
    workDirectorTasks(): string {
      return "Getting to director tasks";
    }
  }
  
  // Implement the Teacher class
  class Teacher implements TeacherInterface {
    workFromHome(): string {
      return "Cannot work from home";
    }
    getCoffeeBreak(): string {
      return "Cannot have a break";
    }
    workTeacherTasks(): string {
      return "Getting to work";
    }
  }
  
  // Function to create an Employee
  function createEmployee(salary: number | string): Teacher | Director {
    if (typeof salary === "number" && salary < 500) {
      return new Teacher();
    }
    return new Director();
  }
  
  // Function to check if an employee is a Director
  function isDirector(employee: Teacher | Director): employee is Director {
    return employee instanceof Director;
  }
  
  // Function to execute work based on employee type
  function executeWork(employee: Teacher | Director): void {
    if (isDirector(employee)) {
      console.log(employee.workDirectorTasks());
    } else {
      console.log(employee.workTeacherTasks());
    }
  }
  
  // String literal type for Subjects
  type Subjects = "Math" | "History";
  
  // Function to teach a class
  function teachClass(todayClass: Subjects): string {
    return `Teaching ${todayClass}`;
  }
  
  // Testing functions
  console.log(createEmployee(200)); // Teacher
  console.log(createEmployee(1000)); // Director
  console.log(createEmployee("$500")); // Director
  
  executeWork(createEmployee(200)); // Getting to work
  executeWork(createEmployee(1000)); // Getting to director tasks
  
  console.log(teachClass("Math")); // Teaching Math
  console.log(teachClass("History")); // Teaching History
  