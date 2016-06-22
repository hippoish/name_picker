var wdi_24_names = ["Adrianna", "Andrew", "Christian", "Daniel", "David", "Desi", "Emily", "Jenny", "Kate", "Kevin", "Matt", "Michael", "Ramin", "Taylor"];

function randomName() {
  var number = Math.random() * wdi_24_names.length;
  number = Math.floor(number);
  var name = wdi_24_names[number];
  console.log(name);
}

randomName();
