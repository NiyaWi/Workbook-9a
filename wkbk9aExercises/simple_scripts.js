"use strict";

class Employee {
    constructor(id, firstName, lastName, jobTitle, payRate) {
    this.employeeId = id;
    this.firstName = firstName;
    this.lastName = lastName;
    this.jobTitle = jobTitle;
    this.payRate = payRate;
    }

getFullName(){
   return this.firstName + " " + this.lastName;

}
    
}

let employee1 = new Employee(1, "Ian", "Auston", "Graphic Artist", 42.50);
let employee2 = new Employee(2,"Mia","Tullum", "Nail Tech", 52.55);
console.log("Employee" + " " + employee1.getFullName() + " " + "created");
console.log(`Job title is ${employee1.jobTitle}`);
console.log(`Pay rate is $ ${employee1.payRate}`);