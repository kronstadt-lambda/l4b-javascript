// Exercise 1
console.log("Exercise 1");
function HelloExercises(str) {
    return console.log(str);
}

HelloExercises("Hello, World!");

// Exercise 2
console.log("Exercise 2: Lucian's Luscious Lasagna");
export const EXPECTED_MINUTES_IN_OVEN = 40;
export function remainingMinutesInOven(currentMinutes) {
    return EXPECTED_MINUTES_IN_OVEN - currentMinutes;
}
export function preparationTimeInMinutes(numberOfLayers) { return numberOfLayers * 2; }
export function totalTimeInMinutes(numberOfLayers, actualMinutes) { return preparationTimeInMinutes(numberOfLayers) + actualMinutes; }
console.log(totalTimeInMinutes(2, 30));

// Exercise 3
console.log("Exercise 3: Annalyn's Infiltration");

const knightIsAwake = Math.random() < 0.5;
const archerIsAwake = Math.random() < 0.5;
const prisonerIsAwake = Math.random() < 0.5;
const petDogIsPresent = Math.random() < 0.5;
console.group("character status: ");
console.log("Knight is awake: ", knightIsAwake);
console.log("Archer is awake: ", archerIsAwake);
console.log("Prisoner is awake: ", prisonerIsAwake);
console.log("Pet dog is present: ", petDogIsPresent);
console.groupEnd();

export function canExecuteFastAttack(knightIsAwake) { return !knightIsAwake; }
export function canSpy(knightIsAwake, archerIsAwake, prisonerIsAwake) {
    return knightIsAwake || archerIsAwake || prisonerIsAwake;
}
export function canSignalPrisoner(archerIsAwake, prisonerIsAwake) {
    return !archerIsAwake && prisonerIsAwake;
}
export function canFreePrisoner(knightIsAwake, archerIsAwake, prisonerIsAwake, petDogIsPresent) {
    return (petDogIsPresent && !archerIsAwake) || (!petDogIsPresent && !knightIsAwake && !archerIsAwake && prisonerIsAwake);
}

console.log("Annalyn can engage 'fast attack'?: ", canExecuteFastAttack(knightIsAwake));
console.log("Annalyn can engage 'spy'?: ", canSpy(knightIsAwake, archerIsAwake, prisonerIsAwake));
console.log("Annalyn can engage 'signal prisoner'?: ", canSignalPrisoner(archerIsAwake, prisonerIsAwake));
console.log("Annalyn can engage 'free prisoner'?: ", canFreePrisoner(knightIsAwake, archerIsAwake, prisonerIsAwake, petDogIsPresent));

// Exercise 4
console.log("Exercise 4: Freelancer Rates");

const hourlyRate = 89;
const clientBudget = 2000;
const workDays = 230;
const monthlyDiscount = 0.42;

export const calculateDailyRate = (hourlyRate) => hourlyRate * 8;

export const getAffordableDays = (clientBudget, hourlyRate) =>
    Math.floor(clientBudget / calculateDailyRate(hourlyRate));

const getFullMonths = (workDays, daysInMonth) =>
    Math.floor(workDays / daysInMonth);

const getDiscountedMonthlyRate = (hourlyRate, daysInMonth, monthlyDiscount) =>
    calculateDailyRate(hourlyRate) * daysInMonth * (1 - monthlyDiscount);

export const calculateTotalPrice = (hourlyRate, workDays, monthlyDiscount) => {
    const daysInMonth = 22;
    const monthlyTotal = getFullMonths(workDays, daysInMonth) *
                        getDiscountedMonthlyRate(hourlyRate, daysInMonth, monthlyDiscount);
    const extraDaysTotal = (workDays % daysInMonth) * calculateDailyRate(hourlyRate);
    return Math.ceil(monthlyTotal + extraDaysTotal);
};

console.log("Daily rate: ", calculateDailyRate(hourlyRate));
console.log(`With a budget of $${clientBudget}, you can work for ${getAffordableDays(clientBudget, hourlyRate)} days.`);
console.log(`The total price for a project with ${workDays} work days is $${calculateTotalPrice(hourlyRate, workDays, monthlyDiscount)}.`);