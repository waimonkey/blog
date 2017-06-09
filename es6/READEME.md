[TOC]


---
## 一. 变量的解构赋值 


### 1. 数组的解构赋值
---
#### 1.1 基本用法
ES6 允许按照一定的模式,从数组和对象中提取值,对变量进行赋值,这被称为结构(Dextructring)
以前 为变量赋值,只能直接指定值
```js
let a = 1;
let b = 2;
let c = 3;
```

ES6 允许写成下面这样

```js
let [a,b,c] = [1,2,3];
```

上面代码表示,可以从数组中提取值,按照对应位置,对变量赋值

本质上,这种写法属于 "模式匹配", 只要等号两边的模式相同,左边的变量就会被杜宇对应的值,下面是一些使用嵌套数组进行解构的例子

```js
let [foo,[[bar],baz]] = [1,[[2],3]]
console.log(foo,bar,baz)  // 1 2 3

let [ , , third] = ['foo','bar','baz']
console.log(third) // baz

let [head , ...tail] = [1,2,3,4]
console.log(head,tail) //1 [ 2, 3, 4 ]

let [x,y,...z] = ['a']
console.log(x,y,z) // a undefined []
```

如果结构不成功 变量的值就等于  `undefined`

```js
 let [foo] = []
 let [bar,foo] = [1]
```

以上两种情况都属于解构不成功,foo的值都会等于 `undefined`

另一种情况是不完全结构,即等号左边的模式,只匹配一部分等号右边的数组,这种情况下,解构依然可以成功

```js
let [m,n] = [1,2,3]
console.log(m,n)  //1 2
let [a,[b], d] = [1, [2,3],4]
console.log(a,b,d) // 1 2 4
```

上面两个例子,都属于不完全结构,但是可以成功

吐过等号的右边不是数组(或者严格的说,不是可遍历的结构,参见《Iterator》一章），那么将会报错。)

```js
let [foo] = 1;
let [foo] = false;
let [foo] = NaN;
let [foo] = undefined;
let [foo] = null;
let [foo] = {};
console.log(foo)
```

上面的语句都会报错,因为等号右边的值,要转为对象以后不具备 Iterator 接口
(前五个表达式),要么本身不剧本 Iterator 接口(最后一个表达式)

对于 `set` 结构,也可以使用数组的解构赋值

```js
let [x,y,z] = new Set(['a','b','c'])
```

事实上只要某种数据解构具有 Iterator 接口,都可以采用数组形式的解构赋值

```js
function* fibs() {
  let a = 0;
  let b = 1;
  while (true) {
    yield a;
    [a,b] = [b,a+b];
  }
}
let [first,second,third,fourth,fifth,sixth] = fibs();
console.log(first,second,third,fourth,fifth,sixth)  // 0 1 1 2 3 5

```

上面代码中 `fibs` 是一个 Generator 函数 原生具有 Iterator 接口 解构赋值会一次从这个接口获取值

---

#### 1.2 默认值

解构赋值允许指定默认值

```js
let [foo = true] = []
console.log(foo) // true
let [x,y='b'] = ['a']
console.log(x,y)  // a b
let [a,b='b'] = ['a', undefined]
console.log(a,b)  // a b
```

注意, ES6 内部使用严格相等的运算符 (`===`),判断一个位置是否有值
所以,如果一个数组成员不严格等于 `undefined`,默认值是不会生效的

```js
let [x = 1] = [undefined]
console.log(x) // 1

let [x = 1] = [null]
x // null 
```
  
上面代码中,如果一个数组成员是 `null` 默认值就不会生效,因为 `null` 不严格等于 `undefined`

如果默认值是一个表达式,那么这个表达式式惰性求值的,即只有在用到的时候,才会求值

```js

function f() {
  console.log('aaa')
}
let [x = f()] = [1]
console.log(x) // 1
```

上面代码中 因为 `x` 能取到值,所以函数 `f` 根本不会执行,上面的代码其实等价于下面的代码

```js
let x;
if ([1][0] === undefined) {
  x = f()
} else {
  x = [1][0]
}
function f() {
  console.log('aaa')
}
console.log(x) // 1
```

默认值可以引用解构赋值的其他变量,但该变量必须已经声明

```js
let [x =1, y = x] = []  // x=1 y = 1
let [x = 1, y = x] = [2] // x= 2 y = 2
let [ x= 1, y = x] = [1,2] // x= 1 y =2
let [ x= y, y =1] = [] // 报错

```

上面最后一个表达式之所以会报错,是因为 `x` 用到默认值 `y` 时, `y`
还没有声明

