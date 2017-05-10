//=================================================================
// Getting comfortable with VS Code
//=================================================================

// Welcome to the code editor
// <- These double backslashes indicate that this line is a "comment"
// Comments aren't part of the code
// They should be a neutral gray color
/ These lines are counted as code because they don't have two backslashes'. 
/ Try putting the second backslash to comment this line out
/ VS Code is trying to interpret these lines, but it can't ' understand english, so we have a bunch of errors


//=================================================================
// Navigating files
//=================================================================
// if you look to your left, you'll see a list of your files and folders.
// VS Code can be opened on a particular folder, or on a particular file
// Save your work with 'Ctrl + s'
// And feel free to browse around

// The second tab with the magnifying glass icon allows you to search for text found anywhere in the open folder
// The third tab with the funny Y shaped symbol tracks any saved changes you've made. Don't worry, we'll explain this later!
// The fourth tab with the crossed out bug is the debugging tab. Don't worry, we'll explain this later!
// The fifth tab with the square is the extensions tab. It allows you to customize VS code with new functionality downloaded from online, similar an app store. 


//=================================================================
// Practicing the 'let' statement
//=================================================================
// VS Code is aware of the code we're writing. It will color keywords and data accordingly
// We can assign some data with a name by using the 'let' keyword
let a_number = 5
let another_number = 10.3
let you_can_use_whatever_namesYouWant = 12087108
// Comment out the line below, vs
let names-can't contain'invalid /characters or spaces

// Be careful! once you've named something using let, you can't rename it to 
// Uncomment the line below to see what happens! (Tip: you can press 'ctrl + /' to toggle between commenting something in and out)
// let a_number = 10

//==========================
// Now you try making some declarations with the let keyword

// Make a number

// Try adding your let value to another, and capturing it in this value y
// Uncomment the line below!
// let y = 

//==========================
// Make a string by enclosing some text in "double quotes" or 'single quotes'


//==========================
//Make a boolean by typing in true or false




//=================================================================
// Intellisense and autocompletion
//=================================================================
// If you've noticed, VS Code tries to be helpful by spellchecking your code for you
// It also tries to autocomplete things for you based on what will make a valid JavaScript statement
// This behavior is called 'Intellisense' by VS Code, and it holds our hand through the scary process of writing code

// It should also tell you information about what type of data your data is when you hover over it
let hover_over_me_1 = "I should be a string"
let hover_over_me_2 = false 

// It can also be smart and infer the type after applying an expression to your data
// For example. we can add some numbers together, and Intellisense will infer that we should still have a number
let hover_over_me_3 = (5 + 23 + 12 * 4)

let i_didnt_know_we_can_add_strings_together = "I guess " + "we can"

// This will be very helptul later on



