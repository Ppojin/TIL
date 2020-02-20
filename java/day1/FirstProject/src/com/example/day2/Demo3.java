package com.example.day2;

public class Demo3 {
    public static void main(String[] args) {
//        int[][] scores = new int[2][3];
        int[][] scores = new int[2][];
        scores[0] = new int[2];
        scores[1] = new int[4];

        scores[0][0] = 100;
        scores[0][1] = 200;
//        scores[0][2] = 300;

        scores[1][0] = 400;
        scores[1][1] = 500;
        scores[1][2] = 600;
        scores[1][3] = 700;

        for (int k = 0; k < scores.length ; k++) {
            for (int l = 0; l < scores[k].length; l++) {
                System.out.print(
                        String.format("[%s][%s]=[s]\t", k, l, scores[k][l] )
                );
            }
            System.out.println();
        }


        int index1 = 0;
        for (int[] arr: scores) {
            int index2 = 0;
            for (int x: arr){
                System.out.print(String.format("[%s][%s]=[s]\t", index1, index2, x));
                index2++;
            }
            index1++;
            System.out.println();
        }

//        System.out.println(scores.length);
//        System.out.println(scores[0].length);
//        System.out.println(scores[1].length);
    }
}
