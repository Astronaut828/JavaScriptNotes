// Training File
// Reviewing Notes and writing them out.

// Regular Expressions
// Regular expressions are patterns used to match character patterns in strings.
// In JavaScript, regular expressions are of type Object so they have methods and properties.
// Among other things, regular expressions are used for validation, parsing, and substitution.

// Creating a Regular Expression
// There are two ways to create a regular expression:
// Regular Expression Literal
let re = /abc/;
// Regular Expression Constructor
let reg = new RegExp("abc");
// The constructor method is useful when the pattern is not known beforehand.

// To test the example above, you can use the following code:
re = /abc/;
var str = "abcd";
var result = re.test(str);
console.log(result); // true
// The test method returns a boolean value indicating whether or not the pattern was found in the string.

// Regex Flags / Options
// Regular expressions have optional flags that allow for options like global and case insensitive searching.
// g - Global search - searches for all instances of the pattern in the string
// i - Case-insensitive search - searches for the pattern regardless of case
// m - Multi-line search - searches for the pattern across multiple lines
// u - Unicode; treat a pattern as a sequence of unicode code points - searches for the pattern as a unicode character
// y - Perform a "sticky" search that matches starting at the current position in the target string - searches for the pattern at the current position in the string
// The flags are appended to the end of the regular expression and can be combined.

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
// When used with the replace method, the global search flag replaces all instances of the pattern in the string.
re = /a/g; // global search
var str = "Bananana";
var result = str.replace(re, "o");
console.log(result); // Bononono

// Character Sets
// Character sets are used to match any one of a group of characters at any point in the input.
// The character set is created by placing the characters it matches inside square brackets.
re = /[cbr]at/; // matches cat, bat, rat
var str = "cat";
var result = re.test(str);
console.log(result); // true

// Negated Character Sets
// Negated character sets are used to match any one character that is not in a group of characters at any point in the input.
// The negated character set is created by placing a caret character (^) after the opening square bracket.
re = /[^cbr]at/; // matches hat, mat, pat but will not match cat, bat, rat
var str = "hat";
var result = re.test(str);
console.log(result); // true

// Character Ranges
// Character ranges are used to match any one of a range of characters at a point in the input.
// The character range is created by placing the starting and ending characters of the range separated by a hyphen inside square brackets.
re = /[a-z]at/; // matches cat, bat, rat, hat, mat, pat, etc.
var str = "cat";
var result = re.test(str);
console.log(result); // true

// Character Ranges for Numbers
// Character ranges can also be used with numbers.
re = /[1-5]/; // matches any digit from 1 to 5 inclusive
var str = "6";
var result = re.test(str);
console.log(result); // false

// Repeating Characters
// There are two ways to match a character that might appear more than once in a string.
// The special characters '+' and '*' are used to match one or more occurrences of a character.
// To use a repeating operator, we place it after the character we want to match.

// The '+' character is used to match one or more occurrences of a character.
re = /a+/; // matches one or more occurrences of the character a
var str = "aaaa";
var result = re.test(str);
console.log(result); // true

// The '*' character is used to match zero or more occurrences of a character.
re = /a*/; // matches zero or more occurrences of the character a
var str = "aaaa";
var result = re.test(str);
console.log(result); // true

// We can also check for repeating characters with a specific number of occurrences.
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
var str = "@#$%"; // but will return false for special characters
var result = re.test(str);
console.log(result); // false

re = /\s/; // matches any whitespace character
var str = " ";
var result = re.test(str);
console.log(result); // true

re = /\w\s\d/; // matches a word character followed by a whitespace character followed by a digit
var str = "a 1";
var result = re.test(str);
console.log(result); // true

// A little more complex example
re = /\b\w{3}\b\s\d{2}/; // matches a three-letter word followed by a whitespace character followed by two digits
var str = "cat 12";
var result = re.test(str);
console.log(result); // true

// Special Characters
// Special characters are characters that have a special meaning in regular expressions.
// As seen The '+' and '*' characters are used to match one/zero or more occurrences.
// The '.' character is used to match any character except for a newline.
// The '^' character is used to match the start of the input.
// The '$' character is used to match the end of the input.
// The '|' character is used to create a logical OR in a pattern.
// The '?' character is used to match zero or one occurrence of a character.
// The '()' characters are used to create a capturing group.
// The '{}' characters are used to create a quantifier.
// The backslash (\) is used to escape meta characters so they are treated as literal characters.

