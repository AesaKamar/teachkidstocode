const testing = require("../utils/testing")

//=================================================================
// Manipulating arrays with lodash
//=================================================================
// We're going to use a handy utility tool called lodash to manipulate arrays
// Read the documentation here https://lodash.com/docs/ !!!
// Since we use it so much, we're going to call it `_` so its easy to read and write 
const _ = require("lodash")

// Use intellisense and you'll get all the help from lodash docs
//		right here in the editor
// The underscore is the lodash object, and by using the dot syntax
//		we get access to many special lodash properties that we can 
// 		use to perform useful work

// Uncomment the line below! Then press `ctrl + space` after the `_.`
// _.



//=================================================================
// Setting up testing data
//=================================================================
// We are going to use the alphabet to showcase some useful operations
// Lodash is a general purpose data manioulation tool
// All good programming languages have similar tools to make you 
// 		into a data manipulating powerhouse
// Run the code below and explore all of the lodash functions
let the_alphabet = _.split("abcdefghijklmnopqrstuvwxyz", "")


// The first argument of each lodash function 
// 		is always the thing you want to operate on

//=================================================================
// Take
//=================================================================
let the_first_3_letters_of_the_alphabet = 
	_.take(the_alphabet, 3)

//=================================================================
// Drop
//=================================================================
let the_alphabet_minus_the_first_10_letters = 
	_.drop(the_alphabet, 10)


//=================================================================
// Nth
//=================================================================
let the_17th_letter_of_the_alphabet =
	_.nth(the_alphabet, 16)

//=================================================================
// Slice
//=================================================================
let the_middle_slice_of_the_alphabet_from_10_to_20 = 
	_.slice(the_alphabet, 10, 20)

debugger