"use strict";
const testing = require("../utilis/testing")
//=================================================================
// Lets do some practice
//=================================================================
console.info("========================================================")
console.info("Any errors or successes in tests will show up under here")
console.info("v======================================================v")

// We are going to write three sentences up here so we can use them later on
let sentence_apple = `In the wild, apples grow readily from seeds. However, like most perennial fruits, apples are ordinarily
    propagated asexually by grafting. This is because seedling apples are an example of "extreme heterozygotes", in that 
    rather than inheriting DNA from their parents to create a new apple with those characteristics, they are instead 
    significantly different from their parents.[44] Triploid cultivars have an additional reproductive barrier in that 
    3 sets of chromosomes cannot be divided evenly during meiosis, yielding unequal segregation of the chromosomes (aneuploids). 
    Even in the case when a triploid plant can produce a seed (apples are an example), it occurs infrequently, and seedlings 
    rarely survive.`

let sentence_cantaloupe = `Cantaloupe is normally eaten as a fresh fruit, as a salad, or as a dessert with ice cream or custard. 
    Melon pieces wrapped in prosciutto are a familiar antipasto. Because the surface of a cantaloupe can contain harmful bacteria—in 
    particular, Salmonella[5]—it is recommended to wash and scrub a melon thoroughly before cutting and consumption. The fruit 
    should be refrigerated after cutting it and consumed in less than three days to prevent risk of Salmonella or other bacterial 
    pathogens. A moldy cantaloupe in a Peoria, Illinois market in 1943 was found to contain the highest yielding strain of mold 
    for penicillin production, after a worldwide search.`

let sentence_avocado = `Indoors, an avocado tree is usually grown from the pit of an avocado fruit. This is often done by removing 
    the pit from a ripe, unrefrigerated avocado fruit. The pit is then stabbed with three or four toothpicks, about one-third of 
    the way up from the flat end. The pit is placed in a jar or vase containing tepid water. It should split in four to six weeks 
    and yield roots and a sprout. If there is no change by this time, the avocado pit is discarded. Once the stem has grown a few 
    inches, it is placed in a pot with soil. It should be watered every few days. Avocados have been known to grow large, so owners 
    must be ready to re-pot the plant several times.`


//=================================================================
// Find the total number of characters in each of the 3 above sentences!
//=================================================================
// You can use the .length property of a string to find how many characters long it is
// Hover over the .length property so see how it works
//      Notice how the .length property is applied on a string and gives back a number
// Hover over the this_length_value declaration to see what type it is
//      (Notice how the type of this_length_value is the same as the type of the .length property
let this_length_value = "Some string!".length
let this_has_a_length_of_5 = "abcde".length
let this_has_a_length_of_3 = `   `.length
let this_has_a_length_of_17 = `one
    two three`.length

// This line won't work. we can only get the length of strings and collections
// Comment out the line below since it has an error!
let numbers_dont_have_lengths = 1.length 

// Try using Intellisense to see how to use the .length property
// Remember, press 'ctrl + space' and select the word you want to autocomplete
//      Or you can use 'tab' as an autocomplete shortcut
"A string".le


//Now you try! Make let's to hold the lengths of each of the 3 sentences
// Insert a breakpoint and run the code in the debug tab on the left 
//      (you can insert a breakpoint by clicking to the left of the line numbers to make a red dot appear)
//      (or you can write the keyword 'debugger' somewhere)
//      (Press the green play button to launch the code)
let apple_length        = 0 //'???'
let cantaloupe_length   = 0 //'???'
let avocado_length      = 0 //'???'


///%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%> This is a test statement
testing.assertEqual(apple_length, 'apple_length', sentence_apple.length,  (act, exp) => act === exp)
testing.assertEqual(cantaloupe_length, 'cantaloupe_length', sentence_cantaloupe.length, (act, exp) => act === exp)
testing.assertEqual(avocado_length, 'avocado_length', sentence_avocado.length, (act, exp) => act === exp)
///%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%> It makes sure your answer is correct
// Its something your instructor added to help validate that you've arrived at the correct answer
// As a convention, whenever you see a bunch of %%%%%, it wraps a test block
// When you run the code, you'll get some output about whether you have the right answer or not
debugger

//=================================================================
// Do some interesting operations to compare our sentences
//=================================================================
// If you've made it this far, you have the correct values for the lengths of the 3 sentences
// Replace the question marks with some math that will yield the correct values
// You cam type the name of the let you used earlier in order to reference its value
// For example, if you typed 'apple_length', you'll have access to the same exact let value
//      that you declared earlier in the program

let the_difference_between_the_number_of_characters_in_avocados_and_apples = 0 //'???'
let the_total_number_of_characters_in_all_3_sentences = 0 //'???'
let the_average_number_of_characters_in_each_sentence = 0 //'???'

///%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%> This is a test statement
testing.assertEqual(the_difference_between_the_number_of_characters_in_avocados_and_apples, 'the_difference_between_the_number_of_characters_in_avocados_and_apples', sentence_apple.length - sentence_avocado.length, (act, exp) => Math.max(act) === Math.max(exp))
testing.assertEqual(the_total_number_of_characters_in_all_3_sentences, 'the_total_number_of_characters_in_all_3_sentences', sentence_apple.length + sentence_avocado.length + sentence_cantaloupe.length, (act, exp) => act === exp)
testing.assertEqual(the_average_number_of_characters_in_each_sentence, 'the_average_number_of_characters_in_each_sentence', (sentence_avocado.length + sentence_apple.length + sentence_cantaloupe.length) / 3.0 , (act, exp) => Math.abs(exp-act)<=3.01)
///%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%> It makes sure your answer is correct

//=================================================================
// Great, if all tests have passed, you are done~
//=================================================================
debugger
