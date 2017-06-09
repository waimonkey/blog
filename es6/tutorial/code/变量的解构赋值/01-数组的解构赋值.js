// ================== 完全解构 ==================

// let [foo,[[bar],baz]] = [1,[[2],3]]
// console.log(foo,bar,baz)  // 1 2 3

// let [ , , third] = ['foo','bar','baz']
// console.log(third) // baz

// let [head , ...tail] = [1,2,3,4]
// console.log(head,tail) //1 [ 2, 3, 4 ]

// let [x,y,...z] = ['a']
// console.log(x,y,z) // a undefined []

// ================== /完全解构 ==================



// ================== 不完全结构 ==================
// let [m,n] = [1,2,3]
// console.log(m,n)  //1 2
// let [a,[b], d] = [1, [2,3],4]
// console.log(a,b,d) // 1 2 4
// ================== /不完全结构 ==================

// ================== 报错 ==================

// let [foo] = 1;
// let [foo] = false;
// let [foo] = NaN;
// let [foo] = undefined;
// let [foo] = null;
// let [foo] = {};
// console.log(foo)
// ================== /报错 ==================

// function* fibs() {
//   let a = 0;
//   let b = 1;
//   while (true) {
//     yield a;
//     [a,b] = [b,a+b];
//   }
// }
// let [first,second,third,fourth,fifth,sixth] = fibs();
// console.log(first,second,third,fourth,fifth,sixth)  // 0 1 1 2 3 5


// ================== 默认值 ==================
// let [foo = true] = []
// console.log(foo) // true
// let [x,y='b'] = ['a']
// console.log(x,y)  // a b
// let [a,b='b'] = ['a', undefined]
// console.log(a,b)  // a b
// ================== /默认值 ==================

// ================== 惰性求值 ==================
// function f() {
//   console.log('aaa')
// }
// let [x = f()] = [1]
// console.log(x) // 1

// ================== /惰性求值 ==================

// ================== 惰性求值等价于 ==================
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
// ================== /惰性 求值等价于 ==================


