# 调用函数
# Python内置了很多有用的函数，我们可以直接调用。
# 要调用一个函数，需要知道函数的名称和参数，比如求绝对值的函数abs，只有一个参数。可以直接从Python的官方网站查看文档：
# http://docs.python.org/3/library/functions.html#abs
# 也可以在交互式命令行通过help(abs)查看abs函数的帮助信息。
# 调用abs函数：
# print(abs(100))
# print(abs(-10023))
# print(abs(3.14))
# 调用函数的时候，如果传的参数数量不对，会报TypeError的错误，并且Python会明确的告诉你：abs()有且仅有一个参数，但出现了两个：
# print(abs(1,2))

# 而max函数max()可以接收任意多个参数，并返回最大的那个：
# print(max(1,2,3,100000000000000000000000000000000000000000000000000))

# 数据类型转换
# 转整数
# print(int('123'))
# print(int(12.53))
# 转浮点数
# print(float('12.34'))
# print(float(12))
# 转字符串
# print(str(123))
# 转Boolean
# print(bool(123))
# print(bool(''))

# 函数名其实就是指向一个函数对象的引用，完全可以把函数名赋给一个变量，相当于给这个函数起了一个别名：
# a = abs # 变量a指向abs函数
# print(a(-1))

# 练习
# 用python内置函数hex()把一个整数转换为十六进制的字符串：
print(hex(255))
print(hex(1000))