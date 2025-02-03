/// <reference path="Teacher.ts" />
/// <reference path="Subject.ts" />

namespace Subjects {
    // Fusion de declaración: agrega experienceTeachingC a Teacher
    export interface Teacher {
      experienceTeachingC?: number;
    }
  
    export class Cpp extends Subject {
      constructor(teacher: Teacher) {
        super(teacher);
      }
  
      getRequirements(): string {
        return "Here is the list of requirements for Cpp";
      }
  
      getAvailableTeacher(): string {
        return this.teacher.experienceTeachingC 
          ? `Available Teacher: ${this.teacher.firstName}` 
          : "No available teacher";
      }
    }
  }
  