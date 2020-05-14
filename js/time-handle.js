const datePrinter = document.getElementById("js-datePrinter");
const timePrinter = document.getElementById("js-timePrinter");

// let selectedDate = getTodayDate();
let selectedDate = getTodayDate();
console.log(selectedDate);

const printedDateDay = getPrintedDateDay(selectedDate, "kor");

datePrinter.innerHTML = printedDateDay;
setInterval(() => {
  timePrinter.innerHTML = getCurrentTime();
}, 1000);
