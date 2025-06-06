// var city = "Kng";
// var district = "Nadia";

// console.log("address is :", city + " , " + district);

// var tweet = "asfetdgfjhij sgfdg gfdte dfgrfgy gjjh ghuthgu hughgsgd rgvgr";
// var tweet_count = tweet.length;
// console.log(
//   "You have entered ",
//   tweet_count,
//   " charecters and ",
//   200 - tweet_count,
//   " charecters are left"
// );

var username = "soumaditya";
console.log(username.length);
console.log(username.toUpperCase());
console.log(username.toLowerCase());
console.log(username.slice(2, 3)); //from 0th index to 1 cause 2 is excluded

console.log(username);

//convert it to the format of Hello , Soumaditya
var firstchar = username.slice(0, 1);
var upper_first_char = firstchar.toUpperCase();
var rest = username.slice(1, username.length);
console.log("Hello , ", upper_first_char + rest);
