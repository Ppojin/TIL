# 접근 제한자 modifier
```java
class SomeClass{
    {{접근 제한자}} SomeClass(){}
    {{접근 제한자}} void someMethod(){}
}
```

`private` < ` `(default) < `protected` < `public`

## `private`
- 같은 클래스 = O
- 같은 패키지 = X
- 다른 패키지 = X
## ` `(default)
- 같은 패키지 = O
- 다른 패키지 = X
## `protected` = default
- 같은 패키지 = O
- 다른 패키지 = X
- 다른 패키지(상속) = O
## `public`
- 같은 패키지 = O
- 다른 패키지 = O
