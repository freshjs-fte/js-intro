
/* 1 */
const num = 2;
const str = '3';

const getSumOfTwo = function (num1, num2) {
    // checks
    if (isNaN(num1) || isNaN(num2)) {
        return false;
    }
    
    return (Number(num1) + Number(num2));
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

    if(isNaN(num1) || isNaN(num2)) {
        return false;
    }

    if(parseFloat(num1) > parseFloat(num2)) {
        return num1;
    }
    
    return num2;
};

let res = getMaxOfTwo('35', '30');
console.log(res)


/* 2 */
const getMinOfTwo = function (num1, num2) {

    if(isNaN(num1) || isNaN(num2)) {
        return false;
    }

    if(parseFloat(num2) > parseFloat(num1)) {
        return num1;
    }
    
    return num2;
};

res = getMinOfTwo('35', '30');
console.log(res)

/* 3 */
const isEven = function (number) {
    if(isNaN(number)) {
        return null;
    }

    return number % 2 === 0;
}

console.log(isEven(3))














