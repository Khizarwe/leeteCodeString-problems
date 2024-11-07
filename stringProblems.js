// 14. find the longest prefixes
var longestCommonPrefix = function(strs) {
    if (strs.length === 0) return "";
    let prefix = strs[0];
    console.log(prefix)
  for(let i = 0; i< strs.length; i++){
    const currentString = strs[i];
    while (!currentString.startsWith(prefix)) {
        console.log(currentString,"from inside")
        prefix = prefix.slice(0, -1); // Remove the last character
        console.log(prefix)
        if (prefix === "") return ""; // If prefix is empty, return ""
    }
  }
  return prefix;
};
console.log(longestCommonPrefix(["flower","flow","flight"]))
