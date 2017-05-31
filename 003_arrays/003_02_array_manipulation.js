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
// Below is some information about the take function, and examples of how to use it
/*
	_.take(array, [n=1])
	Creates a slice of array with n elements taken from the beginning.

	Examples: 
	_.take([1, 2, 3]);
	// => [1]
	
	_.take([1, 2, 3], 2);
	// => [1, 2]
	
	_.take([1, 2, 3], 5);
	// => [1, 2, 3]
	
	_.take([1, 2, 3], 0);
	// => []
*/
let the_first_3_letters_of_the_alphabet = 
	_.take(the_alphabet, 3)

//=================================================================
// Drop
//=================================================================
// Below is some information about the drop function, and examples of how to use it
/*
	_.drop(array, [n=1])
	Creates a slice of array with n elements dropped from the beginning.

	Examples:
	_.drop([1, 2, 3]);
	// => [2, 3]
	
	_.drop([1, 2, 3], 2);
	// => [3]
	
	_.drop([1, 2, 3], 5);
	// => []
	
	_.drop([1, 2, 3], 0);
	// => [1, 2, 3]
*/
let the_alphabet_minus_the_first_10_letters = 
	_.drop(the_alphabet, 10)


//=================================================================
// Nth
//=================================================================
// Below is some information about the nth function, and examples of how to use it
/*
	_.nth(array, [n=0])
	Gets the element at index n of array. If n is negative, the nth element from the end is returned.

	Examples:
	var array = ['a', 'b', 'c', 'd'];
	
	_.nth(array, 1);
	// => 'b'
	
	_.nth(array, -2);
	// => 'c';
*/
let the_17th_letter_of_the_alphabet =
	_.nth(the_alphabet, 16)

//=================================================================
// Slice
//=================================================================
// Below is some information about the slice function, and examples of how to use it
/*
	_.slice(array, [start=0], [end=array.length])
	source npm package

	Creates a slice of array from start up to, but not including, end.

	//Examples:
	var array = ['Banana', 'Orange', 'Lemon', 'Apple', 'Mango'];

	_.slice(array, 1, 3)
	// => ['Orange','Lemon']

	_.slice(array, 0, 5)
	// => ['Banana', 'Orange', 'Lemon', 'Apple', 'Mango']
*/
let the_middle_slice_of_the_alphabet_from_10_to_20 = 
	_.slice(the_alphabet, 10, 20)

debugger