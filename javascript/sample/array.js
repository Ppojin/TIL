function Student (name, kor, math, eng) {
    this.name = name;
    this.kor = kor;
    this.math = math;
    this.eng = eng;

    this.getSum = () => {
        return this.math + this.kor + this.eng;
    };
    this.getAverage = () => {
        return this.getSum() / 3;
    };
    this.toString = () => {
        return `${this.name} \t ${this.getSum()} \t ${this.getAverage()}`;
    };
}

var students = [];
students.push(new Student('aaa', 15, 25, 96));
students.push(new Student('bbb', 55, 29, 99));
students.push(new Student('ccc', 98, 79, 70));

students.sort((left, right) => {
    return left.getSum() - right.getSum();
})
const len = students.length 
for(let i = 0 ; len > i ; i++){
    console.log(students.pop().toString());
}