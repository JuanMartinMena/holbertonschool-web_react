/// <reference path="./crud.d.ts" />  // Importa las declaraciones de tipo desde crud.d.ts

// Importa los tipos RowID y RowElement desde interface.ts
import { RowID, RowElement } from './interface';

// Importa todas las funciones del archivo crud.js
import * as CRUD from './crud';

// Crea una fila de tipo RowElement
const row: RowElement = {
  firstName: 'Guillaume',
  lastName: 'Salva'
};

// Llama a insertRow y obtiene el nuevo ID
const newRowID: RowID = CRUD.insertRow(row);

// Crea una nueva fila actualizada con edad
const updatedRow: RowElement = { ...row, age: 23 };

// Llama a updateRow para actualizar la fila
CRUD.updateRow(newRowID, updatedRow);

// Llama a deleteRow para eliminar la fila
CRUD.deleteRow(newRowID);
