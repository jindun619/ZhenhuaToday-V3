function getTodayDate() {
  const todayDate = new Date();
  return todayDate;
}

function getPrintedDate(para_date) {
  const year = para_date.getFullYear();
  const month = para_date.getMonth() + 1;
  const date = para_date.getDate();
  return `${year}-${month < 10 ? `0${month}` : month}-${
    date < 10 ? `0${date}` : date
  }`;
}

function getPrintedDay(para_date, lang) {
  const day = para_date.getDay();
  const korDayName = ["일", "월", "화", "수", "목", "금", "토"];
  const cnaDayName = ["日", "一", "二", "三", "四", "五", "六"];

  if (lang == undefined) {
    return Error(`"language parameter required!"`);
  } else if (lang == "kor") {
    return korDayName[day];
  } else if (lang == "cna") {
    return cnaDayName[day];
  }
}

function getPrintedDateDay(para_date, lang) {
  const date = getPrintedDate(para_date);
  const day = getPrintedDay(para_date, lang);
  return `${date}(${day})`;
}

function getCurrentTime() {
  const currentDate = new Date();
  const hours = currentDate.getHours();
  const minutes = currentDate.getMinutes();
  const seconds = currentDate.getSeconds();
  return `${hours < 10 ? `0${hours}` : hours}:${
    minutes < 10 ? `0${minutes}` : minutes
  }:${seconds < 10 ? `0${seconds}` : seconds}`;
}

function makeFoodArray(foodType, lang) {
  if (lang == "kor") {
    const a = food[foodType];
    const aArray = [a.kor_name, "../../food_img/" + a.id + "." + a.img_ext]; //LINKS
    return aArray;
  } else if (lang == "cna") {
    const a = food[foodType];
    const aArray = [a.cna_name, "../../food_img/" + a.id + "." + a.img_ext]; //LINKS
    return aArray;
  }
}

function getFoodPara(para_obj, lang) {
  let result = [];

  const soup = para_obj[0].soup;
  const food1 = para_obj[0].food1;
  const food2 = para_obj[0].food2;
  const food3 = para_obj[0].food3;
  const food4 = para_obj[0].food4;
  const food5 = para_obj[0].food5;

  const array1 = makeFoodArray(soup, lang);
  const array2 = makeFoodArray(food1, lang);
  const array3 = makeFoodArray(food2, lang);
  const array4 = makeFoodArray(food3, lang);
  const array5 = makeFoodArray(food4, lang);
  const array6 = makeFoodArray(food5, lang);

  result.push(array1);
  result.push(array2);
  result.push(array3);
  result.push(array4);
  result.push(array5);
  result.push(array6);

  console.log(result);
  return result;
}
