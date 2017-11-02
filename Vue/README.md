## 绑定 HTML Class

操作元素的class 列表和内联样式是数据绑定的一个常见需求,因为他们都是属性,所以我们可以用 `v-bind` 处理他们:只需要通过表达式计算出字符串结果即可,不过,字符串拼接麻烦切易错,因此,再讲 `v-bind` 用于 `class` 和 `style` 时,vue.js做了专门的加强,表达式结果的类型除了字符串之外,还可以是对象或者是数组

### 对象语法

我们可以 `v-bind:class` 一个对象,以动态的切换class:

```html
<div v-bind:class = "{active: isactive}"></div>

```

上面的语法 表示 `active` 这个class 存在与否将取决于数据属性 `isactive` 的 truthiness

你可以在对象中传入更多属性来动态的切换多个class 此外 `v-bind:class` 指令也可以与普通的class属性共存,当有如下模版:

```html
<div
class = "static"
v-bind:class="{active:isactive,'text-danger':hasError}"
></div>
```

和如下的data:

```js
data:{
  isactive:true,
  hasError:false
}
```

结果渲染为:

```
<div class+"static active"></div>
```

当 `isactive` 或者 `hasError` 变化时,class 列表将相应的更新,例如,如果 `hasError` 的值为 `true`,class列表将变为 `"static active text-danger"`

绑定的数据对象不必内敛定义在模版里

```html
<div v-bind:class="classObject"></div>
```

```js
data:{
  classObject:{
    active:true,
    "text-danger":false
  }
}

```

渲染的结果和上面一样我们也可以在这里绑定一个返回对象的`计算属性` 这是一个常用且强大的模式:

```html
<div 
v-bind:class="classObject"
></div>
```

```js
data:{
  isactive:true,
  error:null
},
computed:{
  classObject:function () {
    return {
      active:this.isactive && !this.error,
      'text-danger':this.error && this.error.type === 'fatal'
    }
  }
}
```

### 数组语法

我们可以把一个数组传给 `v-bind:class`, 以应用一个class列表

```html
<div 
v-bind:class="[activeClass, errorClass]"
></div>
```

```js
data:{
  activeClass:'active',
  errorClass:'text-danger'
}
```

渲染为

```html
<div class="active text-danger"></div>
```

如果你想根据条件切换列表中的class 可以用三元表达式

```html
<div
v-bind:class="[isactive ? activeClass:'', errorClass]"
></div>
```

这样写讲始终添加 `errorClass` 但是只有在 `isactive` 是 truthly 时才添加  `acriveClass`

不过,当有多个条件class时这样写有些繁琐,所以在数组语法中也可以使用对象语法:

```html
<div v-bind:class="[{active: isactive},errorClass]"></div>
```

### 用在组件上

>这个章节假设已经对 vue组件有一定的了解 当然也可以先跳过这里 稍后再回过头来看

当在一个自定义组件上使用 `class`属性时,这些类将被添加到根元素上,这个元素上已经存在的类不会被覆盖

例如,如果你声明了这个组件

```js
Vue.component("my-component",{
  template:'<p class="foo bar">Hi</p>'
  })
```

然后在使用它的时候添加一些class:

```html
<my-component class="baz boo"></my-component>
```

html 将被渲染为:

```html
<p class="foo bar baz boo">Hi</p>
```

对于带数据绑定class 也同样试用

```html
<my-component :class="{active:isactive}"></my-component>
```

当`isactive`为truthly时 html将被渲染称为

```html
<p class="foo bar active">Hi</p>
```

## 绑定内联样式

### 对象语法

`v-bind:style` 对象语法十分直观--看着非常想css,但其实是一个javascript对象,css属性名可以用驼峰式或者是短横式命名:

```html
<div v-bind:style="{color:activeColor,fontSize
  :fontSize +'px'}"></div>

```

```js
data:{
  activeColor:'red',
  fontSize: 30
}
```

直接绑定到一个样式对象通常更好 这会让模版更清晰

```html
<div  :style="styleObject"></div>
```

```js
data:{
  styleObject:{
    color:'red',
    fontSize:30
  }
}
```

同样的,对象语法常常结合返回对象的计算属性使用

### 数组语法
`v-bind:style` 的数组语法可以将多个样式对象应用到同一个元素上:

```html
<div :style="[baseStyles, overridingStyles]"></div>
```

### 自动添加前缀

当 `v-bind:style` 使用需要添加 浏览器引擎前缀的css属性时,如 `transform` vue.js 会自动是政策并添加相应的前缀

### 多重值

>2.30+

从2.3.0 起你可以为 `style` 绑定中的属性提供一个包含多个值的数组,常用语提供多个带前缀的,例如:

这样写只会渲染数组中最后一个被浏览器支持的值。在本例中，如果浏览器支持不带浏览器前缀的 flexbox，那么就只会渲染 `display: flex`。


## 条件渲染

### v-if
在字符串模版中 比如Handlebars，我们得像这样写一个条件块：

```html
<!-- Handlebars 模板 -->
{{#if ok}}
  <h1>Yes</h1>
{{/if}}

```

在vue中,我们使用v-if 指令实现同样的功能

```html
<h1 v-if="ok">yes</h1>
```

也可以使用 `v-else` 添加一个else 块:

```html
<h1 v-if="ok">Yes</h1>
<h1 v-else>No</h1>
```

### 在 `<template>`元素上使用 `v-if`条件渲染分组

因为`v-if`是一个指令,所以必须将她添加在一个元素上,但是如果想切换多个元素呢,此时可以吧一个 <template>元素单做不可见的包裹元素,并在上面使用`v-if`最终的渲染结果将不包含 `tempalte`元素

```html
<template v-if="ok">
  <h1>title</h1>
  <p>paragraph 1</p>
  <p>paragraph 2</p>
</template>
```

### v-else

也可以使用 `v-else` 指令来表示 `v-if`的else块

```html
<div v-if="Math.random() > 0.5">
  now you can see
</div>
<div v-else>
  now you can't
</div>
```

`v-else` 元素必须紧跟在 带 `v-if` 或者 `v-else-if` 的元素的后面,否则他将不会被识别

### v-else-if

>2.1.0

`v-else-if` 顾名思义,充当 `v-if` 的else-if 块 可以连续使用?

```html
<div v-if="type === 'a'">
  a
</div>

<div v-else-if="type==='b'">b</div>
<div v-else-if="type==='v'">v</div>
<div v-else>not a/b/c</div>


```

类似于 `v-else` `v-else-if` 也必须紧跟在带 `v-if`或者`v-else-if`的元素之后

### 用 key 管理可复用的元素

vue或尽可能的搞笑的渲染元素 通常会服用已有元素而不是从头开始渲染 这么做除了使cue变得非常快之外 还有其他的一些好处,例如 如果你允许用户在不能的登录方式之间切换:

```html
<template v-if="loginType === 'username'">
  <label>username</label>
  <input placeholder="enter your username">
</template>
<template v-else>
  <label>email</label>
  <input placeholder="enter your email">
</template>
```

那么上面的代码中切换 `loginType` 将不会清楚用户已经输入的内容,因为两个博班使用了相同的元素 `input`不会被替换掉--仅仅是替换了他的`placeholder`

自己动手试一试 在输入框中输入一些文本 然后按下切换按钮:
