const testing = require("../utils/testing")
const _ = require("lodash")

//=================================================================
// Setting up some practice data
//=================================================================
// You'll be looking into nutritional values of different fruits 

var fruit_nutrition_data = {
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