package com.example.day3;

import com.example.day2.Student;

import java.util.Arrays;
import java.util.Comparator;

class MyComparator implements Comparator<Student> {
    @Override
    public int compare(Student s1, Student s2) {
        if (s2.getSum() == s1.getSum()){
            return s1.getName().compareTo(s2.getName());
        }else{
            return s2.getSum() - s1.getSum();
        }

    }
}

public class SungjukAppV2 {
    public static void main(String[] args) {
        Student[] students = new Student[]{
            new Student("김두한", 85, 29, 100),
            new Student("황효진", 100, 100, 1),
            new Student("이순신", 85, 93, 58),
            new Student("강감찬", 100, 100, 1),
            new Student("마을이장", 29, 99, 40)
        };

//        for(Student student : students){
//            System.out.println(student);
//        }

//        System.out.println(students[0].e후quals(students[1]));    // 재정의 되어있음
//        System.out.println(students[0] == students[1]);         // 주소가 다르기 때문에 false
        System.out.println("================정렬전=================");
        for (Student stu : students) {
            System.out.println(stu);
        }

        System.out.println("================정렬후=================");
        Arrays.sort(students, new MyComparator());

        for (Student stu : students) {
            System.out.println(stu);
        }
    }
}
