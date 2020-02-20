# 문자열 비교

```java
String hello = "Hello";
String newHello = new String("Hello");

System.out.println(hello == newHello);
```
> false

같은 값을 가지고 있지만 다른 값으로 인지하는 것처럼 보임

자바에서 `==` 는 같은 변수(stack) 에 저장되어있는 heap 주소값을 가지고 있는지만을 비교함.

`.equlas({{String}})` method를 이용하여 

```java
String hello = "Hello";
String newHello = new String("Hello");

System.out.println(hello.equals(newHello));
```
> true