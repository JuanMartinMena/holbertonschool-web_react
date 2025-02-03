// Definición de la interfaz MajorCredits
export interface MajorCredits {
    credits: number;
    brand: string;
  }
  
  // Definición de la interfaz MinorCredits
  export interface MinorCredits {
    credits: number;
    brand: string;
  }
  
  // Función para sumar los créditos de MajorCredits
  export function sumMajorCredits(subject1: MajorCredits, subject2: MajorCredits): MajorCredits {
    return {
      credits: subject1.credits + subject2.credits,
      brand: subject1.brand // Utilizamos la marca del primer subject
    };
  }
  
  // Función para sumar los créditos de MinorCredits
  export function sumMinorCredits(subject1: MinorCredits, subject2: MinorCredits): MinorCredits {
    return {
      credits: subject1.credits + subject2.credits,
      brand: subject1.brand // Utilizamos la marca del primer subject
    };
  }
  