function selectionSort(testArr) {
  for(var i = 0; i < testArr.length; i++){
  var lowestNumber = testArr[i];
  var lowestNumberIndex = i;
    for( var j = i + 1; j < testArr.length; j++){
      if( testArr[j] < lowestNumber ){
        lowestNumber = testArr[j];
        lowestNumberIndex = j;
      }
    }

    var tempVar = testArr[i];
    testArr[i] = testArr[lowestNumberIndex];
    testArr[lowestNumberIndex] = tempVar;

    console.log(testArr);
  }
  return testArr;
}

module.exports = selectionSort;