const prime = (num) => {
    for (let i = 2; i < num ; i++ ) {
        if (num % i == 0){
            return;
        };
    }
    console.log(num);
}

for (let i = 1; i <= 100 ; i++){
    prime(i);
}