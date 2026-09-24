
// This is required for the test to function properly  
module.exports = { calculateTax, convertToUpperCase, findMaximum, isPalindrome, calculateDiscountedPrice };

function calculateTax(amount){
    const taxValue = amount*(10/100);
    return taxValue;
}
function convertToUpperCase(text)
{
    return text.toUpperCase()
}

function findMaximum(num1, num2){
    if (num1>num2) {
        return num1
    }
    else(num2>num1){
        return num2
    }
}
function calculateDiscountedPrice(originalPrice,discountPercentage){
    const discount = originalPrice*(discountPercentage/100)
    return originalPrice-discount
}
function isPalindrome(word){
    // 1. Clean the string: lowercase and remove non-alphanumeric characters
    const cleaned = word.toLowerCase().replace(/[^a-z0-9]/g, '');

    // 2. Reverse and compare
    const reversed = cleaned.split('').reverse().join('');

    return cleaned === reversed;
}
