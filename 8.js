// 8. You are given three numbers 13, 79, and 45. Write a program that will print the
// largest number using if-else.

var a = 13;
var b = 79;
var c = 45;
if (a > b && a > c) {
    console.log(a + ' is the largest number');
} else if (b > a && b > c) {
    console.log(b + ' is the largest number');
} else {
    console.log(c + ' is the largest number');
}
// or
var num1 = 13;
var num2 = 79;
var num3 = 45;

if (num1 > num2) {
    if (num1 > num3) {
        console.log(num1);

    }
    else {
        console.log(num3);
    }
}
else {
    if (num2 > num3) {
        console.log(num2);
    }
    else {
        console.log(num3);
    }
}
// 2. You are given a triangle with the sides 9, 8, 9. Write a program to check whether a
// triangle is Isosceles or not using if-else.

// Isosceles => two sides are equal

var side1 = 9;
var side2 = 8;
var side3 = 9;

if (side1 == side2 || side1 == side3 || side2 == side3) {
    console.log('triangle is isosceles');
} else {
    console.log('triangle is not isosceles');
}
console.log(6 != 6);
console.log(6 >= 6);