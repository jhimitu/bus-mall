'use strict';

let images = [];

function ProductImage(imgName) {
  this.name = imgName;
  this.filepath = `img/${imgName}.jpg`;
  this.clicks = 0;
  this.views = 0;
  images.push(this);
}

new ProductImage('bag');
new ProductImage('banana');
new ProductImage('bathroom');
new ProductImage('boots');
new ProductImage('breakfast');
new ProductImage('bubblegum');
new ProductImage('chair');
new ProductImage('cthulhu');
new ProductImage('dog-duck');
new ProductImage('dragon');
new ProductImage('pen');
new ProductImage('pet-sweep');
new ProductImage('scissors');
new ProductImage('shark');
new ProductImage('sweep');
new ProductImage('tauntaun');
new ProductImage('unicorn');
new ProductImage('usb');
new ProductImage('water-can');
new ProductImage('wine-glass');

function generateRandomImages() {
  let threeRandomImages = [];

  for (let i = 0; i < 3; i++) {
    threeRandomImages.push(images[Math.floor(Math.random() * images.length)].filepath);
  }
  console.log(threeRandomImages);
}

generateRandomImages();

console.log(images);
