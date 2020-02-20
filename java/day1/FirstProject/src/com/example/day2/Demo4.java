package com.example.day2;

public class Demo4 {
    public static void main(String[] args) {
        String[] strArray = new String[3];
        strArray[0] = "a";
        strArray[1] = "b";
        strArray[2] = "c";

        String[] newArray = new String[3];
        System.arraycopy(strArray, 0, newArray, 0, strArray.length);
        for (String str : newArray) {
            System.out.println(str);
        }
    }
}
