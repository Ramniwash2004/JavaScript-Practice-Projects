let string = "";
let buttons = document.querySelectorAll(".button");

Array.from(buttons).forEach((button) => {
  button.addEventListener("click", (e) => {
    const input = document.querySelector("input");

    if (e.target.innerHTML === "=") {
      string = eval(string);
      input.value = string;
    } 
    else if (e.target.innerHTML === "AC") {
      string = "";
      input.value = string;
    } 
    else if (e.target.innerHTML === "DEL") {
      string = string.slice(0, -1);  // backspace logic
      input.value = string;
    } 
    else {
      string += e.target.innerHTML;
      input.value = string;
    }
  });
});
