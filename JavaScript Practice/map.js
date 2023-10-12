function mapArray(arr, transformation) {
    const finalList = [];
    for (let i = 0; i < arr.length; i++) {
        finalList.push(transformation(arr[i]));
    }
    return finalList;
}

const numbers = [1, 2, 3, 4, 5, 6, 7];

const squaredNumbers = mapArray(numbers, function(num) {
    return num * num;
});

console.log('Square of the numbers : 1, 2, 3, 4, 5, 6, 7 are ');
console.log(squaredNumbers);
