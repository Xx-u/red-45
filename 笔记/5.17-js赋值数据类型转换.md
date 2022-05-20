# 5.16上午

## js的组成  历史 定义

### JS组成
- ECMA(语法)、DOM、BOM

### JS引入
- JS可以在页内和页外引入
    1.1在body标签内引入  body标签后页内引入
    1.2外部引入，新建一个xxx.js
    ```
    <script src="./index.js">
    // js代码
    </script>
    ```

### 注释
// 写注释   解释你的代码
/*
可以
写多行
*/

## js的变量 声明与赋值 命名规范

### 声明与赋值
```
 var a = 2;
    //    注意：在编程的世界 一个等于号 是 赋值 ， 从右到左看
    //   通过 var（关键字） 去让计算机在内存中开辟一个空间，然后在这个空间存放一个数据， 这个数据就是2
    //    可以让大家写多个变量声明写一行

var b = 3,
        a = 4;

    // 先声明
    var d;
    // 后赋值
    d = 5;
```

### 命名规范
```
 // 语义化
    var box = 10;
    // 驼峰命名
    // var boxThree = 12;
    //下划线命名
    // var box_one = 10;
```

## 3个输入输出 console.log() alert() prompt()

### 控制台调试JS代码
```
    // 浏览器的输入、输出，学会使用浏览器的调试工具
    // css Element调试样式
    // js 控制台调试js的代码
console.log(123);
var box = 10;
console.log(box);
    // 我们可以在浏览器中打印输出内容
    // 内容是放在括号里面
    // 注意：如果你的内容是变量，一定注意这个变量有没有声明
```
### 字符串
```
var kfc = 100;
    // 数字类，是数据类型之一
    console.log(kfc);
    var m = '注释 index';
    // ''  ""  都可以输出字符串  字符串是数据类型之一 字符串用来显示中英文要加上''或者""  如果不加就会变成变量
    console.log(m);
```


### console.log() 输出 面向程序员
- console.log(xxx);
注意：xxx可以是字符串，可以是变量名（注意这个变量有没有声明）， 字符串是数据类型之一 字符串用来显示中英文要加上''或者""  如果不加就会变成变量

```
var m = '注释 index';
    // ''  ""  都可以输出字符串  字符串是数据类型之一 字符串用来显示中英文要加上''或者""  如果不加就会变成变量
    console.log(m);
```
### alert() 输出 面向用户
- alert("中午吃什么？");
```
// 浏览器提示框，不按确定，代码停止执行
    // 提示框里面的内容会显示出来
    // 面向的是用户
    // alert("中午吃什么？");
```
### prompt() 输入  面向程序员
- prompt("今天是几号？");

```
// 输入框
    // 1.获取用户输入的内容
    // 2.括号--提示文案
    // 3.我们需要用一个变量来装用户输入的数据
    // 4.面向用户
    var i = prompt("今天是几号？");
    // 面向程序员
    console.log(i);
```


# 5.16下午 ECAMScript

```
var a = 11;
var b = "alex";
可以看到,不同的数据类型
在内存中的大小是不一样的
计算机会自动的识别这些类型并自动分配最好的地方来存放这些数据
```


**所有数据类型都是大写开头**
## 5种简单数据类型  
（Number(数字) String(字符) Boolean(布尔) undfined null）

### Number (数字) 整数 浮点数（小数） NaN
```
var num = 12;
console.log(num);
```

**有一个特殊的数值重点记忆  NaN**
```
//not a number
var num = 12;
console.log(num - str);
//当出现这种非正常的数值相加减的时候，会出现NaN
var s = num - str;
console.log(s / 10);
//NaN的所有操作最终都是NaN
```

####  方法typeof
- 功能： typeof 是用来判断数据类型
- 语法： typeof 变量 或 typeof(变量)
```
var num = 12;
console.log(typeof num);
```

#### 方法isNaN
- isNaN(变量) 功能：判断当前变量是不是一个**非数字**,如果num是数字，isNaN() 返回 false; 如果是非数字 则返回true
```
var num = 12;
 var str = "alex";
var s = num - str;
var b = isNaN(s);
console.log(b);
```

#### 数据类型的转换
```
var demo = prompt('请输入你的年龄：');
console.log(typeof demo);
console.log(demo + 100);
//将demo从string 改成 number
```

- Numder()
```
console.log(Number(demo) + 100);//第一种
```

- parseInt()  取整操作  不管四舍五入
    如果是数字开头，截取非数字内容（不管后面还有没有数字）
    如果是非数字开头，直接变成NaN
```
console.log(parseInt(demo) + 100);//第二种


console.log(parseInt("3.888888"));//3
// 如果是数字开头，截取非数字内容（不管后面还有没有数字）
// 如果是非数字开头，直接变成NaN
console.log(parseInt("123rem456"));//123
console.log(parseInt("rem123"));//NaN
```

- parseFloat()  将字符串换成浮点数
    除了保留小数点以外操作不同，其余的跟parseInt一样
```
// 除了保留小数点以外操作不同，其余的跟parseInt一样
console.log(parseFloat("3.1415926"));//第三种
```

- 通过 - * 隐式转换
```
//通过 - * 隐式转换
console.log(demo - 0 + 0);//第四种
```

### String 字符串
```
var str = " ";
var num = 12;
```
#### 第一种
- 语法 变量.toString()
- 功能 就是将数字变成字符串
```
console.log(num);
console.log(num.toString());
```

#### 第二种
- 语法 String(变量)
- 功能 就是将数字变成字符串
```
var str1 = String(num);
console.log(typeof str1);
```

### Boolean 布尔值  true false
- 布尔值的类型转换
    只要字符串中有东西,不管是什么,都是true
    只有空字符串才是false
    只有number的0转换是false，其余都是true
```
var a = '';
console.log(Boolean(a));
```

### undefined（系统自带的） null（人为设置）
- undefined:未定义的值，希望表示一个变量最原始的状态，而非人为操作的结果
- null:人为将这个变量设置为空
```
// undefined null  =>严格来说是对象
// undefined null 转换成布尔值都是false
var b = null;
console.log(b);//null
console.log(Boolean(b));//false
console.log(Number(b));//0
// 单独记忆 null 转成number  是0
console.log(String(b));//null

var c;
console.log(c);//undefined
console.log(Boolean(c));//false
console.log(Number(c));//NaN
console.log(String(c));//undefined

console.log(typeof String(b));//string
console.log(typeof b);//object

console.log(typeof String(c));//string
console.log(typeof c);//undefined
```


## 1种复杂数据类型  object