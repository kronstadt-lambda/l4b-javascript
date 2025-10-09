// if
if (true) {
    console.log('This is running ...');
}

let age = 18;
console.log(`You are ${age} years old, then ...`);
if (age >= 18) {
    console.log('You are old enough to vote');
}

// else
if (age == 18) {
    console.log('You are 18 years old.');
} else {
    console.log('You are not 18 years old.');
}


// if, else if
let numPets = 5;
if (numPets == 0) {
    console.log('You have no pets');
} else if (numPets == 1) {
    console.log('You have one pet');
} else {
    console.log('You have more than one pet');
}

// ternary operator
// is the same as if else but shorter
let message = age == 18 ? 'You are 18 years old' : 'You are not 18 years old';
console.log(message);

// switch
let day = 'Monday';
switch (day) {
    case 'Monday':
        console.log('It is Monday');
        break;
    case 'Tuesday':
        console.log('It is Tuesday');
        break;
    case 'Wednesday':
        console.log('It is Wednesday');
        break;
    case 'Thursday':
        console.log('It is Thursday');
        break;
    case 'Friday':
        console.log('It is Friday');
        break;
    case 'Saturday':
        console.log('It is Saturday');
        break;
    case 'Sunday':
        console.log('It is Sunday');
        break;
    default:
        console.log('It is not a day of the week');
}


