const testing = require("../utils/testing")
const _ = require("lodash")

//=================================================================
// Setting up some practice data
//=================================================================
// You'll be looking into nutritional values of different fruits 
// And you'll be manipulating the object below to find out some interesting information

let fruit_nutrition_data = {
    apple: {
        weight_in_grams: 182,
        calories: 95,
        fat: {
            saturated_fat_in_grams: 0.1,
            polyunsaturated_fat_in_grams: 0.1,
            monounsaturated_fat_in_grams: 0
        },
        cholesterol_in_milligrams: 0,
        sodium_in_milligrams: 2,
        potassium_in_milligrams: 195,
        carbohydrates: {
            dietary_fiber_in_grams: 4.2,
            sugar_in_grams: 19
        },
        protein_in_grams: 0.5
    },
    orange: {
        weight_in_grams: 96,
        calories: 45,
        fat: {
            saturated_fat_in_grams: 0,
            polyunsaturated_fat_in_grams: 0,
            monounsaturated_fat_in_grams: 0
        },
        cholesterol_in_milligrams: 0,
        sodium_in_milligrams: 0,
        potassium_in_milligrams: 174,
        carbohydrates: {
            dietary_fiber_in_grams: 2.3,
            sugar_in_grams: 9
        },
        protein_in_grams: 0.5
    },
    watermelon: {
        weight_in_grams: 4518,
        calories: 1371,
        fat: {
            saturated_fat_in_grams: 0.7,
            polyunsaturated_fat_in_grams: 2.3,
            monounsaturated_fat_in_grams: 1.7
        },
        cholesterol_in_milligrams: 0,
        sodium_in_milligrams: 45,
        potassium_in_milligrams: 5060,
        carbohydrates: {
            dietary_fiber_in_grams: 18,
            sugar_in_grams: 280
        },
        protein_in_grams: 28
    },
    banana: {
        weight_in_grams: 118,
        calories: 105,
        fat: {
            saturated_fat_in_grams: 0.132,
            polyunsaturated_fat_in_grams: 0.086,
            monounsaturated_fat_in_grams: 0.038
        },
        cholesterol_in_milligrams: 0,
        sodium_in_milligrams: 1,
        potassium_in_milligrams: 422,
        carbohydrates: {
            dietary_fiber_in_grams: 3.1,
            sugar_in_grams: 14.43
        },
        protein_in_grams: 1.29
    },
    kiwi: {
        weight_in_grams: 69,
        calories: 95,
        fat: {
            saturated_fat_in_grams: 0.1,
            polyunsaturated_fat_in_grams: 0.1,
            monounsaturated_fat_in_grams: 0
        },
        cholesterol_in_milligrams: 0,
        sodium_in_milligrams: 2,
        potassium_in_milligrams: 195,
        carbohydrates: {
            dietary_fiber_in_grams: 2.1,
            sugar_in_grams: 6
        },
        protein_in_grams: 0.8
    },
    guava: {
        weight_in_grams: 55,
        calories: 38,
        fat: {
            saturated_fat_in_grams: 0.1,
            polyunsaturated_fat_in_grams: 0.2,
            monounsaturated_fat_in_grams: 0
        },
        cholesterol_in_milligrams: 0,
        sodium_in_milligrams: 1,
        potassium_in_milligrams: 229,
        carbohydrates: {
            dietary_fiber_in_grams: 3,
            sugar_in_grams: 4.9
        },
        protein_in_grams: 1.4
    }
}


//=================================================================
// Manipulating an object
//=================================================================
// Jared wants to bulk up, but he's vegetarian
// Find the protein per gram of each fruit

// The protein per gram of apples is calculated below
// Try calculating the protein per gram of the other fruits!
let fruit_protein_per_gram = {
    apple: {
        // Recall that we have the values for the `protein_in_grams` and `weight_in_grams` for
        //      each fruit. We can divide the protein in grams by the weight in grams to get protein per gram
        protein_per_gram: (fruit_nutrition_data.apple.protein_in_grams / fruit_nutrition_data.apple.weight_in_grams)
    },
    orange: {
        // Assign a property called `protein_per_gram` and set its value to be 
        //      the fruit's protein in grams divided by its total weight in grams
    },
    watermelon: {

    },
    banana: {

    },
    kiwi: {

    },
    guava: {

    }
}

