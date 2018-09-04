# tuple,元组（另一种有序列表） tuple和list非常相似，但是tuple一旦初始化就无法修改。
# classmates = ('name1','name2','name3');
# print(classmates)
# 现在，classmastes这个tuple不能变了，他也没有append(),insert()这样的方法。其他获取元素的方法和list是一样的，可以正常使用classmates[0],classmates[-1],但是不能赋值成另外元素
# 不可变的tuple的意义:因为tuple不可变,所以代码更安全。如果可能，能用tuple代替list尽可能的用tuple。

# tuple的缺陷：当你定义一个tuple时，在定义的时候，tuple的元素就必须被确定下来，比如：
# t = (1,2);
# print(t);

# 定义一个空的tuple，可以写成()：
# t = ();
# print(t)

# 但是，要定义一个只有1个元素的tuple，如果你这么定义：
# t = (5);
# print(t);
# 定义的不是tuple，而是5这个数！这是因为括号()既能表示tuple，又可以表示数学公式中的小括号，这就产生了歧义，因此，python规定，这种情况，按照小括号计算，计算结果自然是5。
# 所以，只有1个元素的tuple定义是必须加逗号,来消除歧义：
# t = (5,)
# print(t);

# 可变的tuple
t = ('a','b',['A','B']);
print(t);
t[2][0] = 1;
t[2][1] = 2;
print(t);
# 表面上看tuple确实是变了，但其实变的不是tuple元素，而是list元素。tuple一开始指向的list并没有变成其他的list，所以，tuple所谓的不变之说，是指tuple的每个元素，指向永远不变。
# 即指向a就不能指向b，指向一个list，就不能改成指向其他对象，但是指向的这个list是可变的。
