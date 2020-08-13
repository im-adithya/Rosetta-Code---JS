function standardDeviation(arr) {
  // Good luck!
  var sum = arr.reduce(function(a, b){
        return a + b;
    }, 0);
  var mean = sum/arr.length
  arr.forEach((a,i) => {
    arr[i] = Math.pow(a-mean,2)
  })
  var res = arr.reduce(function(a, b){
        return a + b;
    }, 0);
  return Math.round(Math.sqrt(res/arr.length)*1000)/1000
}