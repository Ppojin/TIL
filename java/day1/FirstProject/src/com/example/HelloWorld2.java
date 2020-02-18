package com.example;

public class HelloWorld2 {
    public static void main(String[] args) {
        String name = "효진";
        String hobby = "java";
        System.out.println(name == hobby);

        String name1 = "효진";
        String name2 = "효진";
        System.out.println(name1 == name2);

        String newName1 = new String("효진");
        String newName2 = new String("효진");
        System.out.println(newName1 == newName2);
    }
}
