// Exercise 10
console.log("Exercise 10: Mixed Juices");

export function timeToMixJuice(name) {
    switch (name) {
        case "Pure Strawberry Joy":
            return 0.5;
        case "Energizer":
        case "Green Garden":
            return 1.5;
        case "Tropical Island":
            return 3;
        case "All or Nothing":
            return 5;
        default:
            return 2.5;
    }
}
console.log("Time to mix 'Tropical Island': ", timeToMixJuice("Tropical Island"));
console.log("Time to mix 'Berries & Lime': ", timeToMixJuice("Berries & Lime"));

export function limesToCut(wedgesNeeded, limes) {
    let wedgesCut = 0;
    let limesCut = 0;

    while (wedgesCut < wedgesNeeded && limesCut < limes.length) {
        const lime = limes[limesCut];
        switch (lime) {
            case "small":
                wedgesCut += 6;
                break;
            case "medium":
                wedgesCut += 8;
                break;
            case "large":
                wedgesCut += 10;
                break;
        }
        limesCut++;
    }
    return limesCut;
}
const limes = ['small', 'large', 'medium', 'small'];
console.log("Limes to cut for 25 wedges from ['small', 'large', 'medium', 'small']: ", limesToCut(25, limes));

export function remainingOrders(timeLeft, orders) {
    let timeUsed = 0;
    let ordersCompleted = 0;

    while (timeUsed < timeLeft && ordersCompleted < orders.length) {
        timeUsed += timeToMixJuice(orders[ordersCompleted]);
        ordersCompleted++;
    }
    return orders.slice(ordersCompleted);
}
const orders = ['Energizer', 'All or Nothing', 'Green Garden', 'Tropical Island'];
console.log("Remaining orders after 5 minutes from ['Energizer', 'All or Nothing', 'Green Garden', 'Tropical Island']: ", remainingOrders(5, orders));