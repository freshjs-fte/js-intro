let chislo1 = 3;
let chislo2 = 6;

function calcSomething(num1, num2) {
    let resu = 0;
    for(let i = 0; i < 5; i++) {
        resu += num1 * num2;
    }
    return resu
}
console.log(calcSomething(chislo1, chislo2));

let buffer = 1;
function calcFactorial(num) {
    
    for (let i = 1; i <= num; i++) {
        buffer *= i;

        if(i < 3) {
            break;
        }
    }
    
    return buffer;
}

let resu = calcFactorial(5);
console.log(resu);

function calcPower(val, power) {
    
    if(typeof val !== "number") {
        
    }

    let result = val;
    for(let i = 1; i < power; i++) {
        result = result * val;
    }
    return result;
}

console.log(calcPower(5, 2));
