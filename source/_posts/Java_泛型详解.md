---
title: 【Java】泛型详解
tags:
  - 泛型
categories:
  - java
keyword: 'Java,泛型'
description: 【Java】泛型详解
cover: '../pic/cover-generic.png'
top_img: '../pic/cover-generic.png'
abbrlink: efb08324
date: 2023-03-02 10:23:00
---

[封面图]

![封面图](../pic/cover-generic.png)

## 泛型概述

### 泛型定义

​Java泛型是J2 SE1.5中引入的一个新特性，其本质是参数化类型，也就是说所操作的数据类型被指定为一个参数（type parameter）这种参数类型可以用在类、接口和方法的创建中，分别称为泛型类、泛型接口、泛型方法。

泛型的本质是为了参数化类型（在不创建新的类型的情况下，通过泛型指定的不同类型来控制形参具体限制的类型）。

## 泛型优点

### 类型安全

泛型的主要目标是提高Java程序的类型安全。通过知道使用泛型定义的变量的类型限制，编译器可以在非常高的层次上验证类型假设。通过在变量声明中捕获这一附加的类型信息，泛型允许编译器实施这些附加的类型约束。类型错误就可以在编译时被捕获了，而不是在运行时当作ClassCastException展示出来。将类型检查从运行时挪到编译时有助于Java开发人员更早、更容易地找到错误，并可提高程序的可靠性

```java
//没有泛型的情况
public static void main(String[] args) {
    ArrayList list = new ArrayList<>();
    list.add("11");
    list.add(123);//编译正常
}

//有泛型的情况
public static void main(String[] args) {
    List<String> list = new ArrayList<>();
    list.add("11");
    list.add(123);//编译报错
}
```

### 消除强制类型转换

```java
//没有泛型的代码段需要强制转换
public static void main(String[] args) {
    List list = new ArrayList();
    list.add(123);
    Integer integer = (Integer) list.get(0);
}

//有泛型的代码段不需要强制转换
public static void main(String[] args) {
    List<Integer> list = new ArrayList<Integer>();
    list.add(1);
    int s = list.get(0);
}
```

### 更高的运行效率

避免了不必要的装箱、拆箱操作，提高程序的性能。在非泛型编程中，将简单类型作为Object传递时会引起Boxing（装箱）和Unboxing（拆箱）操作，这两个过程都是具有很大开销的。引入泛型后，就不必进行Boxing和Unboxing操作了，所以运行效率相对较高，特别在对集合操作非常频繁的系统中，这个特点带来的性能提升更加明显。

`​ 提高了代码的重用性，泛型的程序设计，意味着编写的代码可以被很多不同类型的对象所重用`

## 泛型的使用
> 泛型的三种使用方式：泛型类，泛型方法，泛型接口

泛型只在编译阶段有效

### 泛型类

泛型类型必须是引用类型（非基本数据类型）。泛型类型用于类的定义中，被称为泛型类。通过泛型可以完成对一组类的操作对外开放相同的接口。最典型的就是各种容器类，如：List、Set、Map。

```java
//格式
public class 类名 <泛型类型1,...> {
    
}
```

```java
public static void main(String[] args) {
    //泛型类
    Generics<String> name = new Generics<>("泛型");
    System.out.println(name.getValue());


    Generics<Integer> number = new Generics<>(1111);
    System.out.println(number.getValue());

}

public static class Generics<T> {
    private T value;


    public Generics(T value) {
        this.value = value;
    }

    public T getValue() {
        return value;
    }

    public void setValue(T value) {
        this.value = value;
    }
}

//结果
泛型
1111
```

### 泛型方法

泛型方法，是在调用方法的时候指明泛型的具体类型。

```java
//格式
public <泛型类型> 返回类型 方法名（泛型类型 变量名） {
    
}
```

```java
public static void main(String[] args) {

        Test d = new Test();
        String str = d.function("泛型");
        int i = d.function(1);
        System.out.println(str);
        System.out.println(i);


}

static class Test {
    public <T> T function(T t) {
        return t;
    }
}

//结果
泛型
1
```

### 泛型类接口

​ 泛型接口与泛型类的定义及使用基本相同。泛型接口常被用在各种类的生产器中。方法声明中定义的形参只能在该方法里使用，而接口、类声明中定义的类型形参则可以在整个接口、类中使用。当调用fun()方法时，根据传入的实际对象，编译器就会判断出类型形参T所代表的实际类型，使用泛型的时候，前后定义的泛型类型必须保持一致，否则会出现编译异常

