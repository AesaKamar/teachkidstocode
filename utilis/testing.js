module.exports = {
    assertEqual: assertEqual,
    assertThat: assertThat,
}
const _ = require('lodash')

//  Welcome! 
//  I see your curiosity has brought you here

// This file just contains some utility functions to make writing these exercises a bit easier
// Nothing special

console.info("========================================================")
console.info("Any errors or successes in tests will show up under here")
console.info("v======================================================v")

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

/**
 * Tests that the value of an expression meets an assertion
 * @template T
 * @param {T} value 
 * @param {string} variableToTest_name 
 * @param {function(T): boolean} assertion 
 */
function assertThat(value, variableToTest_name, assertion, hint = ""){
    if (assertion(value)){
        console.info('✔︎ ' + variableToTest_name+" is correct")
        return true
    }
    else{
        console.error('✘ ' + variableToTest_name + " wasn't right << " + hint + " >>")
        return false
    }
}
///%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%> This is a test statement

///%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%> It makes sure your answer is correct
