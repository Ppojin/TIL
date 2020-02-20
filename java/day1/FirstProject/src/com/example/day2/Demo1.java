package com.example.day2;

public class Demo1 {
    public static void main(String[] args) {
        String hello = "Hello";
        String newHello = new String("Hello");
//
//        System.out.println(hello == newHello);
//        System.out.println(hello.equals(newHello));

        String name = "hello";
        name = null;
        System.out.println(name);
        System.out.println(name.length());
    }
}
