// sayHello();

function sayHello(user = "Qwerty") {
  const message = "Hello, " + user + "!";
  alert(message);
}

let username = "Sveta";
// sayHello(username);

username = "John";
// sayHello(username);

username = "Ivan";
// sayHello(username);

function calcRectSquare(sideA, sideB) {
  if (
    (typeof sideA !== "number" || typeof sideB !== "number") &&
    (typeof sideA !== "string" || typeof sideB !== "string")
  ) {
    return null;
  }

  if (isNaN(sideA) || isNaN(sideB)) {
    return null;
  }

  return sideA * sideB;
}

// console.log(calcRectSquare("4", "4"));

/* 
  Создайте функцию rgb(r, g, b), 
  которая будет принимать три числовых аргумента
  возвращать строку вида «rgb(23,100,134)». 
  Если аргументы не заданы, 
  считать их равными нулю. 
  Не проверять переменные на тип данных
*/

function getRGB(r = 0, g = 0, b = 0) {

  const calc = "rgb(" + r + "," + g + "," + b + ")";
  return calc;
}

let red = 23;

const rgbResult = getRGB(undefined, 100, undefined);
console.log(rgbResult);

function avg(num1, num2) {

  // console.log(arguments[0], arguments[1]);
  // console.log(num1, num2);

  let sum = 0;

  for (let index = 0; index < arguments.length; index += 2) {
    sum = sum + arguments[index];
  }

  return (sum) / arguments.length; // 10 / 2
}

const avgRes = avg(10, 3);
console.log(avgRes);
