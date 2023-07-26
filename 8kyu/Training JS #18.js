/*This time we learn two methods to split or merge
 string:split() and concat(). also learn a good friend
 of the split() method: join(). It is an Array method.
 Their usage:

stringObject.split(separator,howmany)
stringObject.concat(string1,string2,...,stringx)
arrayObject.join(separator)
split() can divided a string into several parts by a
specified separator. The result is an array of strings.
 The split string does not include the separator itself.
 One of its classic uses is to divide a sentence into an array of words:

var str="My name is John";
var words=str.split(" ");
console.log(words);
//output:
[ 'My', 'name', 'is', 'John' ]
In the example above, we use the space as the separator,
divide a sentence into 4 words. If we specify the second
parameters, it will be like this:

var str="My name is John";
var words1=str.split(" ",3);
console.log("words1:",words1);
var words2=str.split(" ",5);
console.log("words2:",words2);

//output:
words1:[ 'My', 'name', 'is' ]
words2:[ 'My', 'name', 'is', 'John' ]
When we specify the number of fewer than 4, the result will be a
 specified number of strings; if the number of the partition is too
  many, the results will only be the same as the default results.

If we use the empty string as the separator, we'll get an
 array of strings containing each character:

var str="My name is John";
var words=str.split("");
console.log(words);

//output:
[ 'M', 'y', ' ', 'n', 'a', 'm', 'e', ' ', 'i', 's', ' ', 'J', 'o', 'h', 'n' ]
Split can use regular expressions to split the string.
 But because we have not learned the use of regular
 expressions, so we do not have to learn this usage.

concat() can merge many strings into a string like this:

var str="My".concat("name","is","John");
console.log(str);

//output:
MynameisJohn
In fact, we rarely see the actual use of concat(),
because we have a more simple way. that is using the + operator:

var str="My"+"name"+"is"+"John";
console.log(str);

//output:
MynameisJohn*/
function splitAndMerge(string, separator) {
    return string.split('').join(separator);
}