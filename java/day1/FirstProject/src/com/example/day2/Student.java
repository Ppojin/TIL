package com.example.day2;

public class Student{
    private String name;
    private int kor, eng, math, sum;
    private float avg;
    public Student (String name, int kor, int eng, int math){
        this.name = name;
        this.kor = kor;
        this.eng = eng;
        this.math = math;
        calculate();
    }
    public void calculate(){
        this.sum = this.kor + this.eng + this.math;
        this.avg = (this.kor + this.eng + this.math) / 3.0f;
    }
    @Override
    public String toString(){
        return String.format("%s\t(총점: %s / 평균: %.2f) = 국어: %s, 영어: %s, 수학: %s",
                this.name, this.sum, this.avg, this.kor, this.eng, this.math
        );
    }
    @Override
    public boolean equals(Object obj){
        Student temp = (Student)obj;
        return this.kor == temp.kor && this.eng == temp.eng && this.math == temp.math;
    }

    // ========================== getter and setter ==========================
    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public int getKor() {
        return kor;
    }

    public void setKor(int kor) {
        this.kor = kor;
    }

    public int getEng() {
        return eng;
    }

    public void setEng(int eng) {
        this.eng = eng;
    }

    public int getMath() {
        return math;
    }

    public void setMath(int math) {
        this.math = math;
    }

    public void setSum(int sum) {
        this.sum = sum;
    }

    public int getSum() {
        return this.sum;
    }

    public float getAvg() {
        return avg;
    }

    public void setAvg(float avg) {
        this.avg = avg;
    }
}
