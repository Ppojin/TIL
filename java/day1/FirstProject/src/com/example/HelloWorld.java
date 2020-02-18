package com.example;
import java.lang.*;
import java.util.Scanner;

public class HelloWorld {
    public static int printAndScan(String val){
        Scanner s = new Scanner(System.in);
        System.out.print(val+": ");
        return s.nextInt();
    }

    public static void main(String[] args) {
        System.out.println("hello World");

        int kor = printAndScan("국어점수");
        int eng = printAndScan("영어점수");
        int math = printAndScan("수학점수");

        int total = kor + eng + math;
        float avg = total / 3.0f;

        String result1 = String.format("총점: %s, 평균: %s\n", total, avg);
        System.out.print(result1);

        String result2 = String.format("총점: %s, 평균: %.2f\n", total, avg);
        System.out.print(result2);

        switch ((int)avg/10){
            case 10:
            case 9:
                System.out.println("A");
                break;
            case 8:
                System.out.println("B");
                break;
            case 7:
                System.out.println("C");
                break;
            case 6:
                System.out.println("D");
                break;
            default:
                System.out.println("F");
        }
    }
}

