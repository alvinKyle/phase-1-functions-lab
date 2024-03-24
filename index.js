// Code your solution in this file!

function distanceFromHqInBlocks(location) {
    const hqLocation = 42;
    const blocksAway = Math.abs(location - hqLocation);
    return blocksAway;
}

function distanceFromHqInFeet(location) {
    const feetPerBlock = 264;
    const blocksAway = distanceFromHqInBlocks(location);
    const feetAway = blocksAway * feetPerBlock;
    return feetAway;
}
function distanceTravelledInFeet(startBlock, endBlock) {
    const feetPerBlock = 264;
    const distanceInBlocks = Math.abs(endBlock - startBlock);
    const distanceInFeet = distanceInBlocks * feetPerBlock;
    return distanceInFeet;
}


function calculatesFarePrice(startBlock, endBlock) {
    const feetPerBlock = 264
    const distanceInBlocks = Math.abs(endBlock - startBlock);
    const distanceInFeet = distanceInBlocks * feetPerBlock

    let fare;

    if (distanceInFeet <= 400) {

        return fare =0;
    } else if (distanceInFeet > 400 && distanceInFeet <= 2000) {

        return fare = 2.56;
    } else if (distanceInFeet > 2000 && distanceInFeet < 2500) {

        return fare =25;
    } else {
        return "cannot travel that far";
    }
}


