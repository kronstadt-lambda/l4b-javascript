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


