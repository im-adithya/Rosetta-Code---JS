function dropElements(arr, func) {
  var newArr = [];
  for(let i = 0; i<arr.length;i++){
    if (!func(arr[i])&&func(arr[i+1])){
      delete arr[i];
      console.log(arr)
      break;
    }
  }
  for(var j=0; j<arr.length;j++){
    if (arr[j]==undefined){
      break;
    }
  }
  if (j==arr.length&&func(arr[0])) {
    return arr;
  }
  for(let k=j+1;k<arr.length;k++){
    newArr.push(arr[k]);
  }
  console.log(newArr)
  return newArr;
}

dropElements([1, 2, 3], function(n) {return n > 0;});
