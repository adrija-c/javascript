function forEach(arr, callback) {
    for (let i = 0; i < arr.length; i++) {
        callback(arr[i], i, arr);
    }
}

function isPrime(num) {
    if (num < 2) 
        return false;
    for (let i = 2; i < num; i++) {
        if (num % i === 0) 
            return false;
    }
    return true;
}

const numbers = [2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15];

forEach(numbers, function(element) {
    if (isPrime(element)) {
        console.log(element);
    }
});

