
var x
let a_thing_can_be = Boolean 
    x = true
    x = false

let a_thing_can_be = Number 
    x = 10
    x = 3.276
    x = -12

let a_thing_can_be = String
    x = "Something in double quotes"
    x = 'or single quotes'
    x = '!#^$%#!.'
    x = "82"

let a_thing_can_be = Array
    x = ["A","Collection", "of", "Multiple", "Things"]
    x = [ ]
    x = [123, false, "HELLO!"]

let a_thing_can_be = Object
    x = { key: "value" }
    x = { 
            key1: "value1", 
            key2: 123801,
            something_else: {another: "object"}
        }
    x = { 
            a_function: (x) => x+1,
            another_key: ["Some", "Value"]
        }

let a_thing_can_be = Function
    x =  input  => input + ":) Hello"
    x = (input) => input + ":) Hello"
    x = () => 5
    x = (in1, in2) => in1 * in2

