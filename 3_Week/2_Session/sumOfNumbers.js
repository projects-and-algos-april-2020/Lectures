function sumOfNumbers(number) {
    // number + all numbers less than that number all the way to 0
    // number == 10
    // -> 10 + 9 + 8 + 7 ...
    var sum = 0;
    for(var i = number; i >=0; i--) {
        sum += i;
    }
    return sum;
}

function rSumOfNumbers(number) { // 1
    // BASE CASE
    if(number === 1) { return 1; }

    return number + rSumOfNumbers(number-1);
}

function fibonacci(position) { // 0, 1, 1, 2, 3, 5, 8
    // position: 1 -> 1
    // position: 0 -> 0
    if(position < 2) {
        return position;
    }
    return fibonacci(position-1) + fibonacci(position-2);
}

console.log(fibonacci(3)); // should be 2