///%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%> This is a test statement
testing.assertThat(fruit_protein_per_gram.apple, 'fruit_protein_per_gram.apple', (val) => _.has(val, 'protein_per_gram'), "In the `fruit_protein_per_gram` object, `apple` doesn't have the property `protein_per_gram`")
testing.assertEqual(fruit_protein_per_gram.apple.protein_per_gram, 'fruit_protein_per_gram.apple.protein_per_gram', (fruit_nutrition_data.apple.protein_in_grams / fruit_nutrition_data.apple.weight_in_grams),  (act, exp) => act === exp)
testing.assertThat(fruit_protein_per_gram.orange, 'fruit_protein_per_gram.orange', (val) => _.has(val, 'protein_per_gram'), "In the `fruit_protein_per_gram` object, `orange` doesn't have the property `protein_per_gram`")
testing.assertEqual(fruit_protein_per_gram.orange.protein_per_gram, 'fruit_protein_per_gram.orange.protein_per_gram', (fruit_nutrition_data.orange.protein_in_grams / fruit_nutrition_data.orange.weight_in_grams),  (act, exp) => act === exp)
testing.assertThat(fruit_protein_per_gram.watermelon, 'fruit_protein_per_gram.watermelon', (val) => _.has(val, 'protein_per_gram'), "In the `fruit_protein_per_gram` object, `watermelon` doesn't have the property `protein_per_gram`")
testing.assertEqual(fruit_protein_per_gram.watermelon.protein_per_gram, 'fruit_protein_per_gram.watermelon.protein_per_gram', (fruit_nutrition_data.watermelon.protein_in_grams / fruit_nutrition_data.watermelon.weight_in_grams),  (act, exp) => act === exp)
testing.assertThat(fruit_protein_per_gram.banana, 'fruit_protein_per_gram.banana', (val) => _.has(val, 'protein_per_gram'), "In the `fruit_protein_per_gram` object, `banana` doesn't have the property `protein_per_gram`")
testing.assertEqual(fruit_protein_per_gram.banana.protein_per_gram, 'fruit_protein_per_gram.banana.protein_per_gram', (fruit_nutrition_data.banana.protein_in_grams / fruit_nutrition_data.banana.weight_in_grams),  (act, exp) => act === exp)
testing.assertThat(fruit_protein_per_gram.kiwi, 'fruit_protein_per_gram.kiwi', (val) => _.has(val, 'protein_per_gram'), "In the `fruit_protein_per_gram` object, `kiwi` doesn't have the property `protein_per_gram`")
testing.assertEqual(fruit_protein_per_gram.kiwi.protein_per_gram, 'fruit_protein_per_gram.kiwi.protein_per_gram', (fruit_nutrition_data.kiwi.protein_in_grams / fruit_nutrition_data.kiwi.weight_in_grams),  (act, exp) => act === exp)
testing.assertThat(fruit_protein_per_gram.guava, 'fruit_protein_per_gram.guava', (val) => _.has(val, 'protein_per_gram'), "In the `fruit_protein_per_gram` object, `guava` doesn't have the property `protein_per_gram`")
testing.assertEqual(fruit_protein_per_gram.guava.protein_per_gram, 'fruit_protein_per_gram.guava.protein_per_gram', (fruit_nutrition_data.guava.protein_in_grams / fruit_nutrition_data.guava.weight_in_grams),  (act, exp) => act === exp)
///%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%> It makes sure your answer is correct



//=================================================================
// Manipulating an object
//=================================================================
// Lauren wants to start eating a high-fat diet 
// She wants to eat approximately 75 grams of fat per day
// We'll assume all avocados weigh 100 grams 
let her_total_fat_allowance_in_grams = 75
let avocado_100_grams = {
    water: 73.23,
    protein: 2,
    fats: 14.66,
    carbohydrates: 8.53,
    fibers: 6.7,
    sugars: 0.66
}

// How many avocados should she eat?
// Write your prediction down below!
let number_of_avodados_she_can_eat = 0 //Change the `0` to your own calculation or prediction

///%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%> This is a test statement
testing.assertEqual(number_of_avodados_she_can_eat, 'number_of_avodados_she_can_eat', (5),  (act, exp) => Math.abs(act - exp) < 0.25)
///%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%> It makes sure your answer is correct

// Lauren also wants to make sure she's getting enough water. 
// She needs 500 grams of water per day
// Assuming all she eats is that many avocados per day...
// Calculate how much more water she would need to drink to meet her goal!
let how_much_more_water_she_needs_to_drink_in_grams = 0 //Change the `0` to your own calculation or prediction

///%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%> This is a test statement
testing.assertEqual(how_much_more_water_she_needs_to_drink_in_grams, 'how_much_more_water_she_needs_to_drink_in_grams', 500 - (5 * avocado_100_grams.water),  (act, exp) => Math.abs(act - exp) < 30)
///%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%> It makes sure your answer is correct