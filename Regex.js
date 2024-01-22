// Training File
// Reviewing Notes and writing them out.

// Regular Expressions
// Regular expressions are patterns used to match character combinations in strings.
// In JavaScript, regular expressions are also objects. These patterns are used with the exec and test methods of RegExp,
// and with the match, replace, search, and split methods of String. This chapter describes JavaScript regular expressions.

// Creating a Regular Expression
// There are two ways to create a regular expression:
// Regular Expression Literal
let re = /abc/;
// Regular Expression Constructor
let reg = new RegExp("abc");

// To test the example above, you can use the following code:
re = /abc/;
var str = "abcd";
var result = re.test(str);
console.log(result); // false

// The test method returns true if the pattern is found in the string, and false if it is not.

// Regex Flags
// Regular expressions have four optional flags that allow for global and case insensitive searching.
// g - Global search
// i - Case-insensitive search
// m - Multi-line search
// u - Unicode; treat a pattern as a sequence of unicode code points
// y - Perform a "sticky" search that matches starting at the current position in the target string

// So if we wanted to search for the pattern in the string, we would use the following code:
// The case insensitive flag is used to perform case-insensitive search.
re = /abc/i; // case insensitive
var str = "aBcD";
var result = re.test(str);
console.log(result); // true

// The global search flag is used to search for all instances of the pattern in the string.
re = /abc/g; // global search
var str = "abcabc$$$abcabc";
var result = str.match(re);
console.log(result); // [ 'abc', 'abc', 'abc', 'abc' ]

// Character Sets
// Character sets are used to match any one of a group of characters at a point in the input.
// The character set is created by placing the characters it matches inside square brackets.
re = /[cbr]at/; // matches cat, bat, rat
var str = "cat";
var result = re.test(str);
console.log(result); // true

// Negated Character Sets
// Negated character sets are used to match any one character that is not in a group of characters at a point in the input.
// The negated character set is created by placing a caret character (^) after the opening square bracket.
re = /[^cbr]at/; // matches hat, mat, pat bur not cat, bat, rat
var str = "hat";
var result = re.test(str);
console.log(result); // true

// Character Ranges
// Character ranges are used to match any one of a range of characters at a point in the input.
// The character range is created by placing the starting and ending characters of the range separated by a hyphen inside square brackets.
re = /[a-z]at/; // matches cat, bat, rat
var str = "cat";
var result = re.test(str);
console.log(result); // true

// Character Ranges for Numbers
// Character ranges can also be used with numbers.
re = /[1-5]/; // matches any digit from 1 to 5
var str = "6";
var result = re.test(str);
console.log(result); // false

// Repeating Characters
// Repeating characters are used to match a character a certain number of times.
// The repeating character is created by placing the character to be repeated followed by a plus sign (+) after the character.
re = /a+/; // matches one or more occurrences of the character a
var str = "aaaa";
var result = re.test(str);
console.log(result); // true

// We can also check for repeating characters with a range.
re = /a{3,5}/; // matches 3 to 5 occurrences of the character a
var str = "aaaa";
var result = re.test(str);
console.log(result); // true
// The range is defined by placing the minimum and maximum number of occurrences inside curly brackets.
// Here we have the option to search for a particular number of occurrences of a character
// {3} or a range of occurrences {3,5}.
// {3,} or {,5} can also be used to define a range with no upper or lower limit.

// Meta Characters
// Meta characters are characters that have a special meaning in regular expressions.
// The backslash (\) is used to escape meta characters so they are treated as literal characters.
// Some of the most commonly used meta characters are:
// . - matches any character except for a newline
// \w - matches any word character (alphanumeric & underscore), \W - matches any non-word character
// \d - matches any digit, \D - matches any non-digit
// \s - matches any whitespace character, \S - matches any non-whitespace character
// \b - matches a word boundary, \B - matches a non-word boundary
// \n - matches a newline character, \r - matches a carriage return character
// \t - matches a tab character

re = /\d/; // matches any digit
var str = "123";
var result = re.test(str);
console.log(result); // true

re = /\w/; // matches any word character
var str = "abcdedf";
var result = re.test(str);
console.log(result); // true

var str = "@#$%";
var result = re.test(str);
console.log(result); // false

re = /\s/; // matches any whitespace character
var str = " ";
var result = re.test(str);
console.log(result); // true
var str = "a";
var result = re.test(str);
console.log(result); // false

re = /\w\s\d/; // matches a word character followed by a whitespace character followed by a digit
var str = "a 1";
var result = re.test(str);
console.log(result); // true

// A little more complex example
re = /\b\w{3}\b\s\d{2}/; // matches a three-letter word followed by a whitespace character followed by two digits
var str = "cat 12";
var result = re.test(str);
console.log(result); // true
