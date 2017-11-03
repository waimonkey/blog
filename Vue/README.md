<!-- MarkdownTOC -->

- [绑定 HTML Class](#%E7%BB%91%E5%AE%9A-html-class)
    - [对象语法](#%E5%AF%B9%E8%B1%A1%E8%AF%AD%E6%B3%95)
    - [数组语法](#%E6%95%B0%E7%BB%84%E8%AF%AD%E6%B3%95)
    - [用在组件上](#%E7%94%A8%E5%9C%A8%E7%BB%84%E4%BB%B6%E4%B8%8A)
- [绑定内联样式](#%E7%BB%91%E5%AE%9A%E5%86%85%E8%81%94%E6%A0%B7%E5%BC%8F)
    - [对象语法](#%E5%AF%B9%E8%B1%A1%E8%AF%AD%E6%B3%95-1)
    - [数组语法](#%E6%95%B0%E7%BB%84%E8%AF%AD%E6%B3%95-1)
    - [自动添加前缀](#%E8%87%AA%E5%8A%A8%E6%B7%BB%E5%8A%A0%E5%89%8D%E7%BC%80)
    - [多重值](#%E5%A4%9A%E9%87%8D%E5%80%BC)
- [条件渲染](#%E6%9D%A1%E4%BB%B6%E6%B8%B2%E6%9F%93)
    - [v-if](#v-if)
    - [在 ``元素上使用 `v-if`条件渲染分组](#%E5%9C%A8-%E5%85%83%E7%B4%A0%E4%B8%8A%E4%BD%BF%E7%94%A8-v-if%E6%9D%A1%E4%BB%B6%E6%B8%B2%E6%9F%93%E5%88%86%E7%BB%84)
    - [v-else](#v-else)
    - [v-else-if](#v-else-if)
    - [用 key 管理可复用的元素](#%E7%94%A8-key-%E7%AE%A1%E7%90%86%E5%8F%AF%E5%A4%8D%E7%94%A8%E7%9A%84%E5%85%83%E7%B4%A0)
    - [v-show](#v-show)
    - [v-if vs v-show](#v-if-vs-v-show)
    - [v-if 与 v-for 一起使用](#v-if-%E4%B8%8E-v-for-%E4%B8%80%E8%B5%B7%E4%BD%BF%E7%94%A8)
- [列表渲染](#%E5%88%97%E8%A1%A8%E6%B8%B2%E6%9F%93)
    - [用 v-for 把一个数组对应为数组元素](#%E7%94%A8-v-for-%E6%8A%8A%E4%B8%80%E4%B8%AA%E6%95%B0%E7%BB%84%E5%AF%B9%E5%BA%94%E4%B8%BA%E6%95%B0%E7%BB%84%E5%85%83%E7%B4%A0)
    - [一个对象的v-for](#%E4%B8%80%E4%B8%AA%E5%AF%B9%E8%B1%A1%E7%9A%84v-for)
    - [key](#key)
- [组件](#%E7%BB%84%E4%BB%B6)
    - [什么是组件](#%E4%BB%80%E4%B9%88%E6%98%AF%E7%BB%84%E4%BB%B6)
    - [使用组件](#%E4%BD%BF%E7%94%A8%E7%BB%84%E4%BB%B6)
        - [全局注册](#%E5%85%A8%E5%B1%80%E6%B3%A8%E5%86%8C)
        - [局部注册](#%E5%B1%80%E9%83%A8%E6%B3%A8%E5%86%8C)
        - [dom模版解析注意事项](#dom%E6%A8%A1%E7%89%88%E8%A7%A3%E6%9E%90%E6%B3%A8%E6%84%8F%E4%BA%8B%E9%A1%B9)
        - [data 必须是函数](#data-%E5%BF%85%E9%A1%BB%E6%98%AF%E5%87%BD%E6%95%B0)
        - [组件组合](#%E7%BB%84%E4%BB%B6%E7%BB%84%E5%90%88)
    - [prop](#prop)
        - [使用prop传递数据](#%E4%BD%BF%E7%94%A8prop%E4%BC%A0%E9%80%92%E6%95%B0%E6%8D%AE)
        - [camelCase vs. kebab-case](#camelcase-vs-kebab-case)
        - [动态 prop](#%E5%8A%A8%E6%80%81-prop)
        - [字面量语法 vs 动态语法](#%E5%AD%97%E9%9D%A2%E9%87%8F%E8%AF%AD%E6%B3%95-vs-%E5%8A%A8%E6%80%81%E8%AF%AD%E6%B3%95)
        - [单项数据流](#%E5%8D%95%E9%A1%B9%E6%95%B0%E6%8D%AE%E6%B5%81)
        - [prop验证](#prop%E9%AA%8C%E8%AF%81)
    - [非 prop 特性](#%E9%9D%9E-prop-%E7%89%B9%E6%80%A7)
        - [替换/合并现有的特性](#%E6%9B%BF%E6%8D%A2%E5%90%88%E5%B9%B6%E7%8E%B0%E6%9C%89%E7%9A%84%E7%89%B9%E6%80%A7)
    - [自定义事件](#%E8%87%AA%E5%AE%9A%E4%B9%89%E4%BA%8B%E4%BB%B6)
        - [使用 v-on绑定自定义事件](#%E4%BD%BF%E7%94%A8-v-on%E7%BB%91%E5%AE%9A%E8%87%AA%E5%AE%9A%E4%B9%89%E4%BA%8B%E4%BB%B6)
        - [给组件绑定原生事件](#%E7%BB%99%E7%BB%84%E4%BB%B6%E7%BB%91%E5%AE%9A%E5%8E%9F%E7%94%9F%E4%BA%8B%E4%BB%B6)

<!-- /MarkdownTOC -->

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

因为`v-if`是一个指令,所以必须将她添加在一个元素上,但是如果想切换多个元素呢,此时可以吧一个 `<template>`元素单做不可见的包裹元素,并在上面使用`v-if`最终的渲染结果将不包含 `tempalte`元素

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

这样也不总是符合实际需求,所以vue提供了一种方式来表达这两个元素是完全独立的,不要服用他们,只需要添加一个具有唯一值的`key`属性即可:

```html
<template v-if="loginType === 'username'">
  <label>username</label>
  <input placeholder="enter your username" key="username-input">
</template>
<template v-else>
  <label>email</label>
  <input placeholder="enter your email" key="email-input">
</template>
```

现在每次切换时,输入框都将被重新渲染

注意, `<label>` 元素仍然会被高效的服用,因为他们没有添加 `key`属性

### v-show

另一个用于根据条件展示元素的选项是 `v-show` 指令 用法大致一样

```html
<div v-show="ok">hello</div>
```

不同的是带有 `v-show` 的元素始终会被渲染并保留在dom中 `v-show` 只是简单的切换元素的css属性 `display`

** 注意 `v-show` 不支持 `<template>` 元素 也不支持 `v-else`**

### v-if vs v-show

`v-if` 是真正的条件渲染,因为他会确保在切换过程中条件快内的事件见识器和子组件适当的呗销毁和重建

`v-if` 也是惰性的:如果在初始渲染条件为假 则什么也不做一直到条件第一次变为真的时候 才会开始渲染条件块

相比实现 `v-show` 就简单的多 不管初始条件是什么 元素总是会被渲染 并且只是简单的基于css 进行切换 

一般来说 `v-if` 有搞笑的切换开销 而 `v-show` 有更高的初始渲染开销 因此 如果需要非常频繁的切换 则使用 `-show` 更好 如果在运行条件很少改变 则使用 `v-if`较好

### v-if 与 v-for 一起使用

当 `v-if` 与 `v-for` 一起使用时 `v-for`具有比`v-if`更高的优先级


## 列表渲染

### 用 v-for 把一个数组对应为数组元素

***

我们用 `v-for` 指令根据一组数组的选项列表进行渲染 `v-for` 指令需要使用 `item in items` 形式的特殊语法 `items` 是源数据数组并且`item`是数组元素迭代的别名

```html
<ul id="example-1">
  <li v-for="item in items">
    {{item.message}}
  </li>
</ul>
```

```js
var example1 = new Vue({
  el:"#example-1",
  data:{
    items:[
      { message: 'Foo' },
      { message: 'Bar' }
    ]
  }
  })

```

在 `v-for` 块中,我们拥有对父作用域属性完全访问的权限. `v-for` 还支持一个可选的第二个参数为当前项的索引 

```html

<ul id="example-2">
  <li
  v-for="(item,index) in items"
  >
    {{parenMessage}} - {{index}} - {{item.message}}
  </li>
</ul>

```


```js
var example2 = new Vue({
  el:'#example-2',
  data:{
    parentMessage: "parent",
     items:[
      { message: 'Foo' },
      { message: 'Bar' }
    ]
  }
  })

```

也可以用 `of`代替 `in` 作为分隔符 因为他是最接近 javascript 迭代器的语法

```html
<div v-for="item of items"></div>
```

### 一个对象的v-for

可以用`v-for` 通过一个对象的属性来迭代

```html
<ul id="v-for-object">
  <li v-for="value in object">
    {{value}}
  </li>
</ul>
```

```js
var vForObject = new Vue({
    el:'#v-for-object',
    data:{
      object:{
        firstName: 'John',
      lastName: 'Doe',
      age: 30
      }
    }
  })

```

也可以提供第二个参数为键名:

```html
<div v-for="(value,key) in object">
  {{key}}:{{value}}
</div>
```

```js
var vForObject = new Vue({
    el:'#v-for-object',
    data:{
      object:{
        firstName: 'John',
      lastName: 'Doe',
      age: 30
      }
    }
  })

```

第三个参数作为索引:

```html

<div
v-for="(value,key,index) in object"
>
  {{index}}. {{key}} :{{value}}
</div>

```

** 在遍历对象时,是按`object.keys()` 的结果遍历 但是不能保证他的结果在不同的javascript阴影下是一致的**

### key

当 vue,js 用`v-for`正在更新已渲染过得元素列表是,它默认用就地服用的策略 如果数据项的顺序被改变 vue将不会移动dom 元素来匹配数据项的顺序 二是简单的服用此处的每一个元素,并且确保他在特定的索引下显示已经呗渲染过的每个元素 

这个默认的模式是搞笑的 但是只适用于 不依赖子组件状态或临时dom状态(例如:表单输入值)的列表渲染输出

为了给vue一个提示 以便他能追踪每个节点的身份 从而复用和重新排序现有元素 你需要为没想提供一个唯一的 `key` 属性 理想的`key` 值是没想都有的且唯一的id  但他的工作方式类似于一个属性 所以需要用 `v-bind`来帮顶动态值

```html

<div v-for="item in items" :key="item.id"></div>

```

建议尽可能在使用 v-for 时提供 key，除非遍历输出的 DOM 内容非常简单，或者是刻意依赖默认行为以获取性能上的提升。

因为它是 Vue 识别节点的一个通用机制，key 并不与 v-for 特别关联，key 还具有其他用途，我们将在后面的指南中看到其他用途。



## 组件

### 什么是组件

组件是vue.js 最强大的功能之一 组件可以扩展html元素 封装可重用的代码 在较高的层面上 组件是自定义元素 vue.js的编译器为他添加特殊功能 在有些情况下 组件也可以表现为用`is` 特性进行了扩展的原生html元素

### 使用组件

####  全局注册

我们已经知道 可以通过以下方式创建一个vue示例:

```js
new Vue ({
  el:'#some-element',
  //选项
  })
```

要注册一个全局组件 可以使用 `Vue.component(tagName,options)` 例如:

```js
Vue.component('my-component'm{
  //选项
  })
```

**请注意,对于自定义标签的命名VUE.JSBU不强制遵循W3C规则(小写冰鞋包含一个短杠) 尽管这被认为是最佳实践**

组件在注册之后 便可以作为自定义元素 `<my-component></my-component>` 在一个示例的模版中使用,注意确保在初始化根实例 **之前** 注册组件

```html
<div id="example">
  <my-component></my-component>
</div>
```

```js

Vue.component('my-component',{
  template:'<div>a cistom component</div>'
  })

  var vm = new Vue({
    el:'#example'
    })

```

渲染为

```html
<div>
  <div>
    a cistom component
  </div>
</div>

```

#### 局部注册

你不必吧每个组件都注册到全局 可以通过某个Vue示例/组件的实例选项 `components` 注册尽在其作用于中可用的组件

```js
var child = { 
    template: '<div>a custom child component</div>'
  }
    var vm = new Vue({
      el:'#app',
      components:{
        'my-child-component':child
      }
    })

```

这种封装也是用与其他可注册的vue功能 比如指令

#### dom模版解析注意事项

当使用dom作为模版时(例如:使用 `el` 选项来吧cue示例挂在到一个已有内容的元素上) 你回收到html 本身的一些限制 因为cue只有在浏览器解析 规范化模版之后才能获得其内容  尤其要注意 想 `<ul>` `ol` `table` `option` 这样的元素里允许包含的根元素有限制 而另一些像 `<option>` 这样的元素只能出现在某些特定元素的内部

在自定义组件中使用这些受限制的元素时会导致一些问题 例如:

```html

<table>
  <my-row></my-row>
</table>


```

自定义组件 `<my-row>` 会被当做无效的内容 因此会导致错误的渲染结果 变通的方案是使用特殊的`is`特性

```html

<table>
  <tr is="my-row"></tr>
</table>


```

**应当注意,如果使用来组一下来源之一的字符串模版,则没有这些限制**

* `<script type="text/x-template"></script>`
* javascript内联模版字符串
* .vue组件

因此请尽情使用字符串模版


#### data 必须是函数

构造vue示例时传入的各种选项大多数都可以在组件里使用 只有一个例外:`data` 必须是函数 实际上 吐过你这么做:


```js

Vue.component("my-component",{
  template: '<span>{{ message }}</span>',
  data: {
    message: 'hello'
  }
  })

```

那么 vue 会停止运行,并在控制台发出警告 告诉你在组件示例中 `data` 必须是一个函数 但理解这种规则为何存在也是很有益处的 所以先让我们做个弊:

```html

<div id="example-2">
  <simple-counter></simple-counter>
  <simple-counter></simple-counter>
  <simple-counter></simple-counter>
</div>



```

```js

var data = {counter:0}
Vue.component("simple-counter",{
  template:'<button v-on:click="counter += 1">{{counter}}</button>'

  data:function () {
    return data
  }
  })

  new Vue({
  el: '#example-2'
})
```


由于这三和组件示例共享了同一个 data 对象 因此地址增一个counter 会影响所有组件 这就吃了 我们可以通过为每个组件返回全新的数据对象来修复这个问题

```js

data: function () {
  return {
    counter:0
  }
}


```

现在每个counter 都有它自己的内部的状态了


#### 组件组合

组件设计初衷就是要配合使用的 最常见的就是形成肚子组件的关系 组件A 在它的模版中使用了组件B 他们之间必然需要相互通信 父组件可能要给子组件下发数据 子组件则可能要将他们内部发生的事情告知父组件 然而 通过一个良好的定义的接口来尽可能讲父子组件解耦 也是很重要的 这保证了每个组件的diamante可以再相对隔离的环境中书写和理解 从而提高了其可维护性和复用性 

在 vue 中,父子组件的管子可以总结为 prop **向下传递,事件 向上传递** 父组件通过 prop 给子组件下发数据 自组装件通过事件给父组件发送消息 

### prop

#### 使用prop传递数据

组件示例的作用于是 **孤立的** 这意味着不能也不应该在子组件的模版内直接引用父组件的数据 父组件的数据需要通过 prop 才能下发到子组件中

子组件要显示的用 `props` 选项 声明它预期的数据:

```js

Vue.component('child',{
  //声明 props
  props: ['message'],
  //就像 data 一样, prop 也可以在模版中使用
  //同样也可以在 vm 示例中通过 this.message 来使用
  tempalte:'<span>{{message}}</span>'
  })


```

然后我们可以这样向它传入一个普通字符串:

```html
<child message="hello"></child>
```

#### camelCase vs. kebab-case

html 特性是不区分大小写的 所以 当使用的不是字符串模版是 camelCase(驼峰式命名)的prop 需要转换为相对应的 kebab-case(算横线分割师命名)

```js

Vue.component('child', {
  // 在 JavaScript 中使用 camelCase
  props: ['myMessage'],
  template: '<span>{{ myMessage }}</span>'
})

```

```html
<child my-message = 'hello'></child>
```

吐过使用祖父穿模版 则没有这些限制

#### 动态 prop

与绑定到任何普通的html 特性相类似 我们可以使用 `v-bind` 来动态的讲 prop 绑定到父组件的数据 每当父组件的数据变化时 该变化也会传导给子组件

```html

<div>
  <input type="text" v-model="parentMsg">
  <br>
  <child v-bind:my-message = "parentMsg"></child>
</div>

```


如果你想把一个对象的所有属性作为 prop进行穿肚 可以使用不带任何参数的  `v-bind` (即用 `v-bind` 而不是 `v-bind : pro-name`) 例如,一直一个 todo 对象

```js
todo:{
  text: 'Learn Vue',
  isComplete: false
}

```

然后:

```html

<todo-item v-bind="todo"></todo-item>

```

将等价于:

```html

<todo-item v-bind:text="todo.text" v-bind:isComplete = "todo.isComplete"></todo-item>

```

#### 字面量语法 vs 动态语法

初学者长帆的一个错误就是使用字面量语法传递数值:

```html
<comp some-prop = "1"></comp>

```

因为他是一个字面量 prop 它的值是字符串 "1" 而不是一个数值 如果想传递一个真正的 javascript 数值 则需要使用 `v-bind` 从而让它额值被当做 javascript 表达式计算

```html

<comp v-bind:some-prop = "1"></comp>


```

#### 单项数据流

prop 是单向数据绑定的: 当父组件的属性变化时 将传导给子组件 但是反过来不会 这是为了防止子组件无意间修改了父组件的状态 来避免应用的数据流变得难以理解 

另外 每次父组件更新时 子组件的所有的 prop 都会更新为最新值 这意味着你不应该在子组件内部改变 people 如果这么做了 vue会发出警告

这两种情况下 我们很容易忍不住想去修改 prop 中的数据

* 1. prop 作为初始值传入后 子组件想把它当做局部数据来用
* 2. prop 作为原始数据传入 由子组件处理成其他数据输出

对着来那个种情况 正确的应对方式是:

1. 定义一个局部变量 并用 prop 的值初始化它:

```js
props: ["initialCounter"],
data:function () {
  return { counter:this.initialCounter}
}

```

2. 定义一个计算属性 处理 prop 的值并返回

```js

props:['size'],
computed: {
  normalizedSize: function () {
    return this.size.trim().toLowerCase()
  }
}

```

**注意在javascript 中对象和数组是引用类型 只想同一个内存空间 如果 prop 是一个对象或者数组 在子组件内部改变她会影响父组件的状态**

#### prop验证

我们可以为组件的prop 执行验证规则 如果传入的数据不符合要求 vue 会发出警告 这对于开发给他人使用的组件非常有用 

要指定验证规则 需要用对象的形式来定于 prop 而不能用字符串数组

```js

Vue.componnet('example',{
  props: {
    //基础类型监测 (null 指允许任何类型)
    propA: Number,
    //可能是多种类型
    propB: [String,Number],
    //必传切实字符串
    propC:{
      type:String,
      required:true
    },
    //数值且有默认值
    propD: {
      type:Number,
      default:100
    },
    //数组或对象的默认值应当由一个工厂函数返回
    propE: {
      type:Object,
      default:function () {
        return {message: 'hello'}
      },
      //自定义验证函数
      propF: {
        validator: function (value) {
          return value > 10
        }
      }

    }
  }
  })

```

`type` 可以是下面原生构造器
* String
* Number
* Boolean
* Function
* Object
* Array
* Symbol

`type` 也可以是一个自定义构造器函数 使用 `instanceif` 检测

当 `prop` 验证失败 vue或抛出警告(如果使用的是开发版本) 注意 prop 会在组件示例差UN宫颈癌你之前进行校验 所以在 fefault 或者 validator 函数里,诸如 `data` `computed` `methods` 等实例属性还无法使用

### 非 prop 特性

所谓非 prop 特性 就是指他可以直接传入组件 我不需要定义相应的 prop

尽管为组件定义明确的 prop 是推荐的传参方式 组件的作者却并不总能预见到组件被使用的场景 所以 组件可以接受任意传入的特性 这些特性都会被添加到组件的根元素上 

假如 假设我们使用了第三方组件 `bs-date-input` 它包含了一个 bootstrap 插件 该插件需要在 input 上添加 `data-3d-date-picker` 这个特性 这是可以吧特性直接添加在组件上(不需要实现定义prop)

```html
<bs-date-input data-3d-date-picker="true"></bs-date-input>

```

添加属性 data-3d-date-picker="true" 之后，它会被自动添加到 bs-date-input 的根元素上。


#### 替换/合并现有的特性

假设这是 `bs-date-input` 的模版

```html
<input type="date" class="form-control">

```

为了给该日期插件增加一个特殊的主题 我们可能需要增加一个特殊的 calss 比如

```html

<bs-date-input
  data-3d-date-picker = "true"
  class = "date-picker-theme-dark"
></bs-date-input>

```

这这个例子当中 我们定义了两种不同的 `class` 值:

* `form-control` 来自组件自身的模版
* `date-picker-theme-dark` 来自父组件

对于多数特性来说 传递给组件的值会覆盖组件本身设定的值 即例如传递 `type = 'large` 将会覆盖 `type = date` 切有坑呢破坏改组件 索性我们对待 `class` 和 `srtle` 特性会更聪明一些 这两个特性的值都会合并操作 让最终生成的值为 `form-control date-picker-theme-dark`


### 自定义事件

我们知道 父组件使用prop 传递数据给子组件但子组件怎么跟父组件通信呢 这个时候vue的自定义事件系统就排的上永昌了 

#### 使用 v-on绑定自定义事件

每个 vue 实例都实现了时间接口 即
* 使用$on(eventName) 监听事件
* 使用 $emit(eventName) 触发事件

**vue的事件系统与浏览器的 EventTarget API 有所不同 尽管他们的运行起来类似,但是 $on 和 $emit 并不是 `addEventListener` 和 `dispatchEvent` 的别名**

另外 父组件可以在使用子组件的地方直接用`v-on` 来监听子组件触发的事件

**不能用 `$on` 侦听子组件释放的事件而必须在模版里直接用 `v-on` 绑定 参见下面的例子** 

```html

<div id="counter-event-example">
  <p>{{total}}</p>
  <button-counter v-on:increment = "incrementTotal"></button-counter>
  <button-counter v-on:increment = "incrementTotal"></button-counter>

</div>

```

```js

Vue.component('button-counter',{
  template:'<button v-on:click = "incrementCounter">{{counter}}</button>',
  data:function() {
    return {
      counter:0
    }
  },
  methods: {
    incrementCounter:function () {
      this.counter += 1;
      this.$emit("increment")
    }
  }
  })


new Vue({
  el:'#counter-event-example',
  data:{
    total:0
  },
  methods:{
    incrementTotal:function  () {
      this.total +=1 
  }
}
  })
```

在本例中，子组件已经和它外部完全解耦了。它所做的只是报告自己的内部事件，因为父组件可能会关心这些事件。请注意这一点很重要。

#### 给组件绑定原生事件

有时候 你可能想在某个组件的根元素上监听一个原生事件 可以使用 `v-on`的修饰符 `.native` 例如

```html

<my-component v-on:click.native="doTheThing"></my-component>

```
