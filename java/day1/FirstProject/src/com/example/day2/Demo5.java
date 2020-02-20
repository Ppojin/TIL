package com.example.day2;

public class Demo5 {
    public static void main(String[] args) {
        Member mem1 = new Member("Java", 10); // 인스턴스화 (mem1 => 인스턴스, 객체)
        Member mem2 = new Member("c++", 20);
        Member mem3 = new Member("Python");
        mem1.displayInfo();
        mem2.displayInfo();
        mem3.displayInfo();
    }
}
