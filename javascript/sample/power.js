const power = num => {
    if (num != 1){
        return num + power(num-1);
    } else {
        return 1;
    }
};

const num = 10;

console.log(power(10));