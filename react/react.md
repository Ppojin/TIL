# react

## SPA

Single Page Application

## reference

- aribnb, bbc, cloudflare, codeacademy, coursera, dailymotion, ebay, walmart, yahoo

## servierside rendering

- round trip
- 페이지 리소스 전체를 로드함

  ## spa

- 페이지의 필요한 부분만 로드함

## js

- 구현의 어려움
- 언어의 모호성
- cross browsing 의 환계

## jquery

- js 의 library
- js dom 처리의 어려움과 cross browsing 처리 해결
- 가장 대표적인 js library

## front library or framework

DOM 관리 및 상태 값 업데이트

- **Angular**, Backbone, Ember, **React**, **Vue.js**

### Angular

- google 공식 언어
- 사용하기 상당히 어려움
- 라우터, HTTP 클라이언트 등의 필요한 도구가 프레임워크 안에 내장
- Typescript

### React

- facebook 에서 만듦
- component 기반
- HTTP, client, router, status 관리 등의 기능이 내장되어있지 않기 때문에, 자유롭게 사용 가능하며, 직접 라이브러리 용이

### Vue

- 사용 간단, HTML 을 템플릿처럼 사용 가능
- CDN의 파일을 로딩하여 스크립트 실행
- 공식 라우터, 상태관리 라이브러리 존재

## virtual DOM

## 높은 자유도

라우터, 상태관리는 자체 내장되어있지 않기 때문에 선택하여 3rd party library 를 사용할 수 있다

### yarn

- 패키지 관리 프로그램
- facebook에서 만든 js 패키지 매니저

### webpack

- 압축할 때 사용

### Barbel

표준 js 코드 호환성

before bable

```javascript
[1,2,3].map(n => n ** n);
```

after bable

```javascript
[1,2,3].map(function(n) {
    return Math.pow(n, n);
});
```

```javascript
var [a,,b] = [1,2,3];
```

```javascript
var _ref = [1,2,3];
    a = _ref[0];
    b = _ref[2];
```

```javascript
const x = [1,2,3];
foo([...x]);
```

```javascript
var [x] = [1,2,3];
foo([].concat(x));
```

create-react-app

- 페이스북에서 제공하는 react 템플릿
- <http://github.com/facebook/create-react-app>

## jsx

### closer

- 모든 태그에 close 태그를 추가하거나 self close 해야함

### 변수사용

- render 에서 중괄호(`{}`) 를 이용하여 출력 가능하다.

### 조건문

- 삼항연산자 or
- ```javascript
  {time < 15 ? (<div>Hello, {name}</div>) : (<div>Bye, {name}</div>)}
  ```

  ```javascript
  {
    (
    function(){
        if (time < 12) return (<div>Good Morning, {name}</div>);
        else if (time < 18) return (<div>Good Afternoon, {name}</div>)
        else if (time < 22) return (<div>Good Evening, {name}</div>)
    }
    )()
  }
  ```

### style

```javascript
class App extends Component {
  render(){
    const name = 'Hyojin';
    const css = {
      color: 'red',
      background: 'black',
      padding: '20px',
      fontSize: '25px'
    }
    return(
      <div className='App-header'>
        <div style={css}>Hello, {name}</div>
      </div>
    );  
  };
};
```

## 핵심기능

### props

- 부모 컴포넌트가 자식 컴포넌트에게 전달하는 값
- 자식 컴포넌트에서는 props의 값을 수정할 수 없음
- props 값은 this. 키워드를 이용하여 사용

```javascript
import React, { Component } from 'react';
class MyIntro extends Component {
    render(){
        const css = {
            color: 'red',
            fontSize: '40px'
        }

        return (
            <div style={css}>
                안녕하세요, 제 이름은 <b>{this.props.name}</b> 입니다.
            </div>
        );
    }
}

export default MyIntro;
```

```javascript
import React, { Component } from 'react';
import MyIntro from './MyIntro';

class App extends Component {
  render(){
    const myName = "Hyojin";
    return(
      <MyIntro name={myName}/>
    );  
  };
};

export default App;
```

### state

- 컴포넌트 내부에 선언하여 사용되는 보관용 데이터 값
- 동적인 데이터 처리
- 부모 컴포넌트 =(props)=> 자식 컴포넌트
- 자식 컴포넌트 =(state)=> 자식 컴포넌트

## react 기본구성

```javascript
import react, {component} from 'react';

function MyIntro() {
    return (
        /*jsx*/
    );
}

export default MyIntro
```

```javascript
import react, {component} from 'react';

class MyIntro extends Component {
    render(){
        return (
            /*jsx*/
        );
    }
}

export default MyIntro
```

## 전개연산자

state

```javascript
state = {
  id: 1
  info = {
    name: 'who',
    age: 10
  }
}
```

틀린 예

```javascript
this.setState({
  info: {
    name: 'who',
    age: 10
  }
})
```

옳은 예

```javascript
this.setState({
  info: {
    ...this.state.info
    name: 'who',
  }
})
```

## 생명주기(LifeCycle) 메서드

### constructor

초기화 단계 맨 처음 실행됨

```javascript
constructor(props){
    super(props);
    console.log('call constructor');
}
```

### componentDidMount

생성자 호출 후 실행됨 초기화 직후 한번만 실행됨

```javascript
componentDidMount(){
    console.log('componentDidMount')
}
```

```javascript
// 업데이트 단계
shouldComponentUpdate(nextProps, nextStats){
    // 5의 배수라면 리렌더링 하지 않음
    console.log('shouldComponentUpdate');
    if (nextStats.count % 5 === 0) {
        // 다음 생명주기 작동하지 않음
        return false;
    }
    return true;
}
```

```javascript
componentWillUpdate(nextProps, nextStats){
    console.log('componentWillUpdate');
}
```

```javascript
componentDidUpdate(nextProps, nextStats){
    console.log('componentDidUpdate');
}
```

## 부모 컴포넌트에 정보 전달

- state 의 값을 부모 컴포넌트에게 전달
- 부모 컴포넌트의 함수를 자식 컴포넌트에 전달 => 자식 컴포넌트에서 부모의 함수 호출 자식 =(부모의 함수(data))=> 부모 컴포넌트

## 이벤트

1. 이벤트 주체를 결정

  - 삭제 버튼

2. 이벤트 종류를 결정

  - 클릭이벤트

3. 이베트 핸들러를 구현

  - 이벤트가 작동되면 어떤 동작을 할 지 결정하는 함수 구현

4. 이벤트 주체 <=> 핸들러 연결

  - 함수 <=> 버튼

## npm install

- '--save' 옵션: package json 에 추가

## lodash
시간관리 라이브러리

## redux
데이터를 보관해주는 라이브러리


### native app
- ios
  - swift
  - objective C
- android
  - java
  - kotlin
### mobile web
HTML5
JavaScript
CSS

### hybrid app
Native app + mobile web
+ anguler
+ 