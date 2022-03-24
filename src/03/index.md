# 数据类型

## 数据类型有六种简单数据类型，一种复杂数据类型Object

``` js

Undefined, Null, Boolean, Number, String, Symbol

```

## typeof 操作符对数据类型的检查

1. "undefined"表示值未定义；

2. "boolean"表示值为布尔值；

3. "string"表示值为字符串；

4. "number"表示值为数值；

5. "object"表示值为对象（而不是函数）或null；

6. "function"表示值为函数；

7. "symbol"表示值为符号。

``` js

console.log(typeof '');

console.log(typeof NaN);

console.log(typeof true);

console.log(typeof null);

const fn = () => {};

console.log(typeof fn);

const sym = Symbol('test');

console.log(typeof sym);

const obj = {};

console.log(typeof obj);

```

### Boolean 数据类型

1. string 类型用Boolean 转换 空字符串转为false
   
2. number 类型用Boolean 转换 +0,-0,0,NaN为false
   
3. null 类型用Boolean 转换 false
   
4. undefined类型用Boolean 转换 false
   
5. function类型用Boolean 转换 true
   
6. object类型用Boolean 转换 true

```
// 针对空字符串为false, 非空字符串为true

Boolean('') // false 

Boolean('  ') // true

```

### Number 数据类型 Number 数据类型转换情况比较多

1. 采用IEEE 754 格式表示数值

1. 浮点数存储空间是整数的两倍，因此ecmaScript通常会将浮点型数据类型转换为整形

2. 如果数值非常大或者非常小，可以转换为科学计数法2.3e4 等于 2.3*10^4， 或者 1.5e-5 等于1.5/(10^5)
   
3. 正零和负零在所有情况下都被认为是等同的 +0 === -0 // true

4. ecmascript 中的的数值取值返回，由于有内存的限制，因此ecmascript中的最大值为Number.MAX_VALUE, 和最小值Number.MIN_VALUE 超出这个数值返回会自动转为infinity和-infinity

5. isFinite() 校验一个数值是不是infinity

7. 如果是分子是非零的数，分子是-0或者+0 相除 返回的是 infinity或者-infinity 
   
8. NaN （not a number）  不是一数值 0除以0 为 NaN  0/0 为NaN 

9.  NaN 有几个特性就是 任何涉及到NaN的操作始终返回的是 NaN， NaN 不等于NaN 在内的任何值

10. isNaN() 可以校验参数是否是NaN ，会偿试将参数转换为数值，然后进行校验 

11. isNaN() 的参数会先调用valueOf() 确定返回的值是否可以转换为数值，如果不能，再调用toString()方法，并测试其返回值

    
#### 将非数值转换为数值方法 Number(), parseInt(), parseFloat() 和+号运算符， Number()是转型函数，可用于任何数据类型。后两个函数主要用于将字符串转换为数值

1. 对于boolean 类型值，Number(true) 为1， Number(false) 为0

2. 对于number 类型数值，直接返回

3. 对于null 类型返回 0 

4. 对于undefined 转换为 NaN

5. 对于 string 类型又分5种情 
   
    - 如果字符串包含数值字符，包括数值字符前面带加、减号的情况，则转换为一个十进制数值。因此，Number("1")返回1, Number("123")返回123, Number("011")返回11（忽略前面的零）。
    - 如果字符串包含有效的浮点值格式如"1.1"，则会转换为相应的浮点值（同样，忽略前面的零）。
    - 如果字符串包含有效的十六进制格式如"0xf"，则会转换为与该十六进制值对应的十进制整数值。
    - 如果是空字符串（不包含字符），则返回0
    - 如果字符串包含除上述情况之外的其他字符，则返回NaN

6. 对于 object 类型数据，调用valueOf()方法，并按照上述规则转换返回的值。如果转换结果是NaN，则调用toString()方法，再按照转换字符串的规则转换。
   
7. 一元加操作符与Number()函数遵循相同的转换规则。

Number()转换情况复杂，一般字符串数据转换为整数用parseInt()

#### 字符串最前面的空格会被忽略，从第一个非空格字符开始转换。如果第一个字符不是数值字符、加号或减号，parseInt()立即返回NaN (这一点跟Number()不一样，它返回0)
如果第一个字符是数值字符、加号或减号，则继续依次检测每个字符，直到字符串末尾，或碰到非数值字符。比如，"1234blue"会被转换为1234，因为"blue"会被完全忽略。类似地，"22.5"会被转换为22，因为小数点不是有效的整数字符。

