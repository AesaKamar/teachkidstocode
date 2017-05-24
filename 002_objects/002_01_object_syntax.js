const testing = require("../utils/testing")
const _ = require("lodash")

//=================================================================
// What is the simplest object
//=================================================================
// All you need are curly braces.
let simplest_object_ever = {}

//=================================================================
// Making properties
//=================================================================
// Hover over this apple object to get some information about it!
let apple = {
    // The property called 'color' is a string
    //      We've got a special plugin which highlights colors, 
    //      they're written with a `#` in front of them
    color: '#b22222' ,
    // The property called 'number_of_seeds' is a number
    number_I_can_eat_at_once : 3,
    // The property called 'taste_profile' is another object~
    //      We can make a property into any other data type.
    //      (Putting objects into other objects is called `nesting`)
    taste_profile : {
        sweet: true,
        sour: true,
        salty: false,
        bitter: false,
        savory: false,
        fatty: false,
    }
}

// Now you try!
// Make another food item and assign it some properties below!
// Try giving it the following properties:
//      - `color`
//      - `number_I_can_eat_at_once`
//      - `taste_profile`
let my_food_item = {

}

///%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%> This is a test statement
testing.assertThat(my_food_item, 'my_food_item.color', (val) => _.has(val, 'color'), "Your object doesn't have a `color` property")
testing.assertThat(my_food_item, 'my_food_item.number_I_can_eat_at_once', (val) => _.has(val, 'number_I_can_eat_at_once'), "Your object doesn't have a `number_I_can_eat_at_once` property")
testing.assertThat(my_food_item, 'my_food_item.taste_profile', (val) => _.has(val, 'taste_profile'), "Your object doesn't have a `taste_profile` property")
///%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%> It makes sure your answer is correct


//=================================================================
// Accessing properties of objects
//=================================================================
let an_address_object = {
    state: "NJ",
    city: "Englewood",
    street: "31 Engle St.",
    zip: "07631"
}

// You can access an object's properties using the `.` syntax
// Run the program until here and examine the line below
an_address_object.city
debugger

// Uncomment the line below and play around with the `.` syntax!
// vvvvvvvvvvvvvvvvvvvv
// an_address_object.
// ^^^^^^^^^^^^^^^^^^^^
// See what intellisense suggests. 
// And run the program to see what runtime data gets bound