---

### 2. 对象的解构赋值

解构不仅可以用于数组,还可以用于对象

```js
let {foo ,bar} = {foo: 'aaa', bar: 'bbb'};
foo // aaa
bar // bbb

```

对象的解构与数组有一个重要的不同,数组元素是按次序排列的,变量的取值由它的位置决定,
而对象的属性是没有次序的,变量必须与属性同名,才能取到正确的值

```js
let { bar, foo } = { foo: 'aaa', bar; 'bbb'}
foo // aaa
bar // bbb

let {baz} = { foo: 'aaa', bar: 'bbb'}
baz // undefined
```

上面的代码第一个例子,等号左边的两个变量的次序,与等号右边两个同名属性的次序不一致,但是对取值是没有影响的,第二个
例子的变量没有对应的同名属性,导致娶不到值,最后等于 `undefined`

如果变量名与属性名不一致,必须写成下面这样

```js
var { foo: baz } = { foo: 'aaa', bar: 'bbb'}
baz // aaa

let obj = { first: 'hello', last: 'world'}
let {first: f, last: l} = obj
f // hello
l // world
```

这实际上说明,对象的解构赋值是下面形式的简写

```js
let { foo: foo, bar:bar} = {foo: 'aaa', bar:'bbb'}

```

也就是说,对象的解构赋值的内部机制,是先找到同名属性,然后在赋值给对应的变量,真正被赋值的是后者,而不是前者

```js
let {foo:baz} = {foo:'aaa', 'bar': 'bbb'}
baz // aaa

foo // error: foo is not defined


```

上面代码中, `foo` 是匹配模式, `baz` 才是变量,真正被复制的是变量 `baz` 而不是模式 `foo`

**注意,** 采用这种写法时,变量的声明和赋值是一体的, 对于 `let`和`const`来说,
变量不能重新声明,所以一旦赋值的变量以前声明过,就会报错

```js
let foo;
let {foo} = {foo:1}  //报错  SyntaxError: Duplicate declaration "foo"

let baz;
let {bar:baz} = {bar:1} ////报错  SyntaxError: Duplicate declaration "foo"
```

上面代码中,解构赋值的变量都会重新声明,所以报错了,不过因为 `var`命令允许重新声明
所以这个错误只会在使用`let`和`const`命令时出现,如果没有第二个`let`
命令,上面的代码就不会报错

```js
let foo ;
({foo} = {foo:1}) 

let baz 
({bar:baz} = {bar:1})
```

上面代码中,`let`命令下面一行的圆括号是必须的,否则会报错,因为解析器会将其收的大括号,理解为一个代码块,而不是赋值语句

和数组一样,解构也可以用于嵌套结构的对象

```js
let obj = {
  p:[
  'hello',
  { y: 'world'}
  ]
};

let {p:[x,{y}]} = obj;

x // hello
y // world
```

这时,`p`是模式,而不是变量,因此不会被赋值

```js
var node = {
  loc: {
    start: {
      line: 1,
      column: 5
    }

  }
};

var {loc: { start: {line}}} = node;

line  // 1
loc // error: loc is undefined
start // error: loc is undefined

```

上面diamante中,只有 `line` 是变量, `loc`和`start`都是模式,不会被渎职

下面是嵌套赋值的例子

```js
let obj = {}
let arr = []

({foo:obj.prop,bar: arr[0]} = {foo:123,bar:true})

obj // { prop:123}
arr // [true]
```

对象的解构也可以指定默认值

```js
var { x = 3} = {}
x // 3

var { x, y = 3} = {x:1}

x // 1
y // 3

var { x:y=3} = {}
y // 3

var {x:y=3} = {x:5}
y //5

var { message: msg = 'something went wrong'} = {}
msg // 'something went wrong'
```

默认值生效的条件是,对象的属性值严格等于 `undefined`

```js
var { x = 3} = { x : undefined}
x // 3

var { x = 3 } = { x ; null}
x // null

```

上面代码中,如果 `x` 属性等于 `null` 就不严格等于 undefined,
导致默认值不会生效

如果解构失败,变量的值等于 `undefined`

```js
let {foo} = {bar:'haz'}
foo // undefined
```

如果解构模式是嵌套的对象,而且子对象所在的福属性不存在,那么将会报错

```js
let {foo:{bar}} = {baz:'baz'}

```

上面代码中,等号左边对象的`foo`属性 对应一个子对象,该子对象的 `bar`属性,解构时会报错,原因很简单,因为 `foo`这是等于 `undefined`,再取紫属性就会报错,请看霞妹妹的代码

