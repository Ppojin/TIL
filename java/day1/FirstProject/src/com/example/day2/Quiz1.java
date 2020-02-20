package com.example.day2;

import java.util.Arrays;
import java.util.Comparator;

public class Quiz1 {
    public static void main(String[] args) {
        Student[] students = new Student[5];
        students[0] = new Student("aaa", 100, 100, 1);
        students[1] = new Student("bbb", 24, 58, 49);
        students[2] = new Student("ccc", 85, 93, 58);
        students[3] = new Student("ddd", 85, 29, 100);
        students[4] = new Student("eee", 29, 99, 40);

//        Comparator<Student> comparator = (Student1, Student2) -> Student2.sum - Student1.sum;
        Comparator<Student> comparator = java.util.Comparator.comparingInt(student -> -student.getSum());
        Arrays.sort(students, comparator);

        for(Student student : students){
            System.out.println(student.toString());
        }
    }
}
