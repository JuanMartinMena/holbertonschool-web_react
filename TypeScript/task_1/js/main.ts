// Define the Teacher interface
interface Teacher {
    readonly firstName: string;
    readonly lastName: string;
    fullTimeEmployee: boolean;
    yearsOfExperience?: number;
    location: string;
    [key: string]: any;
  }
  
  // Define the Directors interface extending Teacher
  interface Directors extends Teacher {
    numberOfReports: number;
  }
  
  // Define the function interface
  interface printTeacherFunction {
    (firstName: string, lastName: string): string;
  }
  
  // Implement the function
  const printTeacher: printTeacherFunction = (firstName, lastName) => {
    return `${firstName.charAt(0)}. ${lastName}`;
  };
  
  // Define an interface for StudentClass constructor
  interface StudentConstructor {
    firstName: string;
    lastName: string;
  }
  
  // Define an interface for StudentClass
  interface StudentClassInterface {
    workOnHomework(): string;
    displayName(): string;
  }
  
  // Implement the StudentClass
  class StudentClass implements StudentClassInterface {
    firstName: string;
    lastName: string;
  
    constructor({ firstName, lastName }: StudentConstructor) {
      this.firstName = firstName;
      this.lastName = lastName;
    }
  
    workOnHomework(): string {
      return "Currently working";
    }
  
    displayName(): string {
      return this.firstName;
    }
  }
  
  // Create a Teacher object with additional properties
  const teacher3: Teacher = {
    firstName: "John",
    lastName: "Doe",
    fullTimeEmployee: false,
    location: "London",
    contract: false,
  };
  
  console.log(teacher3);
  
  // Create a Director object
  const director1: Directors = {
    firstName: "John",
    lastName: "Doe",
    location: "London",
    fullTimeEmployee: true,
    numberOfReports: 17,
  };
  
  console.log(director1);
  
  // Test printTeacher function
  console.log(printTeacher("John", "Doe"));
  
  // Test StudentClass
  const student1 = new StudentClass({ firstName: "Alice", lastName: "Smith" });
  console.log(student1.displayName());
  console.log(student1.workOnHomework());
  