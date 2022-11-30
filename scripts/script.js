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
    submitHandler();
  }
}

function submitHandler()
{
    // get what user typed in the inputs .value
    // references to the inputs.
    const firstNameInput = document.querySelector("#firstname"); //getElemetById("firstname")
    const lastNameInput = document.querySelector("#lastname");
    const progNameInput = document.querySelector("#progname");
    firstNameInput.value = "";
    lastNameInput.value = "";
    progNameInput.value = "";
 }
-
function changeBG() {
  document.body.classList.toggle("pinkBG");
}

document.body.addEventListener("click", clickHandler);
