// add one event listener
// common parent of all buttons -> body
function clickHandler(event) {
  if (event.target.textContent === "Change Background Color") {
    //   if (event.target.id === "color") {
    //color button was clicked -> change background color using classList
    changeBG();
  } else if (event.target.textContent === "Submit") {
    // submit button
    // console.log("clicked", event.target);
    // event.preventDefault();
    submitHandler();
  }
}
let students = [];

function submitHandler() {
  // get what user typed in the inputs .value
  // references to the inputs.
  const firstNameInput = document.querySelector("#firstname"); //getElemetById("firstname")
  const lastNameInput = document.querySelector("#lastname");
  const progNameInput = document.querySelector("#progname");
  // we should store the data that user entered before clearing the inputs

  let studentObj = {
    firstName: firstNameInput.value,
    lastName: lastNameInput.value,
    progName: progNameInput.value,
  };

  updateLists(studentObj);
  // save studentObj somewhere (array or database)
  students.push(studentObj);
  // console.log(students);

  firstNameInput.value = "";
  lastNameInput.value = "";
  progNameInput.value = "";
}

function updateLists(student) {
  // get reference to the ul elements
  const CITList = document.querySelector(".CIT");
  const CSTList = document.querySelector(".CST");
  //create an li element
  const listItem = document.createElement("li");
  //set the li element's textContent
  listItem.textContent = `${student.firstName} ${student.lastName}`; //student's first name student's last name
  //append li element to the appropriate ul based on program name
  if (student.progName === "CIT") {
    //student's program is CIT
    CITList.appendChild(listItem);
  } else if (student.progName === "CST") {
    //student's program is CST
    CSTList.appendChild(listItem);
  }
}

function changeBG() {
  document.body.classList.toggle("pinkBG");
}

document.body.addEventListener("click", clickHandler);
