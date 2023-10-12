function filterArray(array, condition) {
    const finalList = [];

    for (let i = 0; i < array.length; i++) {
        if (condition(array[i])) {
            finalList.push(array[i]);
        }
    }

    return finalList;
}

const ages = [25, 17, 20, 14, 19, 22, 11];

const under18 = filterArray(ages, function(age) {
    return age < 18;
});

console.log('Minor list: ');
console.log(under18);