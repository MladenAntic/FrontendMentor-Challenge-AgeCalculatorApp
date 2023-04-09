// CALCULATE AGE
let currentYear = new Date().getFullYear();
let currentMonth = new Date().getMonth();
let currentDay = new Date().getUTCDate();

function calculateDay() {
  switch (parseInt(daysNumber.innerText)) {
    case 61:
      daysNumber.innerText = "30";
      break;
    case 60:
      daysNumber.innerText = "29";
      break;
    case 59:
      daysNumber.innerText = "28";
      break;
    case 58:
      daysNumber.innerText = "27";
      break;
    case 57:
      daysNumber.innerText = "26";
      break;
    case 56:
      daysNumber.innerText = "25";
      break;
    case 55:
      daysNumber.innerText = "24";
      break;
    case 54:
      daysNumber.innerText = "23";
      break;
    case 53:
      daysNumber.innerText = "22";
      break;
    case 52:
      daysNumber.innerText = "21";
      break;
    case 51:
      daysNumber.innerText = "20";
      break;
    case 50:
      daysNumber.innerText = "19";
      break;
    case 49:
      daysNumber.innerText = "18";
      break;
    case 48:
      daysNumber.innerText = "17";
      break;
    case 47:
      daysNumber.innerText = "16";
      break;
    case 46:
      daysNumber.innerText = "15";
      break;
    case 45:
      daysNumber.innerText = "14";
      break;
    case 44:
      daysNumber.innerText = "13";
      break;
    case 43:
      daysNumber.innerText = "12";
      break;
    case 42:
      daysNumber.innerText = "11";
      break;
    case 41:
      daysNumber.innerText = "10";
      break;
    case 40:
      daysNumber.innerText = "9";
      break;
    case 39:
      daysNumber.innerText = "8";
      break;
    case 38:
      daysNumber.innerText = "7";
      break;
    case 37:
      daysNumber.innerText = "6";
      break;
    case 36:
      daysNumber.innerText = "5";
      break;
    case 35:
      daysNumber.innerText = "4";
      break;
    case 34:
      daysNumber.innerText = "3";
      break;
    case 33:
      daysNumber.innerText = "2";
      break;
    case 32:
      daysNumber.innerText = "1";
      break;
    case 31:
      daysNumber.innerText = "0";
      break;
  }
}

function monthsWith31Days() {
  daysNumber.innerText = `${31 - parseInt(day.value) + currentDay}`;
  daysNumber.dataset.value = `${31 - parseInt(day.value) + currentDay}`;
}

function monthsWith30Days() {
  daysNumber.innerText = `${30 - parseInt(day.value) + currentDay}`;
  daysNumber.dataset.value = `${30 - parseInt(day.value) + currentDay}`;
}

function increaseMonthBy1() {
  monthsNumber.innerText = `${currentMonth + 1}`;
  monthsNumber.dataset.value = `${currentMonth + 1}`;
}

function increaseMonthBy2() {
  monthsNumber.innerText = `${currentMonth + 2}`;
  monthsNumber.dataset.value = `${currentMonth + 2}`;
}

function increaseMonthBy3() {
  monthsNumber.innerText = `${currentMonth + 3}`;
  monthsNumber.dataset.value = `${currentMonth + 3}`;
}

function increaseMonthBy4() {
  monthsNumber.innerText = `${currentMonth + 4}`;
  monthsNumber.dataset.value = `${currentMonth + 4}`;
}

function increaseMonthBy5() {
  monthsNumber.innerText = `${currentMonth + 5}`;
  monthsNumber.dataset.value = `${currentMonth + 5}`;
}

function increaseMonthBy6() {
  monthsNumber.innerText = `${currentMonth + 6}`;
  monthsNumber.dataset.value = `${currentMonth + 6}`;
}

function increaseMonthBy7() {
  monthsNumber.innerText = `${currentMonth + 7}`;
  monthsNumber.dataset.value = `${currentMonth + 7}`;
}

function increaseMonthBy8() {
  monthsNumber.innerText = `${currentMonth + 8}`;
  monthsNumber.dataset.value = `${currentMonth + 8}`;
}

function increaseMonthBy9() {
  monthsNumber.innerText = `${currentMonth + 9}`;
  monthsNumber.dataset.value = `${currentMonth + 9}`;
}

function increaseMonthBy10() {
  monthsNumber.innerText = `${currentMonth + 10}`;
  monthsNumber.dataset.value = `${currentMonth + 10}`;
}

