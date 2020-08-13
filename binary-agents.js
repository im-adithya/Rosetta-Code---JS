function binaryAgent(str) {
  str = str.split(" ");
  var newArr = [];
  var newArr2 = [];
  var sum = [];
  var letters = [];
  for(let k = 0;k<str.length;k++){
    sum.push(0);
  }
  for(let i = 0;i<str.length;i++){
    newArr.push(str[i]);
    newArr2.push(str[i].split(""));
    for(let j = 0;j<str[i].length;j++){
      newArr2[i][j] =Math.pow(2,7-j)*newArr2[i][j];
      sum[i] += parseInt(newArr2[i][j]);

    }
  }
  for(let l = 0;l<sum.length;l++){
    letters[l] = String.fromCharCode(sum[l]); 
  }
  letters = letters.join("");
  return letters;
}

binaryAgent("01000001 01110010 01100101 01101110 00100111 01110100 00100000 01100010 01101111 01101110 01100110 01101001 01110010 01100101 01110011 00100000 01100110 01110101 01101110 00100001 00111111");
