var wdi_24_names = ["Adrianna", "Andrew", "Christian", "Daniel", "David", "Desi", "Emily", "Jenny", "Kate", "Kevin", "Matt", "Michael", "Ramin", "Taylor"];

var called = [];
var randomName = function() {
  // generate random number between 0 and 13
  var number = Math.floor(Math.random() * wdi_24_names.length);
  // find the name at that random index
  var name = wdi_24_names[number];
  // check how many names have been called
  if (called.length === wdi_24_names.length) {
    called = [];
  }
  // check whether the name has been called,
  // if it has not, add it to the called array
  if (called.indexOf(name) === -1) {
    called.push(name);
    // show the name in the console
    console.log(name);
  }
  // if the name has been called, pick another random name
  else {
    randomName();
  }
  // document.getElementById('displayName').textContent = wdi_24_names[number];
}
