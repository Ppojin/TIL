package com.example.day1;

import java.util.ArrayList;
import java.util.Scanner;

public class Quiz1 {
    public static void getDivisor(){
        Scanner s = new Scanner(System.in);
        System.out.print("약수: ");

        int val = s.nextInt();
        ArrayList<Integer> resultList = new ArrayList<>();
        for(int i = 1 ; i <= val ; i++){
            if(val%i==0){
                System.out.print(i+", ");
            }
        }
        System.out.println();
    }

    public static void getPrime(){
        Scanner s = new Scanner(System.in);
        System.out.print("약수: ");
        int val = s.nextInt();
        int lineNum = 1, count = 0;
        boolean isPrime;
        for(int num = 2 ; num <= val ; num++){
            isPrime = true;
            for(int i = 2 ; i < num ; i++){
                if(num % i == 0){
                    isPrime = false;
                    break;
                }
            }
            if(isPrime){
                System.out.print(num);
                count++;
            }

            if(lineNum == count){
                lineNum++;
                count = 0;
                System.out.println();
            } else if(isPrime) {
                System.out.print(" ");
            }
        }
    }

    public static void getFibonacci(){
        Scanner s = new Scanner(System.in);
        System.out.print("마지막 수: ");
        int val = s.nextInt();
        int pre = 1, post = 1, temp;

        while(val >= post){
            temp = post;
            post += pre;
            pre = temp;
        }
        System.out.println(post);
    }

    public static void main(String[] args) {
        Scanner s = new Scanner(System.in);
        while (true){
            System.out.print("1=약수, 2=소수, 3=피보나치: ");
            int val = s.nextInt();
            switch(val){
                case 1:
                    getDivisor();
                    break;
                case 2:
                    getPrime();
                    break;
                case 3:
                    getFibonacci();
                    break;
                default:
            }
        }
    }
}