re = /car./; // matches car followed by any character
var str = "cars";
var result = re.test(str);
console.log(result); // true

// The '^' character is used to match the start of the input.
re = /^[a-z]{5}/; // matches any five-letter word at the start of the input
var str = "hello Joe";
var result = re.test(str);
console.log(result); // true
var str = "1. Hello Joe";
var result = re.test(str);
console.log(result); // false

// The '$' character is used to match the end of the input.
re = /[a-z]{5}$/; // matches any five-letter word at the end of the input
var str = "hello Joe";
var result = re.test(str);
console.log(result); // false
var str = "hello Jenny";
var result = re.test(str);
console.log(result); // true

re = /^[0-9]{5}$/; // matches any five-digit number exactly
var str = "12345";
var result = re.test(str);
console.log(result); // true
var str = "A23456";
var result = re.test(str);
console.log(result); // false

// The '|' character is used to create a logical OR in a pattern.
re = /cat|dog/; // matches cat or dog
var str = "The dog is barking";
var str2 = "The cat is meowing";
var result = re.test(str);
console.log(result); // true
var result = re.test(str2);
console.log(result); // true

reg = /(c|b|r)at/; // matches cat, bat, rat
var str = "cat";
var str2 = "bat";
var result = reg.test(str);
console.log(result); // true
var result = reg.test(str2);
console.log(result); // true

// The '?' character is used to match zero or one occurrence of a character.
re = /hello?/; // matches hello or hell, makes the last character optional
var str = "hell";
var result = re.test(str);
console.log(result); // true

// The '.' character is used to match any character except for a newline.
re = /.+/; // matches one or more occurrences of any character
var str = "abckgiu090979tuyfgjhoip[]khikg";
var result = re.test(str);
console.log(result); // true

re = /1234*/; // matches 123 followed by zero or more occurrences of the character 4, but also makes 4 optional.
var str = "123444444";
var result = re.test(str);
console.log(result); // true
// It is important to note that the '*' character matches zero or more occurrences of the character that precedes it.
re = /1234*/;
var str = "123";
var result = re.test(str);
console.log(result); // true

// The '()' characters are used to create a capturing group.
re = /(bird|cat|dog)(s)?/; // matches bird, cat, or dog followed by an optional s
var str = "Michael has a few cats";
var result = re.test(str);
console.log(result); // true

// To escape a special character, we use the backslash (\) character.
re = /1234\*/; // matches 1234 followed by the character *
var str = "1234*";
var result = re.test(str);
console.log(result); // true

// Next to the test method, regular expressions have a number of other methods that can be used to manipulate strings.
// The match method is used to match a regular expression against a string.

// The match method returns an array containing the matches, or null if no matches are found.
re = /cat/;
var str = "The cat is meowing";
var result = str.match(re);
console.log(result); // [ 'cat', index: 4, input: 'The cat is meowing', groups: undefined ] // The index property is the position of the match in the string.

// The exec method is used to match a regular expression against a string it is similar to the match method.
// The exec method returns an array containing the matches, or null if no matches are found.
re = /cat/;
var str = "The cat is meowing";
var result = re.exec(str);
console.log(result); // [ 'cat', index: 4, input: 'The cat is meowing', groups: undefined ]

// The search method is used to search for a regular expression in a string.
// The search method returns the index of the first match, or -1 if no match is found.
re = /cat/;
var str = "The cat is meowing";
var result = str.search(re);
console.log(result); // 4
var str = "The dog is barking";
var result = str.search(re);
console.log(result); // -1

// The replace method is used to replace a regular expression in a string.
// The replace method returns a new string with the replacement.
re = /cat/;
var str = "The cat is meowing";
var result = str.replace(re, "dog");
console.log(result); // The dog is meowing

// Here we can use Capture Groups to replace multiple occurrences of a pattern.
re = /(\w+)\s(\w+)/; // matches a word followed by a whitespace character followed by another word
var str = "Michael Jackson";
var result = str.replace(re, "$2 $1"); // replaces the match with the second word followed by the first word
console.log(result); // Jackson Michael
// Destructruing with Capture Groups
// When using .replace() with capture groups, we can use destructuring to access the capture groups.
// .replace() can take a function as the second argument.
// The function will be passed the match, the capture groups, the index, and the original string.
str.replace(re, (match, first, second) => {
  console.log(" The king of pop is " + first + " " + second);
}); // The king of pop is Michael Jackson
