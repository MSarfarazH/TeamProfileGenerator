const GenerateManager = () => {
   return `<div class="card" style="width: 18rem;">
    <div class="card-body">
      <h5 class="card-title">${input.name}</h5>
      <h5 class="card-title">Manager</h5>
    </div>
    <ul class="list-group list-group-flush">
      <li class="list-group-item">ID:${input.ID} </li>
      <li class="list-group-item">Email:${input.email} </li>
      <li class="list-group-item">Office:${input.officenum} </li>
    </ul>
  </div>`
}

const GenerateEngineer = () => {
   return `<div class="card" style="width: 18rem;">
    <div class="card-body">
      <h5 class="card-title">${input.name}</h5>
      <h5 class="card-title">Engineer</h5>
    </div>
    <ul class="list-group list-group-flush">
      <li class="list-group-item">ID:${input.ID} </li>
      <li class="list-group-item">Email:${input.email} </li>
      <li class="list-group-item">Github:${input.github} </li>
    </ul>
  </div>`
}

const GenerateIntern = () => {
   return `<div class="card" style="width: 18rem;">
    <div class="card-body">
      <h5 class="card-title">${input.name}</h5>
      <h5 class="card-title">Intern</h5>
    </div>
    <ul class="list-group list-group-flush">
      <li class="list-group-item">ID:${input.ID} </li>
      <li class="list-group-item">Email:${input.email} </li>
      <li class="list-group-item">School:${input.school} </li>
    </ul>
  </div>`
}

HTMLGenerator = (input) => {
    cardArray = [];
}
// module.exports = {GenerateIntern, GenerateEngineer, GenerateManager}

