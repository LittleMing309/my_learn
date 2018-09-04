#!/usr/bin/env python3
# -*- coding: utf-8 -*-

# list
# Python内置的一种数据类型是列表：list。list是一种有序的集合，可以随时添加和删除其中的元素。
# 比如列出班内所有同学的名字，就可以用一个list表示：
# classmates = ['name1','name2','name3'];
# print(classmates)
# print(len(classmates))
# print(classmates[0],classmates[1],classmates[2])
# print(classmates[-1],classmates[-2],classmates[-3])
# list是一个可变的有序列表，所以，可以往list中追加元素到末尾：
# classmates = ['name1','name2','name3'];
# classmates.append('name4');
# print(classmates)
# classmates.insert(1,'1name');
# print(classmates)
# classmates.pop()
# print(classmates)
# classmates.pop(0);
# print(classmates)
# classmates[0] = '名字';
# print(classmates)
p = [1,True,'名字'];
s = ['python',99,p,False];
print(s);
print(len(s));
print(s[2][2]);