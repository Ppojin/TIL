# 스프레드 오퍼레이터

## 기존 문법으로 배열(or json) 을 복제할 때

- 배열의 값을 복제할 때
    ```js
    var arr     = [ 1,      2,      3       ];
    var newArr  = [ arr[0], arr[1], arr[2]  ];
    ```
- json 객체의 값을 복제할 때
    ```js
    var json     = { a: 10,      b: 20       };
    var newJson  = { a: obj.a,   b: obj.b    };
    ```

## 스프레드 오퍼레이터를 이용해서 배열(or json) 을 복제할 때
- 배열의 값을 복제할 때
    ```js
    var arr     = [1,2,3];
    var newArr  = [...arr];
    ```
- json 객체의 값을 복제할 때
    ```js
    var json     = { a: 10, b: 20 };
    var newJson  = {...obj};
    ```