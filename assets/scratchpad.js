const _ = require('lodash')
let an_object = {
    property : "value",
    some_value : 102 + 4,
    another_value : "hello".toUpperCase()
}

an_object.some_value //== 106
an_object.another_value //== HELLO
an_object["property"] //= "value"


//=================================================================
// Examples for lesson 3
//=================================================================
let an_array = [2, 4, 8, 16, 32]

let an_array_of_strings = ["two", "four", "eight", "sixteen"]

let not_the_best_idea = [2, "four", 8, "sixteen"]