```js
let _tmp = {baz:'haz'}
_tmp.foo.bar  //报错

```

如果要将一个已经声明的变量用于解构赋值,必须非常小心

```js
//报错写法

let x;
{x} = {x:1}
// SyntaxError: syntax error
```

上面代码的写法会报错,因为JavaScript 引擎会将`{x`理解为一个代码块,从而发生语法错误,只有不降大括号卸载函授,避免JavaScript
将其解释为代码块,才能解决这个问题

```js
//正确写法
({x} = {x:1})
```

上面代码讲整个解构赋值语句,放在一个圆括号里,就可以正确执行,关于圆括号与解构赋值的关系,参见下文

解构赋值允许,等号左边的模式之中,不防止任何变量名,因此,可以写出非常古怪的赋值表达式

```js
({} = [true,false])
({} = 'abc')
({} = [])

```

上面的表达式虽然毫无意义,但是语法是合法的,可以执行

对象的解构赋值,可以很方便的讲现有对象那个的方法,复制到某个变量中

```js
let {log,din,cos} = Math
```

上面代码讲`Math`对象的对数,正弦,余弦三个方法,赋值到对应的变量上,使用起来
就会方便很多

由于数组本质是特殊的对象,因此可以对数字进行对象属性的解构

```javascript
let arr = [1,2,3]
let {0:first, [arr.length-1]:last} = arr;

first // 1
last // 3
```

上面代码对数组进行对象解构,数组 `arr` 的`0`键对应的值是`1`,` [arr.length-1]` 就是`2`键,对应的值是 `3`,方括号这种写法
属于"属性名表达式" 参见[对象的扩展一章]

---

### 3. 字符串的解构赋值

字符串也可以解构赋值,这是因为此时,字符串被转换为一个类似数组的对象

```js
const [a,b,c,d,e] = 'hello'
a // "h"
b // "e"
c // "l"
d // "l"
e // "o
```

类似数组的对象都有一个 `length`属性,因此还可以对这个属性解构赋值

```js
let {length: len} = 'hello';
len // 5
```

---

### 4. 数组和布尔值的解构赋值
解构赋值时,如果等号右边是数值和布尔值,则会先转换为对象

```js
let {toString: s} = 123;
s === Number.prototype.toString // true

let {toString: s} = true;
s === Boolean.prototype.toString // true
```

上面代码中,数值和布尔值的包装对象都有 `toString` 属性,因此变量 `s` 都能取到值

解构赋值的规则是,只要等号右边的值不是对象或者数组,就闲将其转为对象,由于 `undefined` 和 `null` 无法转为对象,所以对他们进行解构赋值,都会报错

```js
let { prop: x} = undefined

let { prop: x} = null 

```

---

### 5. 函数参数的解构赋值

函数参数也可以使用解构赋值

```js
function  add([x,y]){
  return x +y
}
add([1,2])  // 3

```

上面代码中,函数 `add` 的参数表面上是一个数组,但在产褥参数的那一刻,数组参数就被解构称变量`x` 和 `y` 对于函数内部的代码来说,他们能感受到的参数就是 `x` 和 `y`

下面是另一个例子

```js
[[1,2],[3,4]].map((a+b) => a+b)
// 3,7
```

函数参数也可以使用默认值

```js
function move ({x = 0, y = 0} = {}) {
  return [x,y]
}
move ({x:3,y:8}) // [3,8]
move ({x:3})  // [3,0]
move ({})   // [0,0]
move() // [0,0]
```

上面代码中,函数 `move`的参数是一个对象,通过对这个对象进行架构,得到变量`x` 和 `y` 的值,如果解构失败 `x` 和`y` 等于默认值

注意,下面的写法会得到不一样的结果 

```js
function move ({x,y} = {x:0,y:0}) {
  return [x,y];
}

move({x;3,y:8}) // [3,8]
move({x: 3}); // [3, undefined]
move({}); // [undefined, undefined]
move(); // [0, 0]

```

上面代码是为函数 `move` 的参数指定默认值,而不是为变量 `x`和`y`指定默认值,所以会得到与前一种写法不同的结果

`undefined` 就会触发函数参数的默认值

```js
[1,undefined,3].map((x = 'yes') => x)

```

---

### 6. 圆括号问题

解构赋值虽然很方便,但是解析起来并不容易,对于编辑器来说,一个式子到到底模式还是表达式,没有办法从一开始知道,必须解析到(或者解析不到)等号才能知道,
由此带来的问题是,如果模式中出现圆括号怎么处理, ES6的规则是,只要有可能导致解构的歧义,就不得使用圆括号

