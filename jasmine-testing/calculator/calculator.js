


window.addEventListener('DOMContentLoaded', function() {
  const form = document.getElementById("calc-form");
  if (form) {
    setupIntialValues();
    form.addEventListener("submit", function(e) {
      e.preventDefault();
      update();
    });
  }
});

function getCurrentUIValues() {
  return {
    amount: +(document.getElementById("loan-amount").value),
    years: +(document.getElementById("loan-years").value),
    rate: +(document.getElementById("loan-rate").value),
  }
}

// Get the inputs from the DOM.
// Put some default values in the inputs
// Call a function to calculate the current monthly payment
function setupIntialValues() {
  setInt = {amount: 5000, years:3, rate: 24.99}
  formAmount = document.getElementById("loan-amount");
  formYears = document.getElementById("loan-years");
  formRate = document.getElementById("loan-rate");
  formAmount.value = setInt.amount;
  formYears.value = setInt.years;
  formRate.value = setInt.rate;

}

// Get the current values from the UI
// Update the monthly payment
function update() {
  formValues = getCurrentUIValues();
  payment = calculateMonthlyPayment(formValues);
  updateMonthly(payment);
}

// Given an object of values (a value has amount, years and rate ),
// calculate the monthly payment.  The output should be a string
// that always has 2 decimal places.
function calculateMonthlyPayment(values) {
  p = values.amount
  i = (values.rate / 100) / 12;
  n =  Math.floor(values.years * 12);
  numerator = p * i;
  denom = 1 - Math.pow((1 + i), -n)

  return (
    numerator / denom
  ).toFixed(2);
  

}

// Given a string representing the monthly payment value,
// update the UI to show the value.
function updateMonthly(monthly) {

  solutionSpace = document.getElementById("monthly-payment");
  solutionSpace.innerText = monthly;
}
