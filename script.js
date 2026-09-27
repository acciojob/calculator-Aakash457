const input = document.getElementById("input");

let expression = "";

// Number buttons
for (let i = 0; i <= 9; i++) {
  document.getElementById(`block${i}`).addEventListener("click", function () {
    expression += i;
    input.value = expression;
  });
}

// Decimal
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
    // Explicit division by zero handling
    if (expression.includes("/")) {
      let parts = expression.split("/");

      let numerator = Number(parts[0]);
      let denominator = Number(parts[1]);

      if (denominator === 0) {
        if (numerator === 0) {
          input.value = "NaN";
          expression = "NaN";
        } else {
          input.value = "Infinity";
          expression = "Infinity";
        }

        return;
      }
    }

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