// Exercise 8
console.log("Exercise 8: Bird Watcher");

const birsdPerDay = [2, 5, 0, 7, 4, 1, 3, 0, 2, 5, 0, 1, 3, 1];

// ideal
export function totalBirdCount(birdsPerDay) {
    return birdsPerDay.reduce((total, count) => total + count, 0);
}
console.log("Total bird count: ", totalBirdCount(birsdPerDay));
// not ideal
export function totalBirdCountNotIdeal(birdsPerDay) {
    let total = 0;
    for (let i = 0; i < birdsPerDay.length; i++) {
        total += birdsPerDay[i];
    }
    return total;
}

// ideal
export function birdsInWeek(birdsPerDay, week) {
    const start = (week - 1) * 7;
    const end = start + 7;
    return birdsPerDay.slice(start, end).reduce((total, count) => total + count, 0);
}
console.log("Birds counted in week 2: ", birdsInWeek(birsdPerDay, 2));

// not ideal
export function birdsInWeekNotIdeal(birdsPerDay, week) {
    let total = 0;
    const start = (week - 1) * 7;
    const end = start + 7;
    for (let i = start; i < end; i++) {
        total += birdsPerDay[i];
    }
    return total;
}

// ideal
const birdsPerDayToUpdate = [2, 5, 0, 7, 4, 1];

export function fixBirdCountLog(birdsPerDay) {
    return birdsPerDay.map(count => count % 2 === 0 ? count + 1 : count);
}
console.log("Fix birdsPerDayToUpdate: ", fixBirdCountLog(birdsPerDayToUpdate));

// not ideal
export function fixBirdCountLogNotIdeal(birdsPerDay) {
    for (let i = 0; i < birdsPerDay.length; i+=2) {
        birdsPerDay[i] = birdsPerDay[i] + 1;
    }
    return birdsPerDay;
}
console.log("Fix birdsPerDayToUpdate: ", fixBirdCountLogNotIdeal(birdsPerDayToUpdate));
