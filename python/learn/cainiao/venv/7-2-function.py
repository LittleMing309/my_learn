# 定义函数
# 在python中，定义一个函数使用def语句，依次写出函数名、括号、括号中的参数和冒号，然后在缩进块中编写函数体，函数的返回值用return语句返回,如果没有return语句，函数执行完毕后也会返回结果，只是结果为None。retur None可以简写为return
# 定义一个求绝对值的函数：
# def my_abs(num):
#     if num<0:
#         return -num
#     else:
#         return num
# 用from abstest import my_abs 来导入my_abs()函数，注意abstest是文件名，（不包含.py扩展名）
# from abstest import my_abs
# print(my_abs(123))
# print(my_abs(0))
# print(my_abs(-123))
# print(my_abs('aaa'))

# 空函数
# 如果想定义一个什么事也不做的空函数，可以使用pass语句：
# def nop():
#     pass
# pass语句的用处：实际上pass可以用来作为占位符，比如现在还没有想好怎么写函数的代码，就可以先放一个pass，让代码运行起来
# pass还可以用在其他语句中：
# age = 20
# if age>= 18:
#     pass
# 缺少了pass，代码运行就会有语法错误。

# 参数检查
# 数据类型检查可以使用内置函数isinstance()实现

# 返回多个值
# import math # 引入math包，并允许后续代码中引用math中的函数方法
# def move(x,y,step,angle=0):
#     nx = x + step * math.cos(angle)
#     ny = y - step * math.sin(angle)
#     return nx , ny
#
# x,y = move(100,100,60,math.pi/6)
# print(x,y)
# 返回值是一个tuple，但是在语法上，返回的tuple可以省略括号，而多个变量可以同时接收一个tuple，按位置赋给对应的值，所以，python的函数返回多值其实就是返回一个tuple，但写起来方便。
