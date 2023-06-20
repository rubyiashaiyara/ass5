// Your solution goes here.
// Hints:
// -> Handle the onsubmit function using attribute or js event listener.
// -> Take the value of input, calculate the grade and update ui.
// -> Maximum number can be 100
// -> Clear the input field after value submission


const inputElement = document.getElementById("iits-inp");
const addButton = document.querySelector("#iits-formSubmit button");

addButton.addEventListener("click", function (event) {
  event.preventDefault(); 

  const mark = parseInt(inputElement.value);
  if (mark > 100) {
    alert("Maximum value can be 100.");
    return; 
  }

  if (mark >= 81 && mark <= 100) {
    incrementGradeCount("iits-a_count");
  } else if (mark >= 71 && mark <= 80) {
    incrementGradeCount("iits-bp_count");
  } else if (mark >= 61 && mark <= 70) {
    incrementGradeCount("iits-b_count");
  } else if (mark >= 51 && mark <= 60) {
    incrementGradeCount("iits-bm_count");
  } else if (mark >= 40 && mark <= 50) {
    incrementGradeCount("iits-c_count");
  } else if (mark < 40) {
    incrementGradeCount("iits-f_count");
  }

  inputElement.value = "";
});
function incrementGradeCount(gradeCountId) {
  const gradeCountElement = document.getElementById(gradeCountId);
  const currentCount = parseInt(gradeCountElement.textContent);
  gradeCountElement.textContent = currentCount + 1;
}