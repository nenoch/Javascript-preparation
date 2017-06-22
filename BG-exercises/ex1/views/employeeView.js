"use strict";

(function(exports) {

  function EmployeeView(employee) {
    this.employee = employee;
  }

  EmployeeView.prototype.displayEmployee = function() {
    return `
    <tr class="employee-row">
      <td>${this.employee.id}</td>
      <td>${this.employee.name}</td>
      <td>${this.employee.role}</td>
      <td>
        <ul>
          <li>${this.employee.skills[0]}</li>
          <li>${this.employee.skills[1]}</li>
          <li>${this.employee.skills[2]}</li>
        </ul>
      </td>
      <td>£${this.employee.salary}</td>
      <td>
        <button class="edit btn btn-primary" type="button">Edit</button>
        <button class="delete btn btn-danger" type="button">Delete</button>
      </td>
    </tr>
    `;
  }

  exports.EmployeeView = EmployeeView;
})(this);