function increaseMonthBy11() {
  monthsNumber.innerText = `${currentMonth + 11}`;
  monthsNumber.dataset.value = `${currentMonth + 11}`;
}

function calculateMonth() {
  switch (parseInt(month.value)) {
    case 12:
      monthsWith31Days();
      calculateDay();
      if (31 - parseInt(day.value) + currentDay <= 30) {
        monthsNumber.innerText = `${currentMonth}`;
        monthsNumber.dataset.value = `${currentMonth}`;
      } else {
        increaseMonthBy1();
      }
      break;
    case 11:
      monthsWith30Days();
      calculateDay();
      if (30 - parseInt(day.value) + currentDay <= 30) {
        increaseMonthBy1();
      } else {
        increaseMonthBy2();
      }
      break;
    case 10:
      monthsWith31Days();
      calculateDay();
      if (31 - parseInt(day.value) + currentDay <= 30) {
        increaseMonthBy2();
      } else {
        increaseMonthBy3();
      }
      break;
    case 9:
      monthsWith30Days();
      calculateDay();
      if (30 - parseInt(day.value) + currentDay <= 30) {
        increaseMonthBy3();
      } else {
        increaseMonthBy4();
      }
      break;
    case 8:
      monthsWith31Days();
      calculateDay();
      if (31 - parseInt(day.value) + currentDay <= 30) {
        increaseMonthBy4();
      } else {
        increaseMonthBy5();
      }
      break;
    case 7:
      monthsWith31Days();
      calculateDay();
      if (31 - parseInt(day.value) + currentDay <= 30) {
        increaseMonthBy5();
      } else {
        increaseMonthBy6();
      }
      break;
    case 6:
      monthsWith30Days();
      calculateDay();
      if (30 - parseInt(day.value) + currentDay <= 30) {
        increaseMonthBy6();
      } else {
        increaseMonthBy7();
      }
      break;
    case 5:
      monthsWith31Days();
      calculateDay();
      if (31 - parseInt(day.value) + currentDay <= 30) {
        increaseMonthBy7();
      } else {
        increaseMonthBy8();
      }
      break;
    case 4:
      monthsWith30Days();
      calculateDay();
      if (30 - parseInt(day.value) + currentDay <= 30) {
        increaseMonthBy8();
      } else {
        increaseMonthBy9();
      }
      break;
    case 3:
      monthsWith31Days();
      calculateDay();
      if (31 - parseInt(day.value) + currentDay <= 30) {
        increaseMonthBy9();
      } else {
        increaseMonthBy10();
      }
      break;
    case 2:
      daysNumber.innerText = `${28 - parseInt(day.value) + currentDay}`;
      daysNumber.dataset.value = `${28 - parseInt(day.value) + currentDay}`;
      calculateDay();
      if (28 - parseInt(day.value) + currentDay <= 30) {
        increaseMonthBy10();
      } else {
        increaseMonthBy11();
      }
      break;
    case 1:
      monthsWith31Days();
      calculateDay();
      if (31 - parseInt(day.value) + currentDay <= 30) {
        increaseMonthBy11();
      } else {
        monthsNumber.innerText = `${currentMonth + 12}`;
        monthsNumber.dataset.value = `${currentMonth + 12}`;
      }
      break;
  }

  switch (parseInt(monthsNumber.innerText)) {
    case 12:
      monthsNumber.innerText = "0";
      yearsNumber.innerText = `${currentYear - parseInt(year.value)}`;
      break;
    case 13:
      monthsNumber.innerText = "1";
      break;
    case 14:
      monthsNumber.innerText = "2";
      break;
    case 15:
      monthsNumber.innerText = "3";
      break;
  }
}

function finalCalculation() {
  if (currentMonth < parseInt(month.value)) {
    yearsNumber.innerText = `${currentYear - parseInt(year.value) - 1}`;
    yearsNumber.dataset.value = `${currentYear - parseInt(year.value) - 1}`;
    calculateMonth();
  } else if (currentMonth >= parseInt(month.value)) {
    yearsNumber.innerText = `${currentYear - parseInt(year.value)}`;
    yearsNumber.dataset.value = `${currentYear - parseInt(year.value)}`;
    calculateMonth();
  }
}

function invalidCalculation() {
  daysNumber.innerText = "- -";
  monthsNumber.innerText = "- -";
  yearsNumber.innerText = "- -";

  daysNumber.dataset.value = "- -";
  monthsNumber.dataset.value = "- -";
  yearsNumber.dataset.value = "- -";
}
