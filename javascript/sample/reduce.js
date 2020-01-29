const jumsu = [1,2,3,4,5];

const result = jumsu.reduce(function(preValue, curValue, index, array) {
    console.log(preValue);
    console.log(curValue);
    console.log(index);
    console.log(array);
    console.log("--------------");
    return preValue + curValue;
})

console.log(result);