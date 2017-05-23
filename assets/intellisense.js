"use strict"

let x = true

// ley SOMETHING = x || false


// let SOMETHING = x || false






let _ = require('lodash')
_.add(1, 5)



//This way is hard to know what's going on 
let anml = _("sheep,frog,coyote,bear,lion,robin,antelope,dolphin,echidna").split(',').sortBy()
    .map(str => str.charAt(0).toUpperCase() + str.slice(1).toLowerCase())
    .value()

//Broken into smaller well named steps lets us follow the process
/** @param {string} str */
let CapitalizeFunction  = str => str.charAt(0).toUpperCase() + str.slice(1).toLowerCase()
let unordered_animal_names                      = "sheep,frog,coyote,bear,lion,robin,antelope,dolphin,echidna"
let list_of_unordered_animal_names              = _.split(unordered_animal_names, ',')
let list_of_sorted_animal_names                 = _.sortBy(list_of_unordered_animal_names)
let list_of_sorted_and_capitalized_animal_names = _.map(list_of_sorted_animal_names, CapitalizeFunction)










list_of_sorted_and_capitalized_animal_names
debugger