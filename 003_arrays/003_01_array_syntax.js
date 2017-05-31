const testing = require("../utils/testing")
const _ = require("lodash")

//=================================================================
// An array contains things
//=================================================================
// They can contain nothing
let empty_array = [ ]

// Or only one thing
let array_with_one_thing = ["robin"]

// They can contain an *infinite* amount of things
let array_with_lots_of_stuff = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9]

// Hover over one of the variables above to see that type they are!
// We've put them down here as well 

// This one is `any[]`
empty_array
// And it indeed has a 0 things in it
empty_array.length

// This one is `string[]`
array_with_one_thing
// And it indeed has a 1 thing in it
array_with_one_thing.length

// And this one is `number[]`
array_with_lots_of_stuff
// And it indeed has a handful of things in it
array_with_lots_of_stuff.length



//=================================================================
// Making Arrays
//=================================================================
// Try filling this array with some number values!
// Remember to separate them with commas
// Hover over it after you've added some numbers and you'll notice its type changed 
//      from `any[]` to `number[]`
let a_brand_new_array = []


// Notice that like how you can space the curly braces out with objects, as shown below
// let obj = {
//     like: "this",
//     property: "value"
// }

// You can do the same with an array and make it span multiple lines
let spacey_array = [
    1,
    2, 
    3
]

//=================================================================
// Getting values out of Arrays
//=================================================================
// Arrays have the notion of sequence
// That means, there's the notion on "first, second, third, ... last"

// Here's a list of my favorite animals, ordered by how much I like them
let my_top_5_favorite_animals = ["gibbon", "cat", "elephant", "octopus", "fox"]

// What if I want to pick an individual element from an array and use it?
// You can select which number element you want by using the `[]` bracket notation
// Lets get my first favorite animal
let my_first_favorite   = my_top_5_favorite_animals[0]
let my_second_favorite  = my_top_5_favorite_animals[1]
let my_third_favorite   = my_top_5_favorite_animals[2]
let my_fourth_favorite  = my_top_5_favorite_animals[3]
let my_fifth_favorite   = my_top_5_favorite_animals[4]

// WARNING: In computer science, we start counting from 0
// Binary is `0s and 1s`, not `1s and 2s`
// Because the first element, is considered the `zeroth` element. 
// This is something we'll get used to, but it will make a lot of sense why we do this later



//=================================================================
// Doing work with arrays
//=================================================================

// Here are some of the lap times for the 2016 olympics 
//      for the 800m women's freestyle swimming
// There were 27 women who competed
// All of the values are sorted and given in seconds
let olympic_lap_times_in_seconds = [
    492.9, 
    499.4, 
    499.7, 
    501.4, 
    502.5, 
    502.6, 
    504.7, 
    505.6, 
    505.8, 
    506.4, 
    510.6, 
    510.9, 
    513.1, 
    513.4, 
    513.7, 
    513.7, 
    514.3, 
    515.3, 
    516.4, 
    516.6, 
    518.2, 
    519.8, 
    522.9, 
    525.4, 
    527.5, 
    528.9, 
    547.2
]

// Now its your turn to practice
// Find the time of the swimmer who came in first place!
//      (remember, that's the 0th element)
let first_place_time = 0.00

///%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%> This is a test statement
testing.assertEqual(first_place_time, 'first_place_time', _.first(olympic_lap_times_in_seconds),  (act, exp) => act === exp)
///%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%> It makes sure your answer is correct

// Find the difference in time between the fastest swimmer, and the slowest
//      (hint: if an array is 10 elements long, the element at [9] is the last)
//      (hint: if an array is 4 elements long, the element at [3] is the last)
//      (hint: you can get the element at [array.length - 1] to get the last)
let difference_between_fastest_and_slowest_swimmer = 0.00

///%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%> This is a test statement
testing.assertEqual(first_place_time, 'first_place_time', _.first(olympic_lap_times_in_seconds) - _.last(olympic_lap_times_in_seconds),  (act, exp) => Math.abs(act) === Math.abs(exp))
///%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%> It makes sure your answer is correct



//=================================================================
// Working with more complex data
//=================================================================
// The previous example was kind of cool, but it just doesn't have much context
// Its difficult to get a lot of insight when all we're looking at is a list of numbers

// Lets use objects to label our data and give it some more context
// Below, we have the swimmer's `name`, their `country`, and their lap `time`
let olympic_swimmer_rankings = [
    {name: `Katie Ledecky`	             ,country: `United States`	    ,time: 492.9},
    {name: `Boglárka Kapás`	             ,country: `Hungary`	        ,time: 499.4},
    {name: `Jazmin Carlin`	             ,country: `Great Britain`	    ,time: 499.7},
    {name: `Leah Smith`	                 ,country: `United States`	    ,time: 501.4},
    {name: `Lotte Friis`	             ,country: `Denmark`	        ,time: 502.5},
    {name: `Jessica Ashwood`	         ,country: `Australia`     	    ,time: 502.6},
    {name: `Sarah Köhler`	             ,country: `Germany`	        ,time: 504.7},
    {name: `Mireia Belmonte`	         ,country: `Spain`	            ,time: 505.6},
    {name: `Lauren Boyle`	             ,country: `New Zealand`	    ,time: 505.8},
    {name: `Brittany MacLean`	         ,country: `Canada`	            ,time: 506.4},
    {name: `Hou Yawen`	                 ,country: `China`	            ,time: 510.6},
    {name: `Andreina Pinto`	             ,country: `Venezuela`	        ,time: 510.9},
    {name: `Tjaša Oder`	                 ,country: `Slovenia`	        ,time: 513.1},
    {name: `Éva Risztov`	             ,country: `Hungary`	        ,time: 513.4},
    {name: `Camilla Hattersley`          ,country: `Great Britain`	    ,time: 513.7},
    {name: `Emma Robinson`	             ,country: `New Zealand`	    ,time: 513.7},
    {name: `Kristel Köbrich`	         ,country: `Chile`	            ,time: 514.3},
    {name: `Zhang Yuhan`	             ,country: `China`	            ,time: 515.3},
    {name: `María Vilas Vidal`	         ,country: `Spain`	            ,time: 516.4},
    {name: `Tamsin Cook`	             ,country: `Australia`	        ,time: 516.6},
    {name: `Julia Hassler`	             ,country: `Liechtenstein`	    ,time: 518.2},
    {name: `Valerie Gruest`	             ,country: `Guatemala`	        ,time: 519.8},
    {name: `Joanna Evans`	             ,country: `Bahamas`	        ,time: 522.9},
    {name: `Tamila Holub`	             ,country: `Portugal`	        ,time: 525.4},
    {name: `Leonie Beck`	             ,country: `Germany`	        ,time: 527.5},
    {name: `Arina Openysheva`	         ,country: `Russia`	            ,time: 528.9},
    {name: `Talita Te Flan`	             ,country: `Côte d'Ivoire`	    ,time: 547.2},
]

// We can get the 5th swimmer like this
olympic_swimmer_rankings[4]
// Or specify that we want their country
olympic_swimmer_rankings[4].country
// Or name
olympic_swimmer_rankings[4].country
// Or lap time
olympic_swimmer_rankings[4].country


// Time for some practice
// Find the name of the woman who came in second place
let person_who_won_silvers_name = ''

///%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%> This is a test statement
testing.assertEqual(person_who_won_silvers_name, 'person_who_won_silvers_name', _.nth(olympic_swimmer_rankings, 1).name,  (act, exp) => act === exp)
///%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%> It makes sure your answer is correct
