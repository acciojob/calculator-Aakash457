const input = document.getElementById("input");

let expression = "";

// Number buttons
for (let i = 0; i <= 9; i++) {
  document.getElementById(`block${i}`).addEventListener("click", function () {
    expression += i;
    input.value = expression;
  });
}

// Decimal button
document.getElementById("dot").addEventListener("click", function () {
  expression += ".";
  input.value = expression;
});

// Plus
document.getElementById("plus").addEventListener("click", function () {
  expression += "+";
  input.value = expression;
});

// Minus
document.getElementById("minus").addEventListener("click", function () {
  expression += "-";
  input.value = expression;
});

// Multiply
document.getElementById("multiply").addEventListener("click", function () {
  expression += "*";
  input.value = expression;
});

// Divide
document.getElementById("divide").addEventListener("click", function () {
  expression += "/";
  input.value = expression;
});

// Answer
document.getElementById("ans").addEventListener("click", function () {
  try {
    let result = eval(expression);

    input.value = result;
    expression = result.toString();
  } catch (error) {
    input.value = "Error";
    expression = "";
  }
});

// Clear
document.getElementById("clr").addEventListener("click", function () {
  expression = "";
  input.value = "";
});