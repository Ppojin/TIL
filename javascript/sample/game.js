const gameUpdown = () => {
    let comNum = parseInt(100*Math.random());
    for(var i = 0 ; i < 10 ; i++ ){
        let userNum = Number(prompt("기회"+String(i)+": 예측 숫자는?"));
        if (comNum > userNum){
            alert("UP");
        } else if (comNum < userNum){
            alert("DOWN");
        }else if (comNum === userNum){
            alert("Correct!")
            break;
        }
    }
};
