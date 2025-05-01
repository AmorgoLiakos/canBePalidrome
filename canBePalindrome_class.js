class CanBePalindrome {
    str
    counterOfOdds = 0

    constructor (_str) {
        this.str = _str
    }

    canBePalindrome () {

        if (this.str === ""){
            return false
        }
    
        if (this.str.length === 1) {
            return true
        }
    
        return this.canBePalindromeRecursion(this.str)

    }

    canBePalindromeRecursion (s) {

        if (s === "") {
            return true
        }
    
        if (s.length === 1) {
            if(this.counterOfOdds === 0){
                return true
            }
            return false
        }
    
        let counter = 0
    
        for (let i=1; i < s.length; i++) {
            if( s[i] === s[0] ){
                counter++
            }
        }
        
        s = s.replaceAll(s[0], "")
    
        if(counter % 2 === 0){
            this.counterOfOdds++
            if (this.counterOfOdds > 1) {
                return false
            }
        }

        return this.canBePalindromeRecursion(s)
    }
}

const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question("Enter a string to check if it can be a palindrome: ", function(userInput) {
    const checker = new CanBePalindrome(userInput);
    const result = checker.canBePalindrome();
    console.log(`Can "${userInput}" be a palindrome? → ${result}`);
    rl.close();
});