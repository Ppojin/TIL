package com.example.day3;

public class Calculator {
    int add(int x, int y) {
        return x + y;
    }
    float add(float x, float y){
        return x + y;
    }
    double add(double x, double y){
        return x + y;
    }
    // 가변 데이터 이용
    int add(int...values){
        int result = 0;
        for (int val : values) result += val;
        return result;
    }
    int subtract(int x, int y){
        return x - y;
    }
    int multiply(int x, int y){
        return x * y;
    }
    int divide(int x, int y){
        return x / y;
    }
}
