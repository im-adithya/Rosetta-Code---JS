function getDateFormats() {
  // Good luck!
  const monthNames = ["January", "February", "March", "April", "May", "June",
    "July", "August", "September", "October", "November", "December"
  ];
  var actual = new Date()
  var monthIndex = actual.getMonth()
  actual = actual.toString().split(' ')
  var res = [[actual[3], '-', monthIndex + 1, '-', parseInt(actual[2])],
  [`${actual[0]}day, `,`${monthNames[monthIndex]} ${parseInt(actual[2])}, ${actual[3]}`]]
  res[0] = res[0].join('')
  res[1] = res[1].join('')
  return res;
}

console.log(getDateFormats())