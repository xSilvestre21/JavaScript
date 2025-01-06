function birthdayCakeCandles(candles) {
    let highest = 0;
    let count = 0;
    
    for (let index = 0; index < candles.length; index++) {
      if (candles[index] > highest) {
        highest = candles[index];
        count = 0;
      }
      if (candles[index] == highest) count++;
    }
    return count;
}


console.log(birthdayCakeCandles([3, 2, 1, 3]))
console.log(birthdayCakeCandles([3, 2, 1, 3, 2, 1, 3, 3, 3, 3, 1, 2]))

