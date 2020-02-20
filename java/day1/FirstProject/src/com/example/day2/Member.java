package com.example.day2;

public class Member {
    // (optional) nested class = 중첩클래스
    class VipMemeber{

    }

    // fields
    int age;
    String name;
    Project finalProject;

    // (optional)methods
    void displayInfo(){
        System.out.println(String.format("이름은 %s 이고, 나이는 %s 입니다.",name, age));
    }

    // 반환값 메소드이름(){
    void 메소드이름_1(){

    }
    int 메소드이름_2(){
        return 1;
    }

    // (optional)constructor method
    public Member(String name, int age){
        this.age = age;
        this.name = name;
    }
    // OverLoading = 같은 클래스에서 method 이름은 같아야 하고, parametar 개수나 타입이 달라야함
    public Member(String name){
        this.name = name;
    }
}

class Project {
    String name;
    String period;
    void budget(){

    }
}