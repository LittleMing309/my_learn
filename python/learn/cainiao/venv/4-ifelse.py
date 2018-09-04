# 条件判断
# age = 18;
# if age>18:
#     print('你的年纪比18大，是',+age);
# elif age<18:
#     print('你的年纪比18小，是',age)
# else:
#     print('你的年纪是',age)

# if判断还可以简写：
# x = True
# if x:
#     print(23)
# 只要x是非零整数，非空字符串，非空list，False等，就判断为True，否则为True

# input()
# 有问题的判断，使用input()读取用户输入，这样可以自己输入，程序更有意思
# birth = input('birth：')
# if birth<2000:
#     print('00前')
# else:
#     print('00后')
# 上面这么写输入1982就报错了，因为input输入的数据类型是str类型，str不能直接与整数类型比较，必须先把str转为整数类型。python提供了int()函数来完成这件事
# s = input('birth：')
# birth = int(s)
# if birth<2000:
#     print('00前')
# else:
#     print('00后')

# 练习：
# 小明身高1.75，体重80.5kg。请根据BMI公式（体重除以身高的平方）帮小明计算他的BMI指数，并根据BMI指数：
# 低于18.5：过轻
# 18.5-25：正常
# 25-28：过重
# 28-32：肥胖
# 高于32：严重肥胖

height = 1.75
weight = 50.5
BMI = weight / (height * height)
print(BMI)
if BMI<18.5:
    print('过轻')
else:
    if BMI<25:
        print('正常')
    else:
        if BMI<28:
            print('过重')
        else:
            if BMI<32:
                print('肥胖')
            else:
                print('严重肥胖')