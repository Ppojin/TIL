package com.example.day2;

public class Demo2 {
    public static void main(String[] args) {
//        int[] scores = {1,2,3,4,5,6,7};
//        System.out.println(scores.length);
//        System.out.println(scores[0]);
//        System.out.println(scores[6]);
//================================================================================================================
//        String[] names = {"A", "BB", "CCC", "DDDD", "EEEEE"};
//        System.out.println(names.length);
//        System.out.println(names[1]);
//        names[4] = "JAVA";
//        System.out.println(names[4]);
//================================================================================================================
//        String[] names = new String[]{"A", "BB", "CCC", "DDDD", "EEEEE"};
//        int[] scores;
//        scores = new int[]{1,2,3,4,5,6,7}; // 됨 //error => scores = {1,2,3,4,5,6,7};
//
//        String[] animals = new String[5];
//        animals[0] = new String("monkee");
//        animals[1] = new String("rabbit");
//        animals[2] = new String("tuttle");
//        animals[3] = new String("snake");
//        animals[4] = "cat";
//
//        for (int i = 0 ; i <animals.length  ; i++){
//            System.out.println(i + " = " + animals[i]);
//        }
//
//        int index = 0;
//        for (String animal : animals) {
//            System.out.println(index++ + " = " + animal);
//        }
//================================================================================================================
        double[] d = new double[5];
        d[0] = 0.0;             // (8bytes)double = double
        d[1] = 3.14f;           // (8bytes)double = (4bytes)flost
        d[2] = 100;             // (8bytes)double = (4bytes)int
        d[3] = 32_0000_0000L;   // (8bytes)double = (8bytes)long
        d[4] = 'A';             // (8bytes)double = (2bytes)char
        for (double _d : d) {
            System.out.println(_d);
        }
//================================================================================================================
    }
}
