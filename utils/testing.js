module.exports = {
    assertEqual: assertEqual,
    assertThat: assertThat
}
const _ = require('lodash')
const fs = require('fs')

const METRICS_LOGGING = true
//  Welcome! 
//  I see your curiosity has brought you here

// This file just contains some utility functions to make writing these exercises a bit easier
// Nothing special

console.info("========================================================")
console.info("Any errors or successes in tests will show up under here")
console.info("v======================================================v")

/**
 * Tests that the value of an expression is equal to an expectation
 * Optionally logs to a file. Defaults to utils/courseMetrics.json.log"
 * @template T
 * @param {T} actual 
 * @param {string} variableToTestName 
 * @param {T} expectation
 * @param {function(T, T): boolean} assertion 
 */
function assertEqual(actual, variableToTestName, expectation, assertion, fileToLogTo = __dirname + "/courseMetrics.json.log" ){
    if (assertion(actual, expectation)){
        let message = '✔︎ ' + variableToTestName+" is correct"
        console.info(message)
        let trace = getLoggingContext(true, message)
        if (METRICS_LOGGING) fs.appendFileSync(fileToLogTo, JSON.stringify(trace)+ '\n')
        return trace
    }
    else{
        let message = '✘ ' + variableToTestName + " should equal "+ expectation +" but was equal to " + actual
        console.error(message)
        let trace = getLoggingContext(false, message)
        if (METRICS_LOGGING) fs.appendFileSync(fileToLogTo, JSON.stringify(trace)+ '\n')
        return trace
    }
}

/**
 * Tests that the value of an expression meets an assertion
 * Optionally logs to a file. Defaults to utils/courseMetrics.json.log"
 * @template T
 * @param {T} value 
 * @param {string} variableToTestName 
 * @param {function(T): boolean} assertion 
 */
function assertThat(value, variableToTestName, assertion, hint = "", fileToLogTo = __dirname + "/courseMetrics.json.log"){
    if (assertion(value)){
        let message = '✔︎ ' + variableToTestName+" is correct"
        console.info(message)
        let trace = getLoggingContext(true, message)
        if (METRICS_LOGGING) fs.appendFileSync(fileToLogTo, JSON.stringify(trace + '\n'))
        return trace
    }
    else{
        let message = '✘ ' + variableToTestName + " wasn't right << " + hint + " >>"
        console.error(message)
        let trace = getLoggingContext(false, message)
        if (METRICS_LOGGING) fs.appendFileSync(fileToLogTo, JSON.stringify(trace)+ '\n')
        return trace
    }
}
///%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%> This is a test statement

///%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%> It makes sure your answer is correct

/**
 * Gets information about the current scope 
 * @param {boolean} status
 */
function getLoggingContext(status, message = ""){
    let setupfile = fs.readFileSync(__dirname + "/../SETUP.txt")
        .toString()
        .split('\n')
    return {
        user_name: setupfile[2], 
        user_email: setupfile[6],
        file_name: __stack[2]
            .getFileName()
            .split(/[\\/]/)
            .pop(),
        line_number: __stack[2].getLineNumber(),
        status: status,
        timestamp: + new Date(),
        message: message
    }
}

// Defines a global stack object to help witt getting debug info
Object.defineProperty(global, '__stack', {
  get: function(){
    var orig = Error.prepareStackTrace;
    Error.prepareStackTrace = function(_, stack){ return stack; };
    var err = new Error;
    Error.captureStackTrace(err, arguments.callee);
    var stack = err.stack;
    Error.prepareStackTrace = orig;
    return stack;
  }
});
