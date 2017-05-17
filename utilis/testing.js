module.exports = {
    assertEqual: assertEqual
}
const _ = require('lodash')

//  Welcome! 
//  I see your curiosity has brought you here

// This file just contains some utility functions to make writing these exercises a bit easier
// Nothing special

/**
 * Tests that the value of an expression is equal to an expectation
 * @template T
 * @param {T} actual 
 * @param {string} variableToTest_name 
 * @param {T} expectation
 * @param {function(T, T): boolean} assertion 
 */
function assertEqual(actual, variableToTest_name, expectation, assertion){
    if (assertion(actual, expectation)){
        console.info('✔︎ ' + variableToTest_name+" is correct")
        return true
    }
    else{
        console.error('✘ ' + variableToTest_name + " should equal "+ expectation +" but was equal to " + actual)
        return false
    }
}