function rotateLeft() {
  let stringDiv = document.querySelector("#stringr");
  let orig = stringDiv.innerHTML;
  let first = orig[0];
  let remaining = orig.slice(1);
  stringDiv.innerHTML = remaining + first;
}

function rotateRight() {
  let stringDiv = document.querySelector("#stringr");
  let orig = stringDiv.innerHTML;
  // console.log('orig = ' + orig);
  let ix = orig.length - 1;
  // console.log('ix=' + ix);
  let last = orig[ix];
  let remaining = orig.slice(0, ix);
  stringDiv.innerHTML = last + remaining;
}