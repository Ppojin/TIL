const array = [90, 99, 50, 60, 70, 58, 88, 72, 40, 89];

// for (let i = 0 ; array.length > i ; i++) {
//     console.log(array[i]);
// };

// console.log('---------------------------------------------------------------');
// for (let i in array) {
//     console.log(array[i]);
// };

// console.log('---------------------------------------------------------------');
// let newArray = new Array();
// array.forEach((ele) => {
//     if(ele % 2 != 0){
//         newArray.push(ele);
//     }
// });
// newArray.forEach((ele) => {
//     console.log(ele);
// });

// console.log('---------------------------------------------------------------');
// let newMap = array.map((ele) => {
//     return ele * 100;
// });
// newMap.forEach((ele) => {
//     console.log(ele);
// });

// console.log('---------------------------------------------------------------');
// let newMap2 = [];
// array.forEach((ele) => {
//     newMap2.push(ele*100);
// });
// newMap.forEach((ele) => {
//     console.log(ele);
// });

let grade = array.map((ele) => {
    let grade;
    if (ele >= 90)      { grade = 'A' } 
    else if (ele >= 80) { grade = 'B' } 
    else if (ele >= 70) { grade = 'C' } 
    else if (ele >= 60) { grade = 'D' } 
    else                { grade = 'F' };
    return {"score": ele, "grade": grade};
})

console.log(grade)