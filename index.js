// code your solution here
function saturdayFun(activity = "roller-skate"){
    let string = `This Saturday, I want to ${activity}!`
    return string
}
saturdayFun()

//Default function parameters allow named parameters to be initialized with default values if no value or undefined is passed.
// function multiply(a, b = 1) {
//     return a * b;
//   } parameter b is set to a default value.

//(activity = "roller-skate") activity parameter default to roller-skate. If will use roller-skate when there is no string defined when saturdayFun invoked.

function mondayWork(activity = "go to the office"){
    let string = `This Monday, I will ${activity}.` 
    return string
}

// OR 
// const mondayWork = (activity = "go to the office") => `This Monday, I will ${activity}.` 

function wrapAdjective(style='*'){  //outer function, anonymous, invoke with a second pair of () becasue first pair () outer function is calling itself.
    return function innerFunc(msg="special"){ //outer function returns a inner function returns the  
       return `You are ${style}${msg}${style}!`;
    };
}


