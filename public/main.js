alert(
  "total marks are 500, tell us how much you got to know your sum and percentage"
);
var person1 = parseInt(prompt("Enter Islamiat Marks"));
var person2 = parseInt(prompt("Enter English Marks"));
var person3 = parseInt(prompt("Enter Urdu Marks"));
var person4 = parseInt(prompt("Enter Maths Marks"));
var person5 = parseInt(prompt("Enter Biology Marks"));
var sum = person1 + person2 + person3 + person4 + person5;
alert("This is your sum     " + sum);

var value2 = person1 + person2 + person3 + person4 + person5;
var value1 = 500;
var percentage = (value2 / value1) * 100;
alert("This is your percentage     " + percentage);
// = prompt("This is your percentage")
// var person1 = prompt("Enter Islamiat Marks");
// var person2 = prompt("Enter English Marks");
// var person3 = prompt("Enter Urdu Marks");
// var person4 = prompt("Enter Maths Marks");
// var person5 = prompt("Enter Biology Marks");
