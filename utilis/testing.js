module.exports = {
    assertEqual: assertEqual
}

/**
 * 
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