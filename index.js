let hqBlock = 42;
let blockDist = 264;
function distanceFromHqInBlocks(blocks){
    if (blocks > hqBlock){
        return blocks - hqBlock;
    }else{
        return hqBlock - blocks;
    }
}
function distanceFromHqInFeet(blocks){

    return distanceFromHqInBlocks(blocks) * blockDist;
}
function distanceTravelledInFeet(startBlock, endBlock){
    if (startBlock > endBlock){
        return(startBlock - endBlock)* blockDist
    }else{
        return (endBlock - startBlock) * blockDist
    }
}
function calculatesFarePrice(startBlock, endBlock){
    let distance = distanceTravelledInFeet(startBlock, endBlock)
    if (distance <= 400){
        return 0;
    }else if (distance > 400 && distance <= 2000 ){
        return (distance-400)*0.02;
    }else if (distance>2000 && distance < 2500){
        return 25;
    }else{
        return'cannot travel that far';
    }
}
