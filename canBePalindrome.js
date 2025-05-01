function canBePalindrome (str) {

    if (str === ""){
        return false
    }

    if (str.length === 1) {
        return true
    }

    return canBePalindromeRecursion(str)
}

let counterOfOdds = 0

function canBePalindromeRecursion (str) {

    if (str === "") {
        return true
    }

    if (str.length === 1) {
        if(counterOfOdds === 0){
            return true
        }
        return false
    }

    let counter = 0

    for (let i=1; i < str.length; i++) {
        if( str[i] === str[0] ){
            counter++
        }
    }
    
    str = str.replaceAll(str[0], "")

    if(counter % 2 === 0){
        counterOfOdds++
        if (counterOfOdds > 1) {
            return false
        }
    }

    return canBePalindromeRecursion(str)
}

const stringToBeTested = "abbdfa"
console.log(canBePalindrome(stringToBeTested))