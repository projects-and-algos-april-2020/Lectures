// returns a random number between min and max
function randomNumber(min, max) {
    var result = Math.floor(Math.random() * max) + min;
    return result;
}

function randomArray(size, min, max) {
    var outputArray = [];
    for(var i=0; i<size; i++) {
        var rand = randomNumber(min, max);
        outputArray.push(rand);
    }
    return outputArray;
}

var coolRandomArray = randomArray(5, 1, 10);