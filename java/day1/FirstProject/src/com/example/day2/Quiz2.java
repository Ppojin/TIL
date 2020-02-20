package com.example.day2;

import java.util.Arrays;
import java.util.Random;
import java.util.Scanner;

public class Quiz2 {
    public static int printAndScan(String val){
        Scanner s = new Scanner(System.in);
        System.out.print(val+": ");
        return s.nextInt();
    }

    public static void main(String[] args) {
        Random generator = new Random(System.currentTimeMillis());
        int[] lotto = new int[6];
        int index = 0;
        while (true){
            int _temp = generator.nextInt(44)+1;
            boolean isDuplicated = false;
            for(int previousVal : lotto){
                if(previousVal == _temp) {
                    isDuplicated = true;
                    break;
                }
            }
            if (isDuplicated){
                continue;
            }
            if(index == 6){
                break;
            }
            lotto[index] = _temp;
            index++;
        }

        int[] pick = new int[6];
        for (int i = 0; i < 6 ; i++) {
            pick[i] = printAndScan(String.valueOf(i+1));
        }

        int count = 0;
        for (int i = 0; i < 6 ; i++) {
            System.out.print(lotto[i] + "\t");
            for(int num : lotto){
                if (num == pick[i]) {
                    count++;
                }
            }
        }
        System.out.println();
        System.out.println(count);

//        for (int i = 0; i < 6 ; i++) {
//            for(int num : lotto){
//                if (num == pick[i]) {
//                    System.out.print(num + "\t");
//                }
//            }
//        }
    }
}
