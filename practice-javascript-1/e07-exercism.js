// Exercise 8
console.log("Exercise 8: Vehicle Purchase");

export function needsLicense(kind) {
    const k = String(kind).toLowerCase();
    return k === "car" || k === "truck";
}

export function chooseVehicle(option1, option2) {
    return option1 < option2
        ? `${option1} is clearly the better choice.`
        : `${option2} is clearly the better choice.`;
}

export function calculateResellPrice(originalPrice, age) {
    if (age === 0) {
        return originalPrice;
    } else if (age < 3 && age > 0) {
        return originalPrice * 0.8;
    } else if (age >= 3 && age <= 10) {
        return originalPrice * 0.7;
    } else {
        return originalPrice * 0.5;
    }
}

console.log("Needs license for car?: ", needsLicense("car"));
console.log("Needs license for motorcycle?: ", needsLicense("motorcycle"));

console.log(chooseVehicle('Wuling Hongguang', 'Toyota Corolla'));
console.log(chooseVehicle('Volkswagen Beetle', 'Volkswagen Golf'));

console.log("Resell price for 10000 USD car, age 0: ", calculateResellPrice(10000, 0));
console.log("Resell price for 10000 USD car, age 2: ", calculateResellPrice(10000, 2));
console.log("Resell price for 10000 USD car, age 5: ", calculateResellPrice(10000, 5));
console.log("Resell price for 10000 USD car, age 15: ", calculateResellPrice(10000, 15));
