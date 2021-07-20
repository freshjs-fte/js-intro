let = 0;

num = 1;

num += 3; // 4

/**
 *
 * @param {*} value
 * @returns
 */
function getTextPlusValue(num) {
  const toNumber1 = Number("teas");
  const toNumber2 = Number(true);
  const result = toNumber1 + toNumber2;

  return result;
}

const result = getTextPlusValue(4);

function calcPow(num, power) {
  if (
    !["number", "string"].includes(typeof num) ||
    !["number", "string"].includes(typeof power)
  ) {
    return null;
  }

  const result = Math.pow(num, power);

  if (isNaN(result)) {
    return null;
  }

  return result;
}

// console.log(calcPow("3", 2));

for (let i = 0; i < 5; i++) {
  // console.log(i);
  if (i === 2) {
    'asdasd'
    break;
  }

  // console.log("test");
}

// console.log('operatiomn');
