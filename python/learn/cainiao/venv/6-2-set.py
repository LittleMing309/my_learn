# set
# set和dict类似，也是一组key的集合，但不能储存value。由于key不能重复，所以，在set中没有重复的key。
# 要创建一个key，需要提供一个list作为输入集合：
# s = set([1,2,3])
# print(s)
# 传入的参数[1,2,3]是一个list，而显示的{1,2,3}只是告诉你这个set内部包含1,2,3这3个元素，显示的顺序也不表示set是有序的。
# 重复的元素在set中自动过滤
# s = set([4,5,6,7,3,1,2])
# print(s)
# 通过add(key)方法可以添加元素到set中，可以重复添加，但不会有效果：
# s.add('abc')
# print(s)
# 通过remove(key)方法可以删除元素：
# s.remove(3)
# print(s)

# set可以看做数学中的无序和无重复元素的集合，因此，两个set可以看做数学上的交集、并集等操作。
# s1 = set([1,2,3])
# s2 = set([2,3,4])
# print(s1 & s2)
# print(s1 | s2)
# set和dict的唯一区别仅在于没有储存对应的value，但是，set的原理和dict的一样，所以，同样不可放入可变对象，因为无法判断两个可变对象是否相等，也就无法保证set内部“不会有重复对象”。试试吧list放入set，看看是否会报错？
# tuple = (1,2,3)
# list = [1,2,3]
# s1 = set([tuple])
# s2 = set([list])
# print(s1)
# print(s2)

# 再议不可变对象
# str是不可变对象，而list是可变对象。
# 对于可变对象，比如list，对list进行操作，list内部内容是会发生变化的，比如：
# a = ['a','c','b']
# a.sort()
# print(a);
# 而对于不可变对象，比如str，对str进行操作呢？
# a = 'abc'
# b = a.replace('a','A')
# print(a)
# print(b)