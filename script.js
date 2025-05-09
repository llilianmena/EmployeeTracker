// Get a reference to the #add-employees-btn element
const addEmployeesBtn = document.querySelector('#add-employees-btn');

// Collect employee data
const collectEmployees = function () {

  // TODO: Get user input to create and return an array of employee objects
  const employeeInfo = [];

  let keepGoing = true;
  while (keepGoing) {
    const firstName = window.prompt("What is the employee's first name?");
    const lastName = window.prompt("What is the employee's last name?");
    const salary = window.prompt("Enter the employee's salary");
    const employee = { firstName, lastName, salary };
    employeeInfo.push(employee);

    keepGoing = window.confirm("Do you want to add another employee?");
  }
  // Create an employee object
  return employeeInfo;
}

// Display the average salary
const displayAverageSalary = function(employeesArray) {

  // TODO: Calculate and display the average salary
  function calculateAverageSalary(salaries) {
    if (salaries.length === 0) {
        return 0;
    }
    console.log(salaries)
    const sum = salaries.reduce((acc, salary) => acc + salary.salary, 0);
    return sum / salaries.length;}
    const averageSalary = calculateAverageSalary(employeesArray);
    console.log(`The average salary is ${averageSalary}`);
}

// Select a random employee
const getRandomEmployee = function(employeesArray) {

}

/*
  ====================
  STARTER CODE
  Do not modify any of the code below this line:
*/

// Display employee data in an HTML table
const displayEmployees = function(employeesArray) {
  // Get the employee table
  const employeeTable = document.querySelector('#employee-table');

  // Clear the employee table
  employeeTable.innerHTML = '';

  // Loop through the employee data and create a row for each employee
  for (let i = 0; i < employeesArray.length; i++) {
    const currentEmployee = employeesArray[i];

    const newTableRow = document.createElement("tr");

    const firstNameCell = document.createElement("td");
    firstNameCell.textContent = currentEmployee.firstName;
    newTableRow.append(firstNameCell);

    const lastNameCell = document.createElement("td");
    lastNameCell.textContent = currentEmployee.lastName;
    newTableRow.append(lastNameCell);

    const salaryCell = document.createElement("td");
    // Format the salary as currency
    salaryCell.textContent = currentEmployee.salary.toLocaleString("en-US",{
      style:"currency",
      currency:"USD"
    });

    newTableRow.append(salaryCell);

    employeeTable.append(newTableRow);
  }
}

const trackEmployeeData = function() {
  const employees = collectEmployees();

  console.table(employees);

  displayAverageSalary(employees);

  console.log('==============================');

  getRandomEmployee(employees);

  employees.sort(function(a,b) {
    if (a.lastName < b.lastName) {
      return -1;
    } else {
      return 1;
    }
  });

  displayEmployees(employees);
}

// Add event listener to 'Add Employees' button
addEmployeesBtn.addEventListener('click', trackEmployeeData);
