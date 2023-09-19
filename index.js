/**
 * The function below has no parameters. Instead, access the arguments from the command line.
 * The first argument passed after the filename should be either "plus" or "minus", which represents the kind of calculation that will be done. Every argument afterwards should be a number.
 * Depending on the operation, either add up all of the numbers or subtract all of the numbers, from left to right.
 * @returns {number} The result of either adding all numbers or subtracting all numbers, depending on the arguments added to the command line.
 */
function calculator(num1,num2) {
    let opp = process.argv[2];
    let result = 0;
    let nums = process.argv.slice(3);
    if (!opp) {
        return `No operation provided...`;
    }
    if (!nums.length) {
        return `No numbers provided...`
    }
    if (opp !== `plus` && opp !== `minus`) {
        return `Invalid operation: ${opp}`
    }
    if (opp ===`plus`) {
        for (const vers of nums ) {
           result += Number(vers) 
        }
    }
    if (opp === `minus`) {
        result = nums[0]
        for (let H = 1; H < nums.length; H++) {
           result -= Number(nums[H]) 
            
        }
    } return result
}

// Don't change anything below this line.
module.exports = calculator;
