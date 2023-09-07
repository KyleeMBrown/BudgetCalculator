# BudgetCalculator
A calculator used to keep track of your expenses based on hourly wages. Made with CSS HTML and JS

This calculator is my first official project using Javascript and has been challenging as well as rewarding!

~ I made this project so me and boyfriend, who are both in college, could keep track of our finances and create a plan based off 
  of the information the calculator generates. I wanted something different than the calculators i've used previously, and 
  I wanted to be able to see the numbers changing and adjusting as I calculated and to be able to go back and manipulate
  my inputs in order to more quickly view the changes. I also wanted the amount saved as well as amount left over to be shown (I've noticed 
  most savings calculators show either the percent you want saved or your income after savings, not both).
  Lastly, I wanted to include a summary of what the calculator calculated, and I also wanted to include calculations of 5% above or below the selected savings 
  amount in order to showcase what a little difference could make in their plan. 

JS Problems: 
  One problem that occured weas a function not being called correctly due to an id not being selected using getElementbyId(). 
  The method getElementbyId() is what helps me find the "space" I can fill with my values that I return in my functions. 
  After learning this, I was able to quickly write code: 

  Another problem wad clearing the input values. I learned that setting the value equal to an empty string basically erases whatever
  the user inputed which is really convienent to utiilize with a clear function. 
  

HTML & CSS Problems:
  The only problems that occured were certain buttons were not allowing me to style on hover. In order to work around this I 
  placed the button in different parts of my html and that seemed to solve the problem. 

  Skills Learned: 
  -Taking user input as values and manipulating the values then outputting them 
  -calling to functions 
  
  New code Learned:
    onclick - allows a function to be called with a click of a button
    toLocaleString() - allows commas to be used 
    parseFLOAT() - turnes a string into a Float
    Number() - turns anything into a number
    document.getElementbyId().innerhtml - placement within the html
    document.getElementbyId().value - Grabs the value according to ID - I used this to grab user input
  
