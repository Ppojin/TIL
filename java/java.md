# java
## 주요 사용 분야
- java : 임베디드 웹 안드로이드
  - 데스크톱 app
    - 잘 안씀
      - 제약사항 = VB, C
  - 안드로이드
  - 웹사이트
    - 주로 서버사이드
- c : hw, 장치제어 임베디드 sw
- c++, c#: 데스크탑 앱, asp.net 기반 sw
- python: 빅데이터 분석 및 머신러닝 SW

## 특
- 모든 운영체제에서 실행 가능
- 객체지향 프로그래밍 (OOP : Object-Oriented Programming)
- 메모리 자동 정리
  - 가비지 컬렉터 (GC: garvage collector)
- 라이브러리가 많음

## 버전
- JDK : 개발도구
  - SE : standard edition
  - ME : Microservice edition
  - EE : enterprize edition
- JRE : 실행환경

- java
  - 실행
- javac
  - 빌드
  - compiler

## method
- method = object
- method like(function)

## compile
```shell
$ javac HelloWorld.java
$ ls
    HelloWorld.java
    HelloWorld.class
```
HelloWorld.class 는 바이너리 파일

## 에러
## Exception 에러
> 코드
```java
public class HelloWorld {
    public static void main(String[] args) {
        String name = null;
        System.out.println(name.length());
    }   
}
```
> 결과
```
Exception in thread "main" java.lang.NullPointerException
        at HelloWorld.main(HelloWorld.java:7)
```

`NullPointerException`
`null`  길이가 존재할 수 없음

---
```java
public class HelloWorld {
    public static void main(String[] args) {
        String name = null;
        System.out.println(name.length());
    }   
}
```

- 이진수: 0b...
- 8진수: 0...
- 16진수: 0x...

## 실수
```java
double pi = 3.14;
float pi = 3.14f;
float pi = (float)3.14; // casting 데이터 손실이 있음
```

## 형변환
- `integer.parseInt()`
- `Double.parseDouble()`
### 자동 형변환
- 자료형 크기 순서
- byte => short => int => long => float => double

### 강제 형변환 (캐스팅)
```java
int intVal = 65;
char charVal = (char)intVal;

double doubleVal = 3.14;
int intVal = (int)doubleVal;

System.out.println(charVal);
System.out.println(intVal);
```
```java
// 소수로 캐스팅
(float)3.14

Parant a = new Parant();
Child b = new Child();
a = b
b = a
b = (Child)a
```
```java
Object obj = new String("문자열");
```