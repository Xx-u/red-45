# 什么是表达式
- 将同类型的数据，用运算符的方式按照一定的规则连接起来，具有意义的式子

# 操作符（运算符）分类 

## 算数运算符  + - * /  %  ++(递增) --(递减)
```
var a = 1;
var b = 2;
var c = a + b;
console.log(a % b);
```
### +



## 赋值运算符

### 简单赋值: = 
```
 var a = 1;
console.log(a);
```

### 复合赋值: += -= /= *= %=
```
// 等同于
// a=a+1;
// a++;
a += 1;
console.log(a);

var b = 9;
b %= 0;
console.log(b);
// 特殊记忆：任何数  %=0  都是NaN
```


## 比较运算符

### ==
```
var a = 1;
var b = 2;
var c = "1";
console.log(a == b);
console.log(a == c);
// 双等的时候，是会发生数据类型的转换
```

### ===
```
console.log(a ===c);
    // 不仅要求数值相等，还要类型相等
    // 两个要求同时满足才能返回true
```

### ！=    ！==
```
console.log(a != b);
console.log(a !== b);
console.log(a != c);
console.log(a !== c);
    // != 不相等，比较值是否不相等
    // !== 不全等，比较值的同时，比较数据类型是否不相等
```

## 逻辑(重点 难点)
### 与  &&
- 1.语法： 操作数 && 操作数

- 2.操作数类型：
    2-1布尔：
    (1).布尔值；
    (2).表达式
    如果是比较运算符（返回boolean）,遵循正常的规则；
    如果是算数运算符（返回的不是boolean），就会执行短路运算
    (true && 内容) 返回后面的内容（计算或者比较后的结果）
    (false && 内容) 都是false
    (隐式转换是false && 内容) 返回&&前面的内容
    (隐式转换是true && 内容) 返回&&后面的内容

- 3.运算规则：
    3-1.至少两个操作数,从左到右运行
    两个：如果一个为假，都为假；两个为真，才为真
    多个：跟两个一样的

- 运算规则：
    若操作数1为true，操作数2如果不是一个布尔值，
    - 是表达式，就会返回表达式的结果（数子，Boolean）
    - 是数据类型，返回其本身
    若操作数1为false，操作数是什么就根本不关心
```
console.log(false && false);
        console.log(1 + 0 && true);

        console.log(true && 1 > 0);

        console.log(1 + 0 && true);//true
        console.log(false && 1 + 0);//false
        console.log(true && 1 + 0);//1
        console.log("" && 2 + 1);//没有
        console.log("" && 2 + 1);//没有
        console.log(0 && 1 > 2);//0
        console.log(true && 1 + 10);//11
        console.log(" " && 2 + 1);//3
        console.log(" " && "alex");//alex
        console.log(1 + 0 && 3 > 1);//true

        // 特殊记忆，这五个东西，返回其本身
        console.log(0 && 123);
        console.log('' && 123);
        console.log(NaN && 123);
        console.log(undefined && 123);
        console.log(null && 123);
```
### 或  ||
- 运算规则：
    一真为真，全假才为假

- 断路运算

- 运算规则：
    若操作数1为false，操作数是什么就根本不关心
    若操作数2为true，操作数2如果不是一个布尔值，
    - 是表达式，就会返回表达式的结果（数子，Boolean）
    - 是数据类型，返回其本身
```
console.log(true || true);//true
        console.log(true || false);//true
        console.log(false || false);//false


        console.log(true || 1 + 2);//true
        console.log(true || "alex");//true
        console.log(true || 2 > 1);//true
        console.log(true || null);//true
        console.log(true || undefined);//true


        console.log(false || 1 + 2);//3
        console.log(false || "alex");//alex
        console.log(false || 2 > 1);//true
        console.log(false || null);//null
        console.log(false || undefined);//undefined


        console.log(0 || 123);//123
        console.log('' || 123);//123
        console.log(NaN || 123);//123
        console.log(undefined || 123);//123
        console.log(null || 123);//123
```
### 非  ！
```
console.log(!true);
console.log(!!1);//true
console.log(!!0);//false
```