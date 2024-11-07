// 14. find the longest prefixes
var longestCommonPrefix = function (strs) {
    if (strs.length === 0) return "";
    let prefix = strs[0];
    for (let i = 0; i < strs.length; i++) {
        const currentString = strs[i];
        while (!currentString.startsWith(prefix)) {
            prefix = prefix.slice(0, -1); // Remove the last character
            if (prefix === "") return ""; // If prefix is empty, return ""
        }
    }
    return prefix;
};



// 20 valid parantheses
var isValid = function (s) {
    if (s.length === 0) return true;
    let stack = []
    const map = {
        '(': ')',
        '{': '}',
        '[': ']'
    };
    for (let char of s) {
        if (map[char]) {
            stack.push(map[char])
        }
        else {
            if (stack.pop() !== char) {
                return false;
            }
        }
    }
    return stack.length === 0;
};


// 28. Find the Index of the First Occurrence in a String
var strStr = function (haystack, needle) {
    if (needle === "") return 0;
    for (let i = 0; i < haystack.length - needle.length; i++) {
        if (haystack.substring(i, i + needle.length) === needle) {
            return i;
        }
    }
    return -1

};



//58. length of last word
var lengthOfLastWord = function (s) {
    return s.trim().split(" ").pop().length;
};

// 67 add binary 
var addBinary = function (a, b) {
    return (BigInt(`0b${a}`) + BigInt(`0b${b}`)).toString(2)
}

//168. Excel Sheet Column Title
var convertToTitle = function (columnNumber) {
    const helper = function (number, result, alphabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ") {
        let charIndex = (number - 1) % alphabet.length;
        let quotient = Math.floor((number - 1) / alphabet.length)
        result = alphabet.charAt(charIndex) + result;
        if (quotient >= 1) {
            return helper(quotient, result);
        }
        else {
            return result
        }
    }
    return helper(columnNumber, "");

};

//171 Excel Sheet Column Number
var titleToNumber = function (columnTitle) {
    let result = 0 
    for (let i = 0; i < columnTitle.length; i++) {
        charValue = columnTitle.charCodeAt(i) - 'A'.charCodeAt(0) + 1;
        result = result * 26 + charValue;
    }
    return result
}

