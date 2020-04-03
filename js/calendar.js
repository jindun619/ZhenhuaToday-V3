function getCalendar(target, date) {
  var d = date;
  var month_name = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December"
  ];
  var month = d.getMonth(); //0-11
  var year = d.getFullYear(); //2014
  var first_date = month_name[month] + " " + 1 + " " + year;
  //September 1 2014
  var tmp = new Date(first_date).toDateString();
  //Mon Sep 01 2014 ...
  var first_day = tmp.substring(0, 3); //Mon
  var day_name = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
  var day_no = day_name.indexOf(first_day); //1
  var days = new Date(year, month + 1, 0).getDate(); //30
  //Tue Sep 30 2014 ...
  var calendar = paintCalendar(day_no, days);
  //month_name[month] = month
  target.appendChild(calendar);
}

function paintCalendar(day_no, days) {
  var table = document.createElement("table");
  var thead = document.createElement("thead");
  var tbody = document.createElement("tbody");

  table.classList.add(
    "table",
    "alert-primary",
    "table-borderless",
    "border-top",
    "border-primary"
  );

  //row for the day letters
  var tr = document.createElement("tr");
  for (var c = 0; c <= 6; c++) {
    var th = document.createElement("th");
    th.innerHTML = "SMTWTFS"[c];
    tr.appendChild(th);
  }
  thead.appendChild(tr);

  //create 2nd row
  tr = document.createElement("tr");
  var c;
  for (c = 0; c <= 6; c++) {
    if (c == day_no) {
      break;
    }
    var td = document.createElement("td");
    td.innerHTML = "";
    tr.appendChild(td);
  }

  var count = 1;
  for (; c <= 6; c++) {
    var td = document.createElement("td");
    td.innerHTML = count;
    count++;
    tr.appendChild(td);
  }
  tbody.appendChild(tr);

  //rest of the date rows
  for (var r = 3; r <= 7; r++) {
    tr = document.createElement("tr");
    for (var c = 0; c <= 6; c++) {
      if (count > days) {
        tbody.appendChild(tr);
        break;
      }
      var td = document.createElement("td");
      td.innerHTML = count;
      count++;
      tr.appendChild(td);
    }
    tbody.appendChild(tr);
  }

  //Returning
  table.appendChild(thead);
  table.appendChild(tbody);
  return table;
}

const a = document.querySelector("#calendar");

getCalendar(a, getTodayDate());