#### parseFloat()函数的工作方式跟parseInt()函数类似，都是从位置0开始检测每个字符。同样，它也是解析到字符串末尾或者解析到一个无效的浮点数值字符为止。这意味着第一次出现的小数点是有效的，但第二次出现的小数点就无效了，此时字符串的剩余字符都会被忽略。因此，"22.34.5"将转换成22.34。


### string 类型数据

string 数据类型转换 有两种方式一种是几乎所有数据都有的方法toString(), 还有就是用String()。

toString()方法可见于数值、布尔值、对象和字符串值。（没错，字符串值也有toString()方法，该方法只是简单地返回自身的一个副本)。

null和undefined值没有toString()方法。

如果你不确定一个值是不是null或undefined，可以使用String()转型函数，它始终会返回表示相应类型值的字符串

1. 如果值有toString()方法，则调用该方法（不传参数）并返回结果。
2. 如果值是null，返回"null"。
3. 如果值是undefined，返回"undefined"。


### Symbol（符号） 数据类型是 ecmascript 新增的数据类型，特性是唯一的，不可变的

使用全局符号注册表 Symbol.for()对每个字符串键都执行幂等操作。第一次使用某个字符串调用时，它会检查全局运行时注册表，发现不存在对应的符号，于是就会生成一个新符号实例并添加到注册表中。后续使用相同字符串的调用同样会检查注册表，发现存在与该字符串对应的符号，然后就会返回该符号实例。

```js
let sym = Symbol.for('test')
let sym1 = Symbol.for('test')
let sym2 = Symbol('test')

console.log(sym === sym1) // true
console.log(sym === sym2) // false
```

### Object类型

```js

let obj = new Object();
// 或者 let obj = new Object;
```

Object 实例的属性和方法

- constructor: 用于创建当前对象的函数 let obj = new Object() 这个constructor 就是Object()函数
- hasOwnProperty(): 用于判断当前对象实例上是否存在给定属性 obj.hasOwnProperty('name'),不是通过原型链中继承的
- isPrototypeOf(objName) 用于检查传入对象是否是当前实例的原型
- propertyIsEnumerable(propertyName) 用于判断给定的属性是否可以使用（本章稍后讨论的）for-in语句枚举。与hasOwnProperty()一样，属性名必须是字符串。
- toLocaleString()：返回对象的字符串表示，该字符串反映对象所在的本地化执行环境
- toString()：返回对象的字符串表示。
- valueOf()：返回对象对应的字符串、数值或布尔值表示。通常与toString()的返回值相同
- ECMAScript中Object是所有对象的基类，所以任何对象都有这些属性和方法




## 操作符

#### 逻辑非 !

- 如果操作数是对象，则返回false。
- 如果操作数是空字符串，则返回true。
- 如果操作数是非空字符串，则返回false。
- 如果操作数是数值0，则返回true。
- 如果操作数是非0数值（包括Infinity），则返回false。
- 如果操作数是null，则返回true。
- 如果操作数是NaN，则返回true。
- 如果操作数是undefined，则返回true

#### 逻辑与 && 

-  如果第一个操作数是对象，则返回第二个操作数。
-  如果第二个操作数是对象，则只有第一个操作数求值为true才会返回该对象。
-  如果两个操作数都是对象，则返回第二个操作数。
-  如果有一个操作数是null，则返回null。
-  如果有一个操作数是NaN，则返回NaN。
-  如果有一个操作数是undefined，则返回undefined。

逻辑与操作符是一种短路操作符，意思就是如果第一个操作数决定了结果，那么永远不会对第二个操作数求值

#### 逻辑或 || 

- 如果第一个操作数是对象，则返回第一个操作数。
- 如果第一个操作数求值为false，则返回第二个操作数。
- 如果两个操作数都是对象，则返回第一个操作数。
- 如果两个操作数都是null，则返回null。
- 如果两个操作数都是NaN，则返回NaN。
- 如果两个操作数都是undefined，则返回undefined。

同样与逻辑与类似，逻辑或操作符也具有短路的特性。只不过对逻辑或而言，第一个操作数求值为true，第二个操作数就不会再被求值了。



### 语句 
for in 语句 是一种严格的迭代语句，用于迭代枚举对象中的非符号（非symbol）键属性
for-of语句是一种严格的迭代语句，用于遍历可迭代对象的元素