
/* 1 */
const num = 2;
const str = '3';

function getSumOfTwo (num1, num2) {
    // checks
    if (isNaN(num1) || isNaN(num2)) {
        return false;
    }

    const sum = Number(num1) + Number(num2);
    
    return sum;
}

const result = getSumOfTwo(num, str);

console.log(result);







/* 
    1. Функцию которая возвращает максимальное число из двух
    2. Функцию которая возвращает минимальное число из двух
    3. Функция которая определяет является ли число четным

    (4.*) Функция которая находит корень квадратного уравнения 
    (метод дискриминанта)

*/
