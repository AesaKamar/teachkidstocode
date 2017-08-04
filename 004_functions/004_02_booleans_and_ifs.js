// @flow
const _ = require('lodash')
const R = require('ramda')

//=================================================================
// Booleans
//=================================================================
// Booleans can be just 2 things, true or false
// Hower over the values and you'll see their type signature
let T = true
let F = false

// If you're wondering why they're called that...
// They're named after this guy: https://en.wikipedia.org/wiki/George_Boole


//=================================================================
// Doing things to data with functions
//=================================================================
let youAreHappy = false
let youKnowIt = false
let youReallyWantToShowIt = false

let clapYourHands = (x: any) => console.log(x)

if (youAreHappy) {
}
if (youAreHappy && youKnowIt) {
  clapYourHands('👏')
}
if (youAreHappy && youKnowIt && youReallyWantToShowIt) {
  clapYourHands('👏👏')
}