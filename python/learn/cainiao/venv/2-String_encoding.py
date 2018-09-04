# print('包含中文的str');

# ord() -> 获取字符串的编码
# print(ord('A'));
# print(ord('B'));
# print(ord('C'));
# print(ord('中'));

# chr() -> 把编码转换成对应的字符串
# print(chr(123))
# print(chr(68))
# print(chr(25991))

# Python的字符串类型是str，在内存中以Unicode表示，一个字符对应若干个字节。如果需要在网络上传输，或者保存在磁盘中，就需要把str转换为以字节为单位的bytes。
# Python对bytes类型的数据用带b前缀的单引号或双引号表示：
# x = b'ABC'
# print(x);
# 以Unicode表示的str通过encode()方法可以编码为指定的bytes，例如：
# 纯英文的str可以用ASCII编码为bytes，内容是一样的；包含中文的str可以用utf-8编码为bytes。包含中文的str无法用ASCII编码，因为中文编码的范围已经超过了ASCII编码的范围，python会报错。
# 在bytes中，无法显示为ASCII字符的字节， 用\x##显示
# x = 'ABC'.encode('ascii');
# print(x);
# z = '中文'.encode('utf-8');
# print(z);
# 反过来，如果我们从网络或者磁盘上面读取字节流，那么读到的数据就是bytes。要把bytes变为str，就需要用decode()方法:
# s = b'ABC'.decode('ascii');
# print(s);
# s1 = b'\xe4\xb8\xad\xe6\x96\x87'.decode('utf-8');
# print(s1);
# 如果bytes中包含无法解码的字节，decode()方法会报错
# s = b'\xe4\xb8\xad\xff'.decode('utf-8');
# print(s); -> 报错：'utf-8'编解码器无法解码位置3中的字节0xff：无效的起始字节
# 如果bytes中只有一小部分无效的字节，可以传入error='ignore'忽略错误字节:
# s = b'\xe4\xb8\xad\xff'.decode('utf-8',errors='ignore');
# print(s);

# 要计算str包含多少个字符，可以用len()函数：
# l = len(b'ABC');
# print(l);
# l2 = len('中文');
# print(l2);
# l3 = len(b'\xe4\xb8\xad\xe6\x96\x87');
# print(l3);
# l4 = len('中文'.encode('utf-8'));
# print(l4)

# 在操作系统中,我们经常遇到str和bytes的互相转换，为了避免乱码问题，应当始终坚持使用utf-8编码对str和bytes进行转换。
# 由于python源代码也是文本文件，所以，当你的源代码包含中文的时候，在保存源代码时，就需要指定务必保存为utf-8编码。当Python解释器读取源代码时，为了让他按照utf-8编码读取，我们通常在文件开头加上这两行：

#!/usr/bin/env python3
# -*- coding: utf-8 -*-

# 第一行注释为了告诉Linux/OSX系统，这是一个Python可执行程序，windows系统会忽视这个注释。
# 第二行注释为了告诉python解释器，按照utf-8编码读取源代码，否则，你在源代码中写的中文输出可能会有乱码。
# 申明了utf-8编码并不意味着你的.py文件就是utf-8编码的，必须并且要确保文件编辑器正在使用UTF-8 without BOM编码

# 格式化
# 在python中，采用的格式化方式和C语言是一致的，用%实现，如下：
# s = 'hello, %s' % 'world';
# print('s:',s);
# s2 = '我的名字是%s，今年%d岁。' % ('小明',18);
# print('s2:',s2);
# %运算符就是用来格式化字符串的。在字符串内部，%s表示用字符串替换，%d表示用整数代替，%f表示用浮点数代替，%x表示用十六进制整数代替，有几个%?占位符，后面就需要跟几个变量或者是值，顺序要对应好。如果只有一个%?，括号可以省略
# print('%5d-%05d' % (3,1));
# print('%.12f' % 3.1415);
# 其中，在%5d表示需要5位整数，如果传入的值不足5位，会显示空格。%05d表示需要5位整数，如果传入的值不足5位，前面补零。
# %.2f表示显示两位小数，如果不足两位小数，后面补零
# 如果你不太确定用什么，%s永远起作用，他会把任何数据类型转为字符串：
# print('年龄：%s, Gender：%s' % (23,True));
# 有些时候，字符串%是一个普通字符串怎么办？这个时候需要转义，用%%来表示一个%
# print('较上年增长%.2f%%' % 0.54);
# 另一种初始化方法format(),他会传入的参数依次替换字符串的占位符{0}，{1}……，不过这种方式写起来要比%麻烦的多：
# print('Hello,{0},成绩提升了{1:.1f}%'.format('小明',12.564));

# 练习：小明的成绩从去年的72分提升到了今年的85分，请计算小明成绩提升的百分点，并用字符串格式化显示出'xx.x%'，只保留小数点后1位：
s1 = 72;
s2 = 85;
r = (s2-s1)/s1;
print(r)
print('小明比去年的成绩提升了%.1f' % r);
