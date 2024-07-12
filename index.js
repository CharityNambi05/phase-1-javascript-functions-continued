// code your solution here
function saturdayFun(activity = "roller-skate") {
    return `This Saturday, I want to ${activity}!`;
}

const mondayWork = function(activity = "go to the office") {
    return `This Monday, I will ${activity}.`;
};

// Testing the function
console.log(mondayWork()); // This Monday, I will go to the office.
console.log(mondayWork("work from home")); // This Monday, I will work from home.

function wrapAdjective(wrapper) {
    return function(adjective) {
        return `You are ${wrapper}${adjective}${wrapper}!`;
    };
}

// Testing the function
const wrapWithStars = wrapAdjective('*');
console.log(wrapWithStars('amazing')); // You are *amazing*!

const wrapWithPipes = wrapAdjective('||');
console.log(wrapWithPipes('a genius')); // You are ||a genius||!
