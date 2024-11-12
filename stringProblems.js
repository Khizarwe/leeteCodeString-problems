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

//205. Isomorphic Strings
//solution 1
var isIsomorphic = function (s, t) {
    const hash_One = {}
    const hash_Two = {}
    for (let i = 0; i < s.length; i++) {
        if (!(s[i] in hash_One)) {
            hash_One[s[i]] = i
        }
        if (!(t[i] in hash_Two)) {
            hash_Two[t[i]] = i
        }
        if (hash_One[s[i]] !== hash_Two[t[i]]) {
            return false
        }
    }
    return true
};
//  solution 2
var isIsomorphic = function (s, t) {
    const hash_One = {};
    const hash_Two = {};
    for (let i = 0; i < s.length; i++) {
        if (hash_One[s[i]] !== undefined) {
            if (hash_One[s[i]] !== t[i]) {
                return false;
            }
        } else {
            hash_One[s[i]] = t[i];
        }
        if (hash_Two[t[i]] !== undefined) {
            if (hash_Two[t[i]] !== s[i]) {
                return false;
            }
        } else {
            hash_Two[t[i]] = s[i];
        }
    }
    return true;
};


//242 valid anagram
var isAnagram = function (s, t) {
    if (s.length !== t.length) return false
    const hash = {}
    for (let i = 0; i < s.length; i++) {
        hash[s[i]] = (hash[s[i]] || 0) + 1;
    }
    for (let i = 0; i < t.length; i++) {
        if (!hash[t[i]]) {
            return false
        }
        hash[t[i]] -= 1
    }
    for (let key in hash) {
        if (hash[key] !== 0) {
            return false
        }
    }
    return hash
};

// 243 shortest distance 
var shortestDistance = function (words, word1, word2) {
    let index1 = -1
    let index2 = -1
    let minDist = Infinity
    for (let i = 0; i < words.length; i++) {
        if (words[i] === word1) {
            index1 = i
            if (index2 !== -1) {
                minDist = Math.min(minDist, Math.abs(index1 - index2));
            }
        }
        if (words[i] === word2) {
            index2 = i
            if (index1 !== -1) {
                minDist = Math.min(minDist, Math.abs(index1 - index2));
            }
        }

    }
    return minDist
};

// strobogrammatic number
var isStrobogrammatic = function (str) {
    const map = {
        '0': '0',
        '1': '1',
        '6': '9',
        '8': '8',
        '9': '6'
    };
    let left = 0
    let right = str.length - 1
    while( left <= right){
        if(map[str[left]] !== str[right]){
            return false
        }
        left++
        right--
    }
    return true
}
console.log(isStrobogrammatic("962"))