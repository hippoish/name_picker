var wdi_24_names = [
  {
    name: "Adrianna",
    picture: 'http://www.pawderosa.com/images/puppies.jpg'
  },
  {
    name: "Andrew",
    picture: 'https://cdn.fstoppers.com/styles/full/s3/media/2016/05/23/puppy-lick-puppies-licking-8.jpg'
  },
  {
    name: "Christian",
    picture: 'https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcRbvYI9i0fc4sFqKMArnL5UyWjKCEJRCqiUkSg29TubfVcgcRzP'
  },
  {
    name: "Daniel",
    picture: 'http://iambored.pro/wp-content/uploads/2016/03/happy-puppies.jpg'
  },
  {
    name: "David",
    picture: 'https://s-media-cache-ak0.pinimg.com/564x/ab/0e/ce/ab0ece23e44a78bb48df99973c1c4f82.jpg'
  },
  {
    name: "Desi",
    picture: 'https://s-media-cache-ak0.pinimg.com/564x/00/fa/82/00fa82a552e91b743c3ba0a8e8d147dd.jpg'
  },
  {
    name: "Emily",
    picture: 'https://s-media-cache-ak0.pinimg.com/564x/af/13/bd/af13bdeac9809ab599734f598accea07.jpg',
  },
  {
    name: 'Jenny',
    picture: 'https://www.dogspuppiesforsale.com/uploads/source/Category%20update/Pomeranian/fb92cb95d9a0be75e285ef4e78d5a8ce.jpg'
  },
  {
    name: 'Kevin',
    picture: 'https://s-media-cache-ak0.pinimg.com/564x/dd/a4/3b/dda43bf31a3e21896a423f19fbebdf70.jpg'
  },
  {
    name: 'Matt',
    picture: 'https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcSaOVBOoBqUY1_Ll4szHBYv1mOqq7qzWKp-YgFJs4CcPglDNh36'
  },
  {
    name: 'Michael',
    picture: 'https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcRwavi8w6alPfEylWsmglF-IDZo_kiCXfkFMWuTdJRpeQ1i5-0Hqg'
  },
  {
    name: 'Taylor',
    picture: 'https://puppydogweb.com/wp-content/uploads/2015/05/St._Bernard_puppy.jpg'
  },
  {
    name: 'Mike',
    picture: 'https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcTo5uBzRGUa13cNSU4QMGBnJD4D8CYvmhLOQV7iYDANzy23TOrqtw'
  },
  {
    name: 'Kate',
    picture: 'https://s-media-cache-ak0.pinimg.com/564x/09/59/08/09590801ade7f0927827763692e5bc30.jpg'
  },
  {
    name: 'Mark',
    picture: 'https://www.royalcanin.com/~/media/Royal-Canin/Product-Categories/dog-puppy-landing-hero.ashx'
  },
  {
    name: 'Loris',
    picture: 'https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcSM-F5huVpQ9ANTdV924g_kYHV5zxtdBPjB_xXWE5xx6YP2lOKE'
  }
];


function randomName() {
  // generate random number between 0 and the number of people in the class - 1
  var number = Math.floor(Math.random() * wdi_24_names.length);
  // find the name at that random index
  var person = wdi_24_names[number];
  // array of called names begins empty
  var called = [];

  // change the page to reflect the
  $('#displayName').html(person.name);
  $('#question').attr('hidden', true);
  $('#puppy-pic').attr('hidden', false);
  $('#puppy-pic').attr('src', person.picture);
  console.log(person.name);

  // add the name to the called array and remove it from the orginal array
  called.push(person);
  wdi_24_names.splice(wdi_24_names.indexOf(person), 1);

  // reset 'called' and 'names' arrays if everyone has been called
  if (wdi_24_names.length === 0) {
    wdi_24_names = called;
    called = [];
  }

}
