/* 1 */
const num = 2;
const str = "3";

const getSumOfTwo = function (num1, num2) {
  // checks
  if (isNaN(num1) || isNaN(num2)) {
    return false;
  }

  return Number(num1) + Number(num2);
};

const result = getSumOfTwo(num, str);

console.log(result);

/*  */

/* 
    1. Функцию которая возвращает максимальное число из двух
    2. Функцию которая возвращает минимальное число из двух
    3. Функция которая определяет является ли число четным

    (4.*) Функция которая возвращает корень квадратного уравнения 
    (метод дискриминанта)

*/

/* 1 */
const getMaxOfTwo = function (num1, num2) {
  if (isNaN(num1) || isNaN(num2)) {
    return false;
  }

  return Math.max(num1, num2);

  /* if(parseFloat(num1) > parseFloat(num2)) {
        return num1;
    }
    
    return num2; */
};

let res = getMaxOfTwo("35", "30");
console.log(res);

/* 2 */
const getMinOfTwo = function (num1 = 1, num2 = 2) {
  if (isNaN(num1) || isNaN(num2)) {
    return false;
  }

  return Math.min(num1, num2);

  /*  if(parseFloat(num2) > parseFloat(num1)) {
        return num1;
    }
    
    return num2; */
};

res = getMinOfTwo(6, 3);
console.log(res);

/* 3 */
const isEven = function (number) {
  if (isNaN(number)) {
    return null;
  }

  return number % 2 === 0;
};

console.log(isEven(3));

/* 4 */

/** JSDOCs
 * Solves quadratic equations
 * @param {Number} a Coeff A
 * @param {Number} b Coeff B
 * @param {Number} c Coeff C
 * @returns {Number[]} Roots of quadratic equation
 */
function solveQaudraticEquation(a, b, c) {
    console.log(arguments)
  // checks
  // type
  if (
    (typeof a !== "number" || typeof b !== "number" || typeof c !== "number") &&
    (typeof a !== "string" || typeof b !== "string" || typeof c !== "string")
  ) {
    return null;
  }

  if (isNaN(a) || isNaN(b) || isNaN(c)) {
    // convert
    return null;
  }

  const D = b * b - 4 * a * c;

  //   debugger;

  // if D > 0
  const x1 = (-b + Math.pow(D, 1 / 2)) / (2 * a);
  const x2 = (-b - Math.pow(D, 1 / 2)) / (2 * a);

  return [x1, x2];
}

console.log("Ваш ответ " + solveQaudraticEquation(true, "0", "-3"));

let text = "Список\n";
let nu1m = 1;
text += nu1m + ". Пункт " + nu1m;

console.log(text);

const getMonthIndex = function (monthName) {
  let monthIndex = 0;

  switch (monthName) {
    case "January": {
      // monthName === 'January'
      monthIndex = 1;
      break;
    }
    case "February": {
      monthIndex = 2;
      break;
    }
    case "March":
      monthIndex = 3;
      break;
    case "April":
      monthIndex = 4;
      break;
  }

  return monthIndex;
};

console.log(getMonthIndex("March"));

const number = parseInt(prompt("Введите число между 0 и 3", ""));

switch (number) {
  case 0:
    alert("Вы ввели число 0");
    break;
  case 1:
    alert("Вы ввели число 1");
    break;

  case 2:
  case 3:
    alert("Вы ввели число 2 или 3");
    break;

  case NaN:
    alert('Вы ввели не число')
    break;

  default:
    alert("Нету в списке");
}
