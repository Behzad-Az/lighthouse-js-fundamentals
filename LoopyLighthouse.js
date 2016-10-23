function loopyLighthouse(range, multiples, words){
  var startNum = range[0], endNum = range[1];
  var multipleOne = [multiples[0], words[0]];
  var multipleTwo = [multiples[1], words[1]];
  var multipleBoth = [multiples[0] * multiples[1], words[0] + words[1]];

  for (var num = startNum; num <= endNum; num++){
    if (num % multipleBoth[0] === 0) console.log(multipleBoth[1]);
    else if (num % multipleTwo[0] === 0) console.log(multipleTwo[1]);
    else if (num % multipleOne[0] === 0) console.log(multipleOne[1]);
    else console.log(num);
  }
}

loopyLighthouse([15, 90], [2, 5], ["Batty", "Beacon"]);

/*
for (var num = 100; num <= 200; num++){
  if (num % 3 === 0 && num % 4 === 0){
    console.log("LoopyLighthouse");
  } else if (num % 3 === 0) {
    console.log("Loopy");
  } else if (num % 4 === 0) {
    console.log("Lighthouse");
  } else console.log(num);
}
