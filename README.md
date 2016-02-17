# React-Tac-Toe

This module is a Tic-Tac-Toe game played in the browser, completed as part of a [course](http://arch-joelross.rhcloud.com/) at the UW ISchool. 

The below questions should be answered (in detail!) regarding your submission!


##### 1. Does using a Model-View-Controller architecture make it easier to change your game in the future? How many places would you need to make changes to your code to make this a 5x5 game of Tic-Tac-Toe?
> Using a Model-View-Controller definitely makes it easier to update my game in the future. Since the data is all focused in the
model and the UI is all focused in the view, it would be much more efficient to focus on one part of the architecture. If I 
wanted to create a 5x5 board, I would need to change the board field into a larger dimension and change the checkWinner method
so that all possibilities would be determined. In addition, I would need to add more buttons in the view and change the 
updateBoard checks in the handleClick function so that the accurate React ID data number would correspond to the correct
space.


##### 2. Why did I say that an `Array` is the best data structure to represent the game's grid of cells? Why not a 2D-array (Array of Arrays), or an Object, or a Linked-List, or a Tree? 
> I was not careful in reading the specification so I used a 2D array. However, I can see how a basic array would be a better
data structure for this game because it would be easier to handle one index instead of two indexes for row and column. An array
is also easier to manipulate the internal data as well. On the other hand, using a 2D array for my implementation was beneficial
in the fact that it was better to visualize the board inside my Model.


##### 3. What online resources did you find to help you learn React? How do you search for resources, and how did you determine whether they were helpful or not? Think back to the "learning an API" paper! 
> I used Joel's slides to help me figure out some of my debugging. For instance, the slide about updating the render saved me
a ton of time as I had significant trouble figuring out why my scoreboard wouldn't update after clicking a space. Other sources
I used was the React.js tutorial and Stack Overflow. They were helpful when they explained terms in a general sense and less
helpful when it was a specific example (such as a specific question on Stack Overflow).


##### 4. Approximately how many hours did it take you to complete this assignment? #####
> I spent around 12-15 hours completing this assignment.


##### 5. Did you receive help from any other sources (classmates, etc)? If so, please list who (be specific!). #####
> Other than the lecture slides, React.js tutorial, and Stack Overflow, I did not receive other help.


##### 6. Did you encounter any problems in this assignment we should warn students about in the future? How can we make the assignment better? #####
> Maybe be more clear about not using a 2D array (partially my fault). Other than that, it was problem-free.
