const getWaterBetweenWalls = (waterWall) => {
  let waterPools = [];

  for(let leftWall = 0; leftWall < waterWall.length; leftWall++) {
    let currentWater = []
    console.log('this is the left wall', leftWall)
    //checks if next wall is smaller than current
    if(waterWall[leftWall] > waterWall[leftWall + 1]) {
      //begin at the smaller wall
      for(let rightWall = leftWall + 1; rightWall < waterWall.length - 1; rightWall++) {
        console.log('this is the rightwall', rightWall)
        let amountOfWater = 0;
        if(waterWall[rightWall] >= waterWall[leftWall]) {
          let area = waterWall[leftWall] * waterWall[rightWall];
          for(let between = leftWall; between < rightWall; between++) {
            amountOfWater += (Math.min(waterWall[leftWall], waterWall[rightWall]) - waterWall[between])
          }
          console.log(leftWall, waterWall[rightWall], amountOfWater)
          currentWater.push(leftWall + 1, rightWall + 1, amountOfWater)
        } else {
          continue;
        }
      }
      waterPools.push(currentWater)
    } else {
      continue;
    }
  }
  return waterPools
}
// 
// water = [5, 3, 7, 2, 6, 4, 5, 9, 1, 2]
//
// getWaterBetweenWalls(water)
