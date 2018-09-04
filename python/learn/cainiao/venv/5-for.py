# 循环
# python的循环有两种， 一种是for…in循环，依次把list或tuple中的每个元素迭代出来：
# names = ['xiaoming','xiaohong','xiaoliang']
# for name in names:
#     print(name)

# nums = [1,2,3,4,5,6,7,8,9,10]
# sum = 0
# for x in nums:
#     sum = sum + x
# print(sum)

# 要计算1-100之间的整数之和，从1写道100有点困难，python提供了一个range()函数，可以生成一个整数序列，再通过list()函数可以转化为list。比如range(5)生成的序列是从0开始到小于5的整数
# print(list(range(5)))
# 打印 [0, 1, 2, 3, 4]

# 练习，打印1-100之间的整数和
# nums = list(range(101))
# sum = 0
# for x in nums:
#     sum = sum + x
# print(sum)

# 第二种循环是while循环，只要满足条件，就不断循环，条件不满足时退出循环。比如我们要计算100内奇数的和，就可以用while循环实现：
# sum = 0
# n = 99
# while n>0:
#     sum = sum + n
#     n = n - 2
# print(sum)
# 再循环内部变量n不断自减，直到变为-1为止，不在满足while条件，循环退出。

# break，在循环中，break语句可以提前退出循环。例如：本来要打印1-100之间的数字：
# n = 1
# while n <= 100:
#     if n > 10:
#         break
#     print(n)
#     n = n+1
# print('END')
# 执行上面代码可以看到，打印1-10后，紧接着打印END，程序结束。

# continue，再循环过程中，也可以通过continue语句，跳过当前的这次循环，直接开始下一次循环
# n = 0
# while n<10:
#     n = n+1
#     if n % 2 == 0:
#         continue
#     print(n)
# 执行上面的代码可以看出，打印的不是1-10，而是1、3、5、7、9
# 可见continue的作用是提前结束本轮循环，并直接开始下一轮循环