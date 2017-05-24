//=================================================================
// Actually running code
//=================================================================
// Up until now, we've declared a lot of values with the let statement
// And we've seen that intellisense can tell us about the types of our 'let' values and the types of our data
// But how do we run the code?
// And how can we see the data that's in the let values rather than just see the data types
let the_value_five = (15 + 10 * 17 - (60 * 3))
let a_collection_of_strings = ["a", "b", "c", "d", "e", "f", "g"]

// <- Click the debug tab on the left side of the screen!
// Now click the green play button!
debugger
// The statement above should be glowing yellow right now~
// And you'll see that a lot of values have popped up in the lefthand side of the window
// Also, look to the top! There's a bar with some playback controls
// Press the red stop button to stop the program!
// Then run it again using the play button in the debug tab again!

//=================================================================
// What is 'running' code?
//=================================================================
// When we are writing code, we are in what's known as 'design time'
// Once we click that play button, we enter 'run time'

// During design time, no data is actually flowing through the application
// Once we run the code though, data begins to flow through our application

// Code is interpreted as a series of instructions, read by JavaScript
// Code starts from from top and reads line by line to the bottom
// Tip: Click to the left of the line number to insert a temporary pause point 
// Click to the left of the number 34! You'll see a red circle appear
let pause_here = "STOP!"
// Now run the program! Hit play until you get to this spot
// In the playback control menu, use the curved blue arrow that's stepping over the circle to 
//    step thru the program line by line.
// Hover over the this_can_change variable to see how its value is modified over time
var this_can_change = 2
this_can_change += 2
this_can_change *= 7
this_can_change -= 1.4

// Those pause points are also called breakpoints. We can toggle them on and off

//=================================================================
// 'Design-time' versus 'run-time'
//=================================================================
// I mentioned that there was a difference between the two
// In this example, we'll look at a random number
// You can make a random number between 0 and one by using the Math.random() function
// See if you can follow the logic!

//If you hover over the values, you'll see that VS Code has inferred that each of these 'let' values will be a number
let random_number_between_0_and_1 = Math.random()
let random_number_between_0_and_100 = random_number_between_0_and_1 * 100
let rounded_random_number_between_0_and_100 = Math.floor(random_number_between_0_and_100)

//Insert a breakpoint below and run the code until here!
rounded_random_number_between_0_and_100
// You'll notice that when you're running the code, JavaScript is able to get a concrete piece of data, in this case
//      a number, to fill in for the let. 
// Each time you run this code, you'll get a new value in each let. 
// This behavior has a technical name, its called 'runtime binding'
// Values are captured and bound to the let values for the duration of the running program. 

//=================================================================
// More practice binding variables
//=================================================================
// Lets bind some more variables
// Uncomment the line below and set a string value for my_pet_cats_name! (Remember to put it in quotes!)

// let my_pet_cats_name = 
my_pet_cats_name

// Observe how when you hover over the non-running code, it just says 'let my_pet_cats_name: string'
// But if you put a breakpoint on line 74 and run the code, you'll see that my_pet_cats_name is set to whatever string you named it
// We can say that the data has been bound to the let 
