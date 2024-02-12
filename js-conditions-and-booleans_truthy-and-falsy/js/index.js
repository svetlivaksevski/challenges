const truthyOrFalsy = Boolean(3 >= 2);
console.log("The expression is " + truthyOrFalsy);

const attemptOne = Boolean(2 == "2");
console.log("The expression is " + attemptOne);

const attemptTwo = Boolean(2 === "2");
console.log("The expression is " + attemptTwo);

const attemptThree = Boolean(2 === 2);
console.log("The expression is " + attemptThree);

const attemptFour = Boolean("hello world");
console.log("The expression is " + attemptFour);

const attemptFive = Boolean("");
console.log("The expression is " + attemptFive);

const attemptSix = Boolean(true);
console.log("The expression is " + attemptSix);

const attemptSeven = Boolean(0);
console.log("The expression is " + attemptSeven);

const attemptEight = Boolean(-50);
console.log("The expression is " + attemptEight);

const attemptNine = Boolean(50);
console.log("The expression is " + attemptNine);

const attemptTen = Boolean(5 > 1);
console.log("The expression is " + attemptTen);

const attemptEleven = Boolean("1 > 10");
console.log("The expression is " + attemptEleven);

const attemptTwelve = Boolean("false");
console.log("The expression is " + attemptTwelve);

