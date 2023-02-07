const sumAll = function(num,num2) {
    if (!Number.isInteger(num) || !Number.isInteger(num2)) return "ERROR";
    if (num < 0 || num2 < 0) return "ERROR";
    if (num > num2) {
        const temp = num;
        num = num2;
        num2 = temp;
    }
    let sum = 0;
    for (let i = num; i < num2 + 1; i++) {
        sum += i;
    }
    return sum;
};

// Do not edit below this line
module.exports = sumAll;