```java
//格式
public interface 接口名<泛型类型> {
    
}
```

```java
public static void main(String[] args) {
        GenericsInterface getString = new getStringImpl();
    	getString.get("111");
        GenericsInterface getInteger = new getIntegerImpl();
    	getInteger.get(123);

    }

public static class getStringImpl implements GenericsInterface<String> {
    @Override
    public void get(String value) {
        System.out.println(value);
    }
}

public static class getIntegerImpl implements GenericsInterface<Integer> {
    @Override
    public void get(Integer value) {
        System.out.println(value);
    }
}

public interface GenericsInterface<T> {
    void get(T value);
}

//结果
111
123
```

`使用注意`

1. 泛型的类型参数只能是类类型（包括自定义类），不能是简单类型。
2. 泛型的类型参数可以有多个。
3. 不能对确切的泛型类型使用instanceof操作。如下面的操作是非法的，编译时会出错。
4. 不能创建一个确切的泛型类型的数组。

## 泛型通配符

### 常用的通配符

* E： Element (在集合中使用，因为集合中存放的是元素)
* T：Type（Java 类）
* K： Key（键）
* V： Value（值）
* N： Number（数值类型）
* ？： 表示不确定的java类型

### 通配符上界

<？ extends E>，在类型参数中使用 extends 表示这个泛型中的参数必须是 E 或者 E 的子类

使用固定上边界的通配符的泛型, 就能够接受指定类及其子类类型的数据。
要声明使用该类通配符, 采用<? extends E>的形式, 这里的E就是该泛型的上边界。

`注. 这里虽然用的是extends关键字, 却不仅限于继承了父类E的子类, 也可以代指显现了接口E的类`

```java
public static void main(String[] args) {
        List<Father> listF = new ArrayList<>();
        List<Son> listS = new ArrayList<>();
        List<Daughter> listD = new ArrayList<>();
        testExtend(listF);
        testExtend(listS);
        testExtend(listD);

}

private static <T> void testExtend(List<? extends Father> list) {}

static class Father {}

static class Daughter extends Father {}

static class Son extends Father {}
```

### 通配符下界

<？ super T>，在类型参数中使用 super 表示这个泛型中的参数必须是 E 或者 E 的父类。

使用固定下边界的通配符的泛型, 就能够接受指定类及其父类类型的数据.。
要声明使用该类通配符, 采用<? super E>的形式, 这里的E就是该泛型的下边界.。

`注. 你可以为一个泛型指定上边界或下边界, 但是不能同时指定上下边界。`

```java
public static void main(String[] args) {
        List<Father> listF = new ArrayList<>();
        List<Son> listS = new ArrayList<>();
        List<Daughter> listD = new ArrayList<>();
        testSuper(listF);
        testSuper(listS);
        testSuper(listD);

    }

private static void testSuper(List<? super Son> list){} {}

static class Father { }

static class Daughter extends Father {}

static class Son extends Father {}
```

List<? super Son> list 接受的类型只能是 Son 或者是 Son 的父类，而 Father 和 GrandFather 又都是 Son 的父类，所以以上程序是没有任何问题的，但是如果再来一个类是 Son 的子类（如果不是和 Son 有关联的类那更不行了）


### 无界通配符

<?>，即类型参数可以是任何类型
无边界的通配符的主要作用就是让泛型能够接受未知类型的数据

```java
public static void main(String[] args) {
    List<Integer> arrays = Arrays.asList(1, 1, 1);
    List<String> arrayString = Arrays.asList("1", "1", "1");
    printList(arrays);
    printList(arrayString);

}

public static void printList(List<?> list) {
    for (Object elem : list) {
        System.out.print(elem + "");
    }
    System.out.println();
}

//结果
111
111
```

### 类型擦除

Java的泛型是伪泛型，为什么说Java的泛型是伪泛型呢？因为在编译期间，所有的泛型信息都会被擦除掉，我们常称为泛型擦除。

```java
@Test
public void test() {
    List<String> stringList = new ArrayList<String>();
    stringList.add("泛型");
    List<Integer> integerList = new ArrayList<Integer>();
    integerList.add(1);
    System.out.println(stringList.getClass() == integerList.getClass());
}

//结果
true
```

​ 定义了两个List，不过一个是List泛型类型，只能存储字符串。一个是List泛型类型，只能存储整型。最后，我们通过stringList对象和integerList对象的getClass方法获取它们的类的信息，最后发现结果为true。说明泛型类型String和Integer都被擦除掉了，只剩下了原始类型。

