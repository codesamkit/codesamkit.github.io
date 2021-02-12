import turtle 
turtle.speed(100) 

from turtle import *
color('turquoise', 'blue')
begin_fill()
while True:
    forward(300)
    left(100)
    if abs (pos()) <1:
        break
while True:
    forward(300)
    left(100)
    if abs (pos()) <1:
        break
end_fill()
done()
        
