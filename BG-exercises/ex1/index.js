"use strict;"

let json = data.employees;
const app = new EmployeesList(json);

(function(){
  app.showEmployees();
  onAddSubmit();
})();

function submitHandler(event){
  let form = document.getElementById("addEditForm");
  event.preventDefault();
  app.addEmployee(empDetails());
  form.reset();
}

function onAddSubmit(){
  let form = document.getElementById("addEditForm");
  form.addEventListener("submit", submitHandler, false);
}

function empDetails(){
  let details = [];
  let id = document.getElementById("id").value;
  let name = document.getElementById("name").value;
  let role = document.getElementById("role").value;
  let skills = document.getElementById("skills").value.split(',');
  let salary = document.getElementById("salary").value;
  details.push(id, name, role, skills, salary);
  return details;
}

function deleteHandler(){
  let id = this.closest("tr").firstElementChild.textContent;
  app.deleteEmployee(id);
}

function updateHandler(event){
  let form = document.getElementById("addEditForm");
  event.preventDefault();
  app.updateEmployee(empDetails());
  form.reset();
  form.removeEventListener("submit", updateHandler, false);
  form.addEventListener("submit", submitHandler, false);
}

function editHandler(){
  let form = document.getElementById("addEditForm");
  form.removeEventListener("submit", submitHandler, false);
  form.addEventListener("submit", updateHandler, false);
  let id = this.closest("tr").firstElementChild.textContent;
  app.editEmployee(id);
}
