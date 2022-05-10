const employees = [
  {
    name: 'Atticus',
    employeeNumber: '2405',
    annualSalary: '47000',
    reviewRating: 3
  },
  {
    name: 'Jem',
    employeeNumber: '62347',
    annualSalary: '63500',
    reviewRating: 4
  },
  {
    name: 'Scout',
    employeeNumber: '6243',
    annualSalary: '74750',
    reviewRating: 5
  },
  {
    name: 'Robert',
    employeeNumber: '26835',
    annualSalary: '66000',
    reviewRating: 1
  },
  {
    name: 'Mayella',
    employeeNumber: '89068',
    annualSalary: '35000',
    reviewRating: 1
  }
];

// YOU SHOULD NOT NEED TO CHANGE ANYTHING ABOVE THIS POINT

// This problem is massive! Break the problem down, take small steps, and test as you go.
// What is the fewest lines of code I can write and test to get just a little closer?

// This is not a race. Everyone on your team should understand what is happening.
// Ask questions when you don't.

console.log(employees);

// Entry point for all functions
function loopEmp(employees) {
  let allEmp = [];
  for (let employee of employees) {
    console.log('Goal 1:', employee) // goal 1

    // Set the `updateEmp` return value to a variable
    let updatedEmployee = updateEmp(employee);
    console.log('Updated emp:', updatedEmployee);
    allEmp.push(updatedEmployee);
  }
  return allEmp;
}


function updateEmp(employee) {

  // Initalize bonus variable
  let bonus;

  if (employee.reviewRating <= 2) {
    bonus = 0;
  }
  else if (employee.reviewRating === 3) {
    bonus = 0.04;
  }
  else if (employee.reviewRating === 4) {
    bonus = 0.06;
  }
  else if (employee.reviewRating === 5) {
    bonus = 0.10;
  }

  // Atticus bonus = 0.04

  console.log('Bonus before:', bonus)

  bonus = seniorEmpBonus(employee, bonus)

  console.log('Bonus after:', bonus)

  bonus = reduceBonus(employee, bonus)

  console.log('Some were reduced', bonus)

  // Calculate the new bonus amount
  let newBonus = Number(employee.annualSalary) * bonus

  // Update the annual compensation
  let newCompensation = Number(employee.annualSalary) + newBonus

  return {
    name: employee.name,
    bonusPercentage: bonus,
    totalCompensation: newCompensation, //.toLocaleString()
    totalBonus: newBonus,
  }
}


// Function that grants additional 5% for some employees
let seniorEmpBonus = (empObj, bonus) => {

  // Atticus: empObj = {...}, bonus = 0.04

  // Check length of employee number
  if (empObj.employeeNumber.length === 4) {

    console.log('Senior emp:', empObj.employeeNumber, empObj.name)

    // Update the bonus amount
    bonus += 0.05
  }

  return bonus
}


// Function to reduce big earner bonuses by 1%
let reduceBonus = (empObj, bonus) => {

  // Atticus: empObj = {...}, bonus = 0.09

  // Check the income level
  let annualEmpSalary = Number(empObj.annualSalary)

  if (annualEmpSalary > 65000 && bonus > 0) {

    // Reduce bonus
    bonus -= 0.01
  }

  // Check if bonus is above 13%
  if (bonus > 0.13) {

    // If so, cap that!
    bonus = 0.13
  }

  // return the updated value
  return bonus
}

//manager function
let empArray = loopEmp(employees);

$(document).ready(readyNow);
//                
// console.log($(document).ready(readyNow(empArray)));

function readyNow () {
// show bonus on click jquery run below code
  $('#showBonus').on('click', appendAll)
  
//   // console.log(anArray)
}

function appendAll () {
  for (let updatedEmployee of empArray) {
    let tacos = (`<li>
<div class="card">
  <h2 id="employeeName">Name: ${updatedEmployee.name}</h2>
  <p id="employeeBonus">Bonus Percentage: ${updatedEmployee.bonusPercentage * 100}%</p>
  <p id="employeeComp">Total Compensation: $${updatedEmployee.totalCompensation.toLocaleString()}</p>
  <p id="totalBonus">Total Bonus: $${updatedEmployee.totalBonus.toLocaleString()}</p>
</div>
</li>`);
  let empList = document.getElementById('employeeList');
  // console.log(tacos)
  empList.insertAdjacentHTML('beforeend', tacos);
}
}