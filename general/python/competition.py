import turtle 
turtle.speed(100) 

#Donut
from turtle import *
color('purple', 'white')
begin_fill()
while True:
    forward(180)
    left(129)
    if abs (pos()) <1:
        break
end_fill()
done()
        
        

        