但是,这条规则实际上不那么容易辨别,吃力起来相当码放,因此,建议只要有可能,就不要再模式中防止圆括号

#### 6.1 不能使用圆括号的情况

一下三种解构赋值不得使用圆括号

(1) 变量声明语句中,不能带有圆括号

```js
// 全部报错
let [(a)] = [1];

let {x: (c)} = {};
let ({x: c}) = {};
let {(x: c)} = {};
let {(x): c} = {};

let { o: ({ p: p }) } = { o: { p: 2 } };
```

上面三个语句都会报错,因为他们都是变量声明语句,模式不能使用圆括号

(2) 函数参数中,模式不能带有圆括号

函数参数也属于变量声明,因此不能带有圆括号

```js
//报错
function f([{z}]) { return z;}

```

(3) 赋值语句中,不能讲整个模式,或嵌套模式中的一层,放在圆括号中

```js
//全部报错
({ p:a}) = {p:42}
([a]) = [5]
```

上面代码讲整个模式放在圆括号之中,导致报错

```js
[({p:a}),{x:c}] = [{},{}]

```

上面代码讲嵌套模式的一层,放在圆括号中,导致报错

#### 6.1 可以使用圆括号的情况

可以使用圆括号的情况只要一种:赋值语句的飞模式部分,可以使用圆括号

```js
//正确
[(b)] = [3] 
({p:(d)} = {})
[(parseInt.prop)] = [3]
```

上面三行语句都可以正确执行,因为首先他们都是赋值语句,而不是声明语句,其次他们的圆括号都不属于模式的一部分,第一行语句中,模式是读取数组的第一个成员,跟圆括号无关,第二行语句中,模式是p
而不是d 第三行语句中,以第一行语句的性质一致

---

### 7 用途

变量的解构赋值用途很多

(1) 交换变量的值

```js
let x = 1;
let y = 2;

[x,y] = [y,x]

```

(2) 从函数返回多个值

函数只能返回一个值,如果要返回多个值,只能将他们放在数组或对象里返回,有了解构赋值,取出这些值就非常方便了

```js
//返回一个数组
function example() {
  return [1,2,3]
}
//返回一个对象
function example() {
  return {
    foo:1,
    bar:2
  }
}

let { foo, bar } = example()
```

(3)函数参数的定义

解构赋值可以方便的讲一组参数与变量名对应起来

```js
//van书是一组有次序的值
//
function f([x,y,z]){...}
f([1,2,3])

//参数是一组无次序的值
function f({x,y,z}) {...}
f({z:3,y:2,z:1})

```

(4) 提取JSON数据

解构赋值对提取JSON对象中的数据,尤其可用

```js
let jsondata = {
  id:42,
  status:"ok",
  data: [1,2]
}
let { id,status,data:number} = jsondata
console.log(id,status,data)
// 42, "ok", [1,2]
```

上面代码可以快速提取 JSON 数据的值

(5) 函数参数的默认值

```js
jQuery.ajax = function (url, {
  async = true,
  beforeSend = function () {},
  cache = true,
  complete = function () {},
  crossDomain = false,
  global = true,
  // ... more config
}) {
  // ... do stuff
};
```

指定参数的默认值,就避免了在函数体内部在写 `var foo = config.foo || 'default foo';` 这样的语句

(6) 便利Map结构

任何部署了Iterator接口的对象，都可以用for...of循环遍历。Map结构原生支持Iterator接口，配合变量的解构赋值，获取键名和键值就非常方便。

```js
var map = new Map();
map.set('first', 'hello');
map.set('second', 'world');

for (let [key, value] of map) {
  console.log(key + " is " + value);
}
// first is hello
// second is world
```

如果只想获取键名，或者只想获取键值，可以写成下面这样。

```js
// 获取键名
for (let [key] of map) {
  // ...
}

// 获取键值
for (let [,value] of map) {
  // ...
}
```

（7）输入模块的指定方法

加载模块时，往往需要指定输入哪些方法。解构赋值使得输入语句非常清晰。

```js
const { SourceMapConsumer, SourceNode } = require("source-map");
```


--- 

## 二. 字符串的扩展

ES6加强了对Unicode的支持,兵器扩展了字符串对象

---

### 1. 字符串的Unicode表示法

JavaScript 允许采用 `\uxxxx` 形式表示一个字符,其中 `xxxx`表示制度的Unicode码点

```js
"\u0061"
// "a"
// 
```

但是这种表示法只限于码点在`\u0000`~`\uFFFF`之间的字符,超出这个范围的字符必须用两个双字节的行是表示

