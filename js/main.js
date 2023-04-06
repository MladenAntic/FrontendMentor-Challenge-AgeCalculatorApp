const labels = document.querySelectorAll("label");
const day = document.getElementById("day");
const month = document.getElementById("month");
const year = document.getElementById("year");
const errorMessage = document.querySelectorAll(".error-message");
const calculateBtn = document.querySelector(".calculate-btn");
const calculatedNumbers = document.querySelectorAll(".number");
const yearsNumber = document.querySelector(".years-number");
const monthsNumber = document.querySelector(".months-number");
const daysNumber = document.querySelector(".days-number");

calculateBtn.addEventListener("click", () => {
  // INPUTS VALIDATION
  function invalidDay() {
    errorMessage[0].style.display = "block";
    errorMessage[0].innerText = "Must be a valid day";
    day.style.border = "1px solid var(--light-red)";
    labels[0].style.color = "var(--light-red)";

    if (day.value === "") {
      errorMessage[0].innerText = "This field is required";
      invalidCalculation();
    }

    invalidCalculation();
  }
  if (day.value < 1 || day.value > 31) {
    invalidDay();
  } else if (month.value == 2 && day.value > 29) {
    invalidDay();
  } else if (month.value == 4 && day.value > 30) {
    invalidDay();
  } else if (month.value == 6 && day.value > 30) {
    invalidDay();
  } else if (month.value == 9 && day.value > 30) {
    invalidDay();
  } else if (month.value == 11 && day.value > 30) {
    invalidDay();
  } else {
    errorMessage[0].style.display = "none";
    day.style.border = "1px solid var(--light-grey)";
    day.addEventListener("focus", () => {
      day.style.border = "1px solid var(--purple)";
    });
    labels[0].style.color = "var(--smokey-grey)";
    finalCalculation();
  }

  if (month.value < 1 || month.value > 12) {
    errorMessage[1].style.display = "block";
    errorMessage[1].innerText = "Must be a valid month";
    month.style.border = "1px solid var(--light-red)";
    labels[1].style.color = "var(--light-red)";
    if (month.value === "") {
      errorMessage[1].innerText = "This field is required";
      invalidCalculation();
    }
    invalidCalculation();
  } else {
    errorMessage[1].style.display = "none";
    month.style.border = "1px solid var(--light-grey)";
    labels[1].style.color = "var(--smokey-grey)";
    month.addEventListener("focus", () => {
      month.style.border = "1px solid var(--purple)";
    });
    finalCalculation();
  }

  if (year.value < currentYear - 120 || year.value > currentYear) {
    errorMessage[2].style.display = "block";
    errorMessage[2].innerText = "Must be a valid year";
    year.style.border = "1px solid var(--light-red)";
    labels[2].style.color = "var(--light-red)";
    if (year.value === "") {
      errorMessage[2].innerText = "This field is required";
      invalidCalculation();
    }
    invalidCalculation();
  } else {
    errorMessage[2].style.display = "none";
    year.style.border = "1px solid var(--light-grey)";
    labels[2].style.color = "var(--smokey-grey)";
    year.addEventListener("focus", () => {
      year.style.border = "1px solid var(--purple)";
    });
    finalCalculation();
  }

  let nums = "1234567890";

  for (let i = 0; i < nums.length; i++) {
    if (
      daysNumber.innerText === "NaN" ||
      daysNumber.innerText.includes(`${-nums[i]}`)
    ) {
      daysNumber.innerText = "- -";
      daysNumber.dataset.value = "- -";
    }
  }
});

function animateCalculation() {
  calculatedNumbers.forEach((calcNum) => {
    const numbers = "1234567890";

    let interval = null;
    let iteration = 0;

    clearInterval(interval);
    interval = setInterval(() => {
      calcNum.innerText = calcNum.innerText
        .split("")
        .map((number, index) => {
          if (index < iteration) {
            return calcNum.dataset.value[index];
          }

          return numbers[Math.floor(Math.random() * 10)];
        })
        .join("");

      if (iteration >= calcNum.dataset.value.length) {
        clearInterval(interval);
      }

      iteration += 2 / 3;
    }, 30);
  });
}
