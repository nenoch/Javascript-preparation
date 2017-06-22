"use strict";

(function(exports) {

  function EmployeesList(data) {
    this.employees = data;
  }

  function eventOnEditButtons(){
    let editClass = document.getElementsByClassName('edit');
    for (let button of editClass) {
      button.addEventListener('click', editHandler);
    }
  }

  function eventOnDeleteButtons(){
    let deleteClass = document.getElementsByClassName('delete');
    for (let button of deleteClass) {
      button.addEventListener('click', deleteHandler);
    }
  }

  EmployeesList.prototype.createEmployee = function(id,name,role,skills,salary) {
    let employee = new Employee(id,name,role,skills,salary);
    this.employees.push(employee);
    return employee;
  }

  EmployeesList.prototype.addEmployee = function(details){
    let newEmp = this.createEmployee(details[0], details[1], details[2], details[3], details[4]);
    clearTbody();
    this.showEmployees();
  }

  EmployeesList.prototype.deleteEmployee = function(id) {
    for(let i = 0; i < this.employees.length; i++){
      if (this.employees[i].id === id){
        this.employees.splice(i, 1);
      }
    }
    clearTbody();
    this.showEmployees();
  }

  function clearTbody(){
    let rows = document.getElementsByClassName('employee-row');
    for (let row of rows){
      row.innerHTML="";
    }
  }

  EmployeesList.prototype.editEmployee = function(id) {
    let editEmp = this.employees.filter((item) => item.id === id);
    document.getElementById("id").value = editEmp[0].id;
    document.getElementById("name").value = editEmp[0].name;
    document.getElementById("role").value = editEmp[0].role;
    document.getElementById("skills").value = editEmp[0].skills;
    document.getElementById("salary").value = editEmp[0].salary;
  }

  EmployeesList.prototype.updateEmployee = function(details) {
    let editEmp = this.employees.filter((item) => item.id === details[0]);
    editEmp[0].id = details[0];
    editEmp[0].name = details[1];
    editEmp[0].role = details[2];
    editEmp[0].skills = details[3];
    editEmp[0].salary = details[4];
    clearTbody();
    this.showEmployees();
  }

  function showEmployee(employee){
    let table = document.getElementById("employeesTable");
    let employeeRow = new EmployeeView(employee).displayEmployee();
    table.innerHTML += employeeRow;
  }

  EmployeesList.prototype.showEmployees = function(){
    for (let employee of this.employees) {
      showEmployee(employee);
    }
    eventOnEditButtons();
    eventOnDeleteButtons();
  }

  exports.EmployeesList = EmployeesList;
})(this);
