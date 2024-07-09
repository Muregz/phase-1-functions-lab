function distanceFromHqInBlocks(location) {
    const hq = 42; 
    return Math.abs(location - hq);
}
function distanceFromHqInFeet(location) {
    const blockInFeet = 264; 
    const blocks = Math.abs(location - 42); 
    return blocks * blockInFeet; 
}

function distanceTravelledInFeet(start, destination) {
    const feetPerBlock = 264;
    let distance = Math.abs(destination - start) * feetPerBlock;
    return distance;
}
function calculatesFarePrice(start, destination) {
    const feetPerBlock = 264;
    const first400FreeFeet = 400;
    const minChargeableDistance = 400;
    const maxDistanceForCharge = 2500;
    const pricePerFoot =  0.02;
    let distance = Math.abs(destination - start) * feetPerBlock;
    if (distance > maxDistanceForCharge) {
        return 'cannot travel that far';
    }
    let fare = 0;
    if (distance <= first400FreeFeet) {
        fare = 0; 
    } else if (distance <= 2000) {
        fare = (distance - first400FreeFeet) * pricePerFoot;  
    } else {
        fare = 25; 
    }
    return fare;
}



