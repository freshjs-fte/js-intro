
/* 1 */
const num = 2;
const str = '3';
const sec = num;

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

















/* 2 */
const bool1 = true;
const bool2 = true;

let operation = bool1 + bool2;
// console.log(operation)

operation = bool2 - bool1;
// console.log(operation)

/* 3 */
const string = '22.6';
const num2 = 4.3;

const sum2 = Number(string) + num2;
// console.log(sum2);
