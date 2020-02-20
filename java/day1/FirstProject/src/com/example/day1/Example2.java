package com.example.day1;

public class Example2 {
    public static void main(String[] args){
        long startTime = System.currentTimeMillis();
        String str = "A";
        for(int i=0 ; i<10_0000 ; i++){
            str += "A";
        }
        long endTime = System.currentTimeMillis();
        System.out.println("Elapsed time:" + (endTime - startTime));

        startTime = System.currentTimeMillis();
        StringBuilder   sb  = new StringBuilder("A");
        String          s1  = new String("A");
        String          s2  = "A";
        int             o   = 100;
        for (int i=0 ; i<100_0000 ; i++){
            sb.append("A");
        }
        endTime = System.currentTimeMillis();
        System.out.println("Elapsed time:" + (endTime - startTime));

//        String name = "브라질땅콩";
//        List list1 = new ArrayList();
//        Collection List2 = new ArrayList();
//        System.out.println(list1 instanceof List);

//        int a = 1;
//        int b = 2;
//        int c = a++ + ++b;
//        String result = String.format("a=%s, a++=%s, ++b=%s, c=%s", a, a++, ++b, c);
//        System.out.println(result);
//        a = 1;
//        for (int i=0 ; i<10 ; i++){
//            result = String.format("%s=%s", a++, i);
//            System.out.println(result);
//        }
    }
}
