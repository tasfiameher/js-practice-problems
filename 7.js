/*You and your friends Tom, Jane, Peter and John got their final exam results. Your total
score is 85, Tom’s total score is 66, Jane’s total score is 95, Peter’s total score is 56
and John’s total score is 40. The grading chart is
80 or above A grade
60 or above B grade
50 or above C grade
40 or above D grade
39 or less => F grade
Write a program to find your and your friends’ grades using if-else.*/
// first method
var myScore = 85;
var name = 'myScore';
if (myScore >= 80) {
    console.log(name, ': A');
} else if (myScore >= 60) {
    console.log('B');
} else if (myScore >= 50) {
    console.log('C');
} else if (myScore >= 40) {
    console.log('D')
} else {
    console.log('F');
}
var tomScore = 66;
var name = 'tomScore';
if (tomScore >= 80) {
    console.log(name, ': A');
} else if (tomScore >= 60) {
    console.log(name, ':B');
} else if (tomScore >= 50) {
    console.log(name, ':C');
} else if (tomScore >= 40) {
    console.log(name, ':D')
} else {
    console.log(name, ':F');
}
var janeScore = 95;
var name = 'janeScore';
if (janeScore >= 80) {
    console.log(name, ': A');
} else if (janeScore >= 60) {
    console.log(name, ':B');
} else if (janeScore >= 50) {
    console.log(name, ':C');
} else if (janeScore >= 40) {
    console.log(name, ':D')
} else {
    console.log(name, ':F');
}
var peterScore = 56;
var name = 'peterScore';
if (peterScore >= 80) {
    console.log(name, ': A');
} else if (peterScore >= 60) {
    console.log(name, ':B');
} else if (peterScore >= 50) {
    console.log(name, ':C');
} else if (peterScore >= 40) {
    console.log(name, ':D')
} else {
    console.log(name, ':F');
}
var johnScore = 40;
var name = 'johnScore';
if (johnScore >= 80) {
    console.log(name, ': A');
} else if (johnScore >= 60) {
    console.log(name, ':B');
} else if (johnScore >= 50) {
    console.log(name, ':C');
} else if (johnScore >= 40) {
    console.log(name, ':D')
} else {
    console.log(name, ':F');
}


// second method- using array n for-loop
var name = ['me', 'tom', 'jane', 'peter', 'john'];
var mark = [85, 66, 95, 56, 40];

for (var i = 0; i <= 4; i++) {
    if (mark[i] >= 80) {
        console.log(name[i] + ' got A');
    }
    else if (mark[i] >= 60) {
        console.log(name[i] + ' got B');
    }
    else if (mark[i] >= 50) {
        console.log(name[i] + ' got C');
    }
    else if (mark[i] >= 40) {
        console.log(name[i] + ' got D');
    }
    else {
        console.log(name[i] + ' failed');
    }
}
