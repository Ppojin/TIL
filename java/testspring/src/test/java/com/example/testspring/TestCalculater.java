package com.example.testspring;

import org.junit.jupiter.api.Assertions;
import org.junit.jupiter.api.Test;

/*
2가지 숫자의 정수 덧셈
2가지 숫자의 정수 뺄셈
 */
public class TestCalculater {
    // annotation == 부가설명, 기능을 코드 없이 설정
    @Test
    public void testAdd(){
        Calculater calc = new Calculater();
        int result = calc.add(10, 20);
        Assertions.assertEquals(30, result);
    }

    @Test
    public void errorTestAdd(){
        Calculater calc = new Calculater();
        int result = calc.add(20,20);
        Assertions.assertNotEquals(30, result);;
    }

    @Test
    public void testSubtract(){
        Calculater calc = new Calculater();
        int result = calc.subtract(10,20);
        Assertions.assertEquals(-10, result);;
    }

    @Test
    public void errorTestSubtract(){
        Calculater calc = new Calculater();
        int result = calc.subtract(10,20);
        Assertions.assertNotEquals(30, result);;
    }

}