```js
"\uD842\uDFB7"
// "𠮷"

"\u20BB7"
// " 7"
```

上面代码表示,如果直接在`\u`后面跟上超过`0xFFFF`的数值(比如`\u20887`),JavaScript 会理解为 `\u20BB+7` 由于`\u20BB`是一个不可打印字符,所以只会显示一个空格,后面跟着一个`7`

ES6 对这一点做出了改进,只要将码点放入大括号,就能正确解读者自负

```js
"\u{20BB7}"
// "𠮷"

"\u{41}\u{42}\u{43}"
// "ABC"

let hello = 123;
hell\u{6F} // 123

'\u{1F680}' === '\uD83D\uDE80'
// true
```

上面代码中,最后一个例子表明,大括号表示法与四字节的 UTF-16 编码是等价的

有了这种表示法之后,JavaScript 共有 6中发放可以表示一个字符

```js
'\z' === 'z'  // true
'\172' === 'z' // true
'\x7A' === 'z' // true
'\u007A' === 'z' // true
'\u{7A}' === 'z' // true

```

---

### 2. codePointAt()

JavaScriptneibu ,字符以UTF-16的格式存储,每个字符固定为`2`个字节,对于那些西药`4`个字节存储的字符(Unicode码点大于`0xFFFF`的字符),`JavaScript`会认为他们是两个字符

```js
var s = "𠮷";

s.length // 2
s.charAt(0) // ''
s.charAt(1) // ''
s.charCodeAt(0) // 55362
s.charCodeAt(1) // 57271
```

上面代码中,汉字 "𠮷"(注意,这个字不是吉祥的吉)的码点是`0x20BB7`


---

## 十. Symbol

---

### 1. 概述

ES5 的对象属性名都是字符串,这容易造成属性名的冲突,比如你使用了一个他人体用的对象,但是又想为这个对象添加心的方法(mixin模式),新方法的名字基友可能与现有的方法产生冲突,如果有一种机制,保证每个属性的名字都是独一无二的就好了,这样就从根本上方式属性名的冲突,这就是 ES6 引入 `Symbol`的原因

ES6 引入了一种新的原始数据 `Symbol`,表示独一无二的值,他是JavaScript 语言的第七种数据类型,前六中是: `undefined`,`null`,布尔值,字符串,数值,对象

Symbol 值通过`sYmbol`函数生成,这就是说,对象的属性名现在可以有两种类型,一种是原来就有的自读产,另一种是新增的 Symbol 类型,凡是属性名属于 Symbol 类型,就都是独一无二的,可以保证不会与其他属性名产生冲突

```js
let s = Symbol()
typeof s
// "symbol"
```

上面代码中,变量`s`就是独一无二的值,`typeof`运算度的救国,表明变量`s`是Symbol数据类型,而不是字符串之类的其他类型

注意,`Symbol`函数前不能使用`new`命令,否则或报错,这是应为生成的Symbol是一个原始类型的值,不是对象,也就是水,由于Symbol值不是对象,所以不能添加属性,基本上,他是一种类似于祖父穿的数据类型

`Symbol`函数可以接受一个字符串作为参数,表示对Symbol实例的描述,主要是为了在控制台显示,或者转为字符串时,比较容易区分

```js
var s1 = Symbol('foo')
var s2 = Symbol('bar')

s1 //Symbol('foo')
s2 //Symbol('bar')

s1.toString() // "Symbol('foo')"
s2.toString() // "Symbol('bar')"

```

上面代码中,`s1`和`s2`是两个 Symbol值,如果不加参数,他们在控制台输出都是 `Symbol()`,不利于区分,有了参数以后,就等于为他们加上了描述,输出的时候就能够分清,到底是哪一个值

如果Symbol 的参数是一个对象,就会调用该对象的`toString`方法,将其装维字符串,然后才生成一个Symbol值

```js
const obj = {
  toString() {
    return 'abc'
  }
}

const sym = Symbol(obj)
sym  ///  Symbol(abc)
```

注意,`symbol`函数的参数只是表示对当前Symbol 值的描述,因此相同参数的`Symbol`函数的返回值是不相等的

```js
//没有参数的情况

var s1 = Symbol();
var s2 = Symbol();

s1 === s2 // false

// 有参数的情况
var s1 = Symbol('foo');
var s2 = Symbol('foo');

s1 === s2 // false
```

上面代码中 `s1`和`s2`都是`symbol`函数的返回值,而且参数相同,但是他们是不相等的

Symbol 值不能与其他类型的值进行运算,会报错

```js

```
