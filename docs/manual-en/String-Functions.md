#### 7.7.7 String Functions

String functions take various arguments and return various results. 

Function: __**CONCAT** _( string, string[, …])_
    

Returns a string consisting of each string in sequence. `CONCAT("abc", "def", "ghi")` has a value of `"abcdefghi"`. The resultant string is truncated to a maximum of 32767 bytes. 

Function: __**INDEX** _( haystack, needle)_
Function: __**RINDEX** _( haystack, needle)_
    

Returns a positive integer indicating the position of the first (for `INDEX`) or last (for `RINDEX`) occurrence of needle in haystack. Returns 0 if haystack does not contain needle. Returns 1 if needle is the empty string. 

Function: __**INDEX** _( haystack, needles, needle_len)_
Function: __**RINDEX** _( haystack, needle, needle_len)_
    

Divides needles into multiple needles, each with length needle_len, which must be a positive integer that evenly divides the length of needles. Searches haystack for the occurrences of each needle and returns a positive integer indicating the byte index of the beginning of the first (for `INDEX`) or last (for `RINDEX`) needle it finds. Returns 0 if haystack does not contain any of the needles, or if needles is the empty string. 

Function: __**LENGTH** _( string)_
    

Returns the number of bytes in string. 

Function: __**LOWER** _( string)_
    

Returns a string identical to string except that all uppercase letters are changed to lowercase letters. The definitions of “uppercase” and “lowercase” are system-dependent. 

Function: __**LPAD** _( string, length[, padding])_
Function: __**RPAD** _( string, length[, padding])_
    

If string is at least length bytes long, these functions return string unchanged. Otherwise, they return string padded with padding on the left side (for `LPAD`) or right side (for `RPAD`) to length bytes. These functions report an error and return string unchanged if length is missing or bigger than 32767. 

The padding argument must not be an empty string and defaults to a space if not specified. If its length does not evenly fit the amount of space needed for padding, the returned string will be shorter than length. 

Function: __**LTRIM** _( string[, padding])_
Function: __**RTRIM** _( string[, padding])_
    

These functions return string, after removing leading (for `LTRIM`) or trailing (for `RTRIM`) copies of padding. If padding is omitted, these functions remove spaces (but not tabs or other white space). These functions return string unchanged if padding is the empty string. 

Function: __**NUMBER** _( string, format)_
    

Returns the number produced when string is interpreted according to format specifier format. If the format width w is less than the length of string, then only the first w bytes in string are used, _e.g._ `NUMBER("123", F3.0)` and `NUMBER("1234", F3.0)` both have value 123. If w is greater than string’s length, then it is treated as if it were right-padded with spaces. If string is not in the correct format for format, system-missing is returned. 

Function: __**REPLACE** _( haystack, needle, replacement[, n])_
    

Returns string haystack with instances of needle replaced by replacement. If nonnegative integer n is specified, it limits the maximum number of replacements; otherwise, all instances of needle are replaced. 

Function: __**STRING** _( number, format)_
    

Returns a string corresponding to number in the format given by format specifier format. For example, `STRING(123.56, F5.1)` has the value `"123.6"`. 

Function: __**STRUNC** _( string, n)_
    

Returns string, first trimming it to at most n bytes, then removing trailing spaces (but not tabs or other white space). Returns an empty string if n is zero or negative, or string unchanged if n is missing. 

Function: __**SUBSTR** _( string, start)_
    

Returns a string consisting of the value of string from position start onward. Returns an empty string if start is system-missing, less than 1, or greater than the length of string. 

Function: __**SUBSTR** _( string, start, count)_
    

Returns a string consisting of the first count bytes from string beginning at position start. Returns an empty string if start or count is system-missing, if start is less than 1 or greater than the number of bytes in string, or if count is less than 1. Returns a string shorter than count bytes if start \+ count \- 1 is greater than the number of bytes in string. Examples: `SUBSTR("abcdefg", 3, 2)` has value `"cd"`; `SUBSTR("nonsense", 4, 10)` has the value `"sense"`. 

Function: __**UPCASE** _( string)_
    

Returns string, changing lowercase letters to uppercase letters.
