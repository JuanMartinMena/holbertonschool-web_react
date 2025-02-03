/// <reference path="./interface.ts" />

// Importa los tipos RowID y RowElement desde interface.ts
import { RowID, RowElement } from './interface';

// Declara el módulo 'crud' y sus funciones
declare module 'crud' {
  export function insertRow(row: RowElement): RowID;            // Función para insertar una fila
  export function deleteRow(rowId: RowID): void;                // Función para eliminar una fila por ID
  export function updateRow(rowId: RowID, row: RowElement): RowID; // Función para actualizar una fila
}
