# x = 1
# if x == 1:
#     # indented four spaces
#     print("x is 1.")
#     print("Goodbye, World!")


mystring = "hello"
print(mystring)
mystring = "Don't worry about apostrophes"
print(mystring)
one = 1
two = 2
three = one + two
print(three)

hello = "hello"
world = "world"
helloworld = hello + " " + world
print(helloworld)

a, b = 3, 4
print(a,b)


mystring = (3)
myfloat = (10.0)
myint = (20)

if mystring == "hello":
    print("String: %s" % mystring)
if isinstance(myfloat, float) and myfloat == 10.0:
    print("Float: %f" % myfloat)
if isinstance(myint, int) and myint == 20:
    print("Integer: %d" % myint)