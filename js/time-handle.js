const datePrinter = document.getElementById("js-datePrinter");
const timePrinter = document.getElementById("js-timePrinter");

let selectedDate = getTodayDate();

const printedDateDay = getPrintedDateDay(selectedDate, "kor");

datePrinter.innerHTML = printedDateDay;
setInterval(() => {
  timePrinter.innerHTML = getCurrentTime();
}, 1000);
