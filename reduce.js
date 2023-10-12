function reduceArray(callbackFunc,arr){
    let result = arr[0];
    for(index=1;index<arr.length;index++){
        result = callbackFunc(result,arr[index]);
    }
    return result;
}
function getMul(a,b){
    return a*b;
}
function getDiv(a,b){
    return a / b;
}
console.log("The product of the numbers are = " , reduceArray(getMul,[11, 10, 9, 8]));
console.log(" The result of a divided by b = " , reduceArray(getDiv,[640 / 2]));