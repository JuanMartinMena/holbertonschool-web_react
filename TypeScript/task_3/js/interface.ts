// Define el tipo RowID como un número
export type RowID = number;

// Define la interfaz RowElement que describe una fila
export interface RowElement {
  firstName: string;  // Nombre
  lastName: string;   // Apellido
  age?: number;       // Edad (opcional)
}
