"use strict";

(function(exports) {

  function Employee(id,name,role,skills,salary) {
    this.id = id;
    this.name = name;
    this.role = role;
    this.skills = skills;
    this.salary = salary;
  }

  exports.Employee = Employee;

})(this);
