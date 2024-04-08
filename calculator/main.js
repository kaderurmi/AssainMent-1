function myCalculator() {
  let num1 = document.getElementById("num1").value;
  let num2 = document.getElementById("num2").value;
  let calculate = document.getElementById("calculate").value;

  if (calculate === "+") {
    let num1 = parseFloat(document.getElementById("num1").value);
    let num2 = parseFloat(document.getElementById("num2").value);
    let results = (document.value = num1 + num2);

    if (!isNaN(results)) {
      document.getElementById("ResultValue").innerHTML =
        "Addtion Result: " + results;
    } else {
      document.getElementById("ResultValue").innerHTML =
        " <span id='msg'>Please Enter Valid Number </span>";
    }
  } else if (calculate === "-") {
    let num1 = parseFloat(document.getElementById("num1").value);
    let num2 = parseFloat(document.getElementById("num2").value);
    let results = (document.value = num1 - num2);

    if (!isNaN(results)) {
      document.getElementById("ResultValue").innerHTML =
        "Subtraction Result: " + results;
    } else {
      document.getElementById("ResultValue").innerHTML =
        " <span id='msg'>Please Enter Valid Number </span>";
    }
  } else if (calculate === "*") {
    let num1 = parseFloat(document.getElementById("num1").value);
    let num2 = parseFloat(document.getElementById("num2").value);
    let results = (document.value = num1 * num2);
    if (!isNaN(results)) {
      document.getElementById("ResultValue").innerHTML =
        "Multiplication Result: " + results;
    } else {
      document.getElementById("ResultValue").innerHTML =
        " <span id='msg'>Please Enter Valid Number </span>";
    }
  } else if (calculate === "/") {
    let num1 = parseFloat(document.getElementById("num1").value);
    let num2 = parseFloat(document.getElementById("num2").value);
    let results = (document.value = num1 / num2);
    if (!isNaN || isFinite(results)) {
      document.getElementById("ResultValue").innerHTML =
        "Division Result: " + results;
    } else if (isFinite(results)) {
      document.getElementById("ResultValue").innerHTML =
        "Division Result: " + results;
    } else {
      document.getElementById("ResultValue").innerHTML =
        " <span id='msg'>Please not divided by zero or Empty.</span>";
    }
  } else {
    document.getElementById("ResultValue").innerHTML =
      " <span id='msg'>Please Enter Valid Number </span>";
  }
}
