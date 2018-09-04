# dict
# python内置了字典：dict的支持，dict全称dictionary，在其他语言中也成为map，使用键值（key-value）储存，具有极快的查找速度
d = {'xiaoming':95,'xiaoliang':59,'xiaohong':100}
# print(d['xiaoming'])
d['xiaohua'] = 99;
# print(d)
# print(d['aaa']) -> 报错：key值不存在。
# 要避免key不存在引发的错误，有两种办法，一是通过 in 来判断key值是否存在：
# print('aaa'in d)
# 二是通过dict提供的get()方法，如果key不存在，可以返回done，或者自己指定的value
# print(d.get('xiaoA'))
# print(d.get('xiaoA',88))
# print(d)
# 注意：返回done的时候Python的交互环境不显示结果

# 要删除一个key，用pop(key)方法，对应的value也会在dict中删除
print(d.pop('xiaoliang'))
print(d)
# 和list相比，dict具有以下几个特点：
#     1、查找和插入的速度极快，不会随着key的增加而变慢
#     2、需要占用大量的内存，内存浪费多
# 而list相反
#     1、查找和插入的时间随着元素的增加而增加
#     2、占用空间小，浪费内存很小
# 所以，dict是用空间来换取时间的一个方法
# 在python中，字符串，整数等都是不可变的，因此，可以放心作为key值。而list是可变的，就不能用作key值