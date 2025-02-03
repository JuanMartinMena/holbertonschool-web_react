// Define the Student interface
interface Student {
    firstName: string;
    lastName: string;
    age: number;
    location: string;
  }
  
  // Create student objects
  const student1: Student = {
    firstName: "John",
    lastName: "Doe",
    age: 20,
    location: "New York",
  };
  
  const student2: Student = {
    firstName: "Jane",
    lastName: "Smith",
    age: 22,
    location: "Los Angeles",
  };
  
  // Store students in an array
  const studentsList: Student[] = [student1, student2];
  
  // Create a table and append it to the body
  const table = document.createElement("table");
  const tbody = document.createElement("tbody");
  
  // Create table headers
  const headerRow = document.createElement("tr");
  const header1 = document.createElement("th");
  const header2 = document.createElement("th");
  header1.textContent = "First Name";
  header2.textContent = "Location";
  headerRow.appendChild(header1);
  headerRow.appendChild(header2);
  tbody.appendChild(headerRow);
  
  // Populate table rows with student data
  studentsList.forEach((student) => {
    const row = document.createElement("tr");
    const cell1 = document.createElement("td");
    const cell2 = document.createElement("td");
    cell1.textContent = student.firstName;
    cell2.textContent = student.location;
    row.appendChild(cell1);
    row.appendChild(cell2);
    tbody.appendChild(row);
  });
  
  // Append tbody to the table and table to the body
  table.appendChild(tbody);
  document.body.appendChild(table);
  