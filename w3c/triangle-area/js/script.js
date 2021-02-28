function isValidSide(inString) {
  let numericRegEx = /^\s*([0-9]+|[0-9]*.[0-9]+)\s*$/;
  let isNumeric = numericRegEx.test(inString);
  if (isNumeric) {
    return inString > 0;
  } else {
    return false;
  }
}

function logArray(arr) {
  let sideLog = 'sides: ';
  for (j = 0; j < arr.length; j++) {
    sideLog += arr[j] + ' ';
  }
  console.log(sideLog)
}

function go() {
  let sides = [];
  let inputs = ["#side1", "#side2", "#side3"];

  function getSide(sideNum) {
    let a = document.querySelector(inputs[sideNum])
      .value;
    // console.log("side" + (1 + sideNum) + "=" + a + " type=" + (typeof a));

    let valid = isValidSide(a);
    // console.log("isValidSide()=" + valid);
    if (valid) {
      // console.log('about to log ' + +a + 'at index ' + sideNum);
      // logArray(sides);
      sides[sideNum] = +a;
      // console.log('just wrote to sides');
      // logArray(sides);
    }
    // console.log('\nsides array has size ' + sides.length);
    if (sides.length > 0) {
      logArray(sides);
    }
  }

  for (i = 0; i < 3; i++) {
    // console.log('\n');
    getSide(i);
  }
  logArray(sides);

  let aa = sides[0];
  let bb = sides[1];
  let cc = sides[2];
  let area = computeArea(aa, bb, cc);
  console.log(area);
  // console.log(isNaN(area));
  let resultDiv = document.querySelector("#result");
  if (!isNaN(area)) {

    resultDiv.innerHTML = area + '';
  } else {
    resultDiv.innerHTML = "we're not quite there yet ... check your inputs";
  }
}

function computeArea(a, b, c) {
  let p = (a + b + c) / 2;
  let terms = p;
  console.log(terms);
  terms *= p - a;
  console.log(terms);
  terms *= (p - b);
  console.log(terms);
  terms *= (p - c);
  console.log(terms);
  let areaResult = Math.sqrt(terms);
  console.log(areaResult);
  return areaResult;
}