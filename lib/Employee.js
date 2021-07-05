class Employee {
  constructor(name, id, email) {
    this.name = name;
    this.id = id;
    this.email = email;
  }

  //Returns name
  getName() {
    return this.name;
  }

  //Returns ID
  getId() {
    return this.id;
  }

  //Returns email
  getEmail() {
    return this.email;
  }

  //Returns role
  getRole() {
    return "Employee";
  }
}

//Exports this file
module.exports = Employee;
