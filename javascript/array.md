# map
```js
> let myArray = [1,2,3,4,5]
undefined
> myArray.map(v => v**2);
[ 1, 4, 9, 16, 25 ]
> myArray
[ 1, 2, 3, 4, 5 ]
```

```js
> var myTag = [
    {id: 0, text:'hello', tag:'a'},
    {id: 1, text:'world', tag:'b'},
    {id: 2, text:'Bye', tag:'c'}
    ]
undefined
> var modArray = myTag.map(v => v.id === 1 ? ({text:'React'}) : v);
undefined
> modArray
[ { id: 0, text: 'hello', tag: 'a' },
  { text: 'React' },
  { id: 2, text: 'Bye', tag: 'c' } ]
```
```js
> var myTag = [
    {id: 0, text:'hello', tag:'a'},
    {id: 1, text:'world', tag:'b'},
    {id: 2, text:'Bye', tag:'c'}
    ]
undefined
> var modArray = myTag.map(v => v.id === 1 ? ({...v, text:'React'}) : v);
undefined
> modArray
[ { id: 0, text: 'hello', tag: 'a' },
  { id: 1, text: 'React', tag: 'b' },
  { id: 2, text: 'Bye', tag: 'c' } ]
```

# filter
```js
> let myArray = [1,2,3,4,5]
undefined
> myArray.filter(n => n%2 === 0)
[ 2, 4 ]
> myArray.filter(n => n%2 === 1)
[ 1, 3, 5 ]
> myArray
[ 1, 2, 3, 4, 5 ]
```
# reduce
