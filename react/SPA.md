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
```js
[1,2,3].map(n => n ** n);
```
after bable
```js
[1,2,3].map(function(n) {
    return Math.pow(n, n);
});
```

```js
var [a,,b] = [1,2,3];
```
```js
var _ref = [1,2,3];
    a = _ref[0];
    b = _ref[2];
```

```js
const x = [1,2,3];
foo([...x]);
```
```js
var [x] = [1,2,3];
foo([].concat(x));
```

create-react-app
- 페이스북에서 제공하는 react 템플릿
- http://github.com/facebook/create-react-app

## jsx
### closer
- 모든 태그에 close 태그를 추가하거나 self close 해야함

### 변수사용
- render 에서 중괄호(`{}`) 를 이용하여 출력 가능하다.

### 조건문
- 삼항연산자 or 
- 
```js
{time < 15 ? (<div>Hello, {name}</div>) : (<div>Bye, {name}</div>)}
```
```js
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
```js
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

