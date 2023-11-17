---
title: 【后端】一小时入门flask框架
tags:
  - flask
  - python
categories:
  - 后端
keyword: 【后端】一小时入门flask框架
description: 【后端】一小时入门flask框架
cover: 'https://wudiguang.top/images/hexo/post/flask-cover.png'
top_img: 'https://wudiguang.top/images/hexo/post/flask-cover.png'
abbrlink: 2fc4698
date: 2023-10-29 09:53:00
---

教程：https://www.bilibili.com/video/BV1DY4y1M7cS

[封面图]

![封面图](https://wudiguang.top/images/hexo/post/flask-cover.png)

## 概述

Flask是一个轻量级的 WSGI Web 应用程序框架。它有 Armin Ronacher 开发，他领导一个名叫 Pocco 的国际 Python 爱好者团队。Flask基于 Werkzeug WSGI 工具包和Jinja2模板引擎。两者都是Pocco项目。

* WSGI：Web Server Gateway Interface（Web服务器网关接口，WSGI）已被用作Python Web应用程序开发的标准。WSGI是Web服务器和Web应用程序之间通用接口的规范。
* Werkzeug：它是一个WSGI工具包，它实现了请求、响应对象和实用函数。这使得能够在其上构建web框架。
* Jinja2：是Python的一个流行的模板引擎。Web模板系统将系统模板与特定数据源组合以呈现动态网页。

## 基础知识

### 路由、变量及URL规则

```python
# -*- coding: utf-8 -*-
# 使用特殊的注释来声明脚本文件的编码，声明的方式可以确保 Python 正确地解码和处理文本文件

from flask import Flask

app = Flask(__name__)

@app.route('/')
def index():
    return 'Hello, World'

@app.route('/hello/<name>')
def hello_name(name):
    return 'Hello, %s' % name

@app.route('/blog/<int:postID>')
def show_blog(postID):
    return 'Blog Number %d' % postID

if __name__ == "__main__":
    # 如果本地运行慢，可以开启threaded参数
    app.run(host='127.0.0.1', debug=True, threaded = True)
```

### 模板

```python
# -*- coding: utf-8 -*-

from flask import Flask,render_template

# flask模板

app = Flask(__name__)

@app.route('/')

def index():
    t_int = 18
    t_str = 'curry'
    t_list = [1,5,3,6,7]
    t_dict = {
        'name' : 'curry',
        'age' : 28
    }
    # render_template 渲染模板
    # 传入参数 key = value
    return render_template('index22.html',
                           my_int = t_int,
                           my_str = t_str,
                           my_list = t_list,
                           my_dict = t_dict)

if __name__ == "__main__":
    app.run(debug=True)
```

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>
    <h1>Hello, World</h1>
    my_int: {{my_int}}

    <br/>

    my_str: {{my_str}}

    <br/>

    my_list: {{my_list}}

    <br/>

    my_dict: {{my_dict}}

    <br/>

    <h2>列表数据：</h2>

    <p>{{my_list[0]}}</p>
    <p>{{my_list[1]}}</p>
    <p>{{my_list[2]}}</p>
    <p>{{my_list[3]}}</p>

    <h2>字典数据：</h2>

    <p>name：{{my_dict['name']}}</p>
    <p>age：{{my_dict['age']}}</p>
</body>
</html>
```

### 静态文件

```python
# -*- coding: utf-8 -*-

from flask import Flask,render_template,url_for

# flask 静态文件
app = Flask(__name__)

@app.route('/')

def index():
    return render_template('index3.html')

if __name__ == "__main__":
    app.run(debug=True)
```

```html
<!-- templates/index3.html -->
{% extends 'base.html' %}

{% block head %}

{% endblock %}

{%block body%}

<h1>Template</h1>

{% endblock%}
```

```css
/* static/css/main.css */
body {
    margin: 0;
    font-family: sans-serif;
}
```

```python
# -*- coding: utf-8 -*-

from flask import Flask,render_template,url_for,redirect

# flask URL构建
app = Flask(__name__)

@app.route('/')
def index():
    return 'Hello'

@app.route('/admin')
def hello_admin():
    return 'Hello, Admin'

@app.route('/guest/<guest>')
def hello_guest(guest):
    return 'Hello %s as Guest' % guest

@app.route('/user/<name>')
def hello_user(name):
    if name == 'admin':
        return redirect(url_for('hello_admin'))
    return redirect(url_for('hello_guest', guest = name))

if __name__ == "__main__":
    app.run(debug=True)
```

### 重定向和错误

```python
# -*- coding: utf-8 -*-

from flask import Flask,render_template,request,url_for,redirect,abort

# flask URL构建
app = Flask(__name__)

@app.route('/')
def index():
    return render_template('index7.html')


@app.route('/login', methods = ['POST', 'GET'])
def result():
    if request.method == 'POST':
        if request.form['username'] == 'admin':
            return redirect(url_for('success'))
        else:
            abort(401)
    elif request.method == 'GET':
        return redirect(url_for('index'))
        
@app.route('/success')
def success():
    return 'logged in successful'

if __name__ == "__main__":
    app.run(debug=True)
```

## 高级知识

### Cookies及会话

```python
# -*- coding: utf-8 -*-

from flask import Flask,make_response,request

# flask cookie
app = Flask(__name__)

@app.route('/set_my_cookie')
def set_my_cookies():
    resp = make_response('success')
    resp.set_cookie("aaa_key", "aaa_value", max_age=3600)
    return resp

@app.route('/get_my_cookie')
def set_my_cookie():
    cokkie_1 = request.cookies.get("aaa_key")
    return cokkie_1

@app.route('/delete_my_cookie')
def delete_my_cookie():
    resp = make_response('delete success')
    resp.delete_cookie("aaa_key")
    return resp

if __name__ == "__main__":
    app.run(debug=True)
```

```python
# -*- coding: utf-8 -*-

from flask import Flask,make_response,request,render_template,session,redirect,url_for

# flask session
app = Flask(__name__)

app.secret_key = '123456'

@app.route('/')
def index():
    if 'username' in session:
        user = session['username']
        return '登录用户名是：' + user + '<br/>' + "<b><a href='/logout'>点击这里注销</a></b>"
    return "您暂未登录，<br/> <a href='/login'>点击这里登录</a>"

@app.route('/login', methods = ['POST', 'GET'])
def result():
    if request.method == 'POST':
        session['username'] = request.form['username']
        return redirect(url_for('index'))
    elif request.method == 'GET':
        return render_template('index7.html')

@app.route('/logout')
def logout():
    session.pop('username', None)
    return redirect(url_for('index'))

if __name__ == "__main__":
    app.run(debug=True)
```

### 消息闪现

### WTF表单

### SQLAlchemy及数据库、Sijax