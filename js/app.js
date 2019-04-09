'use strict';

let images = [];

function ProductImage(imgName, filetype) {
  this.name = imgName;
  this.filetype = filetype;
  this.filepath = `img/${imgName}.${filetype}`;
  this.clicks = 0;
  this.views = 0;
  images.push(this);
}

function generateRandomImages() {
  let threeRandomImages = [];

  for (let i = 0; i < 3; i++) {
    let index = Math.floor(Math.random() * images.length);
    console.log(index);

    threeRandomImages.push(images[index].filepath);
  }
  console.log('threeRandom: ', threeRandomImages);

  let display = document.getElementById('products');

  threeRandomImages.forEach((image) => {
    let product = document.createElement('IMG');
    product.setAttribute('src', `${image}`);
    product.setAttribute('class', 'product-image');
    display.appendChild(product);
  });
}

new ProductImage('bag', 'jpg');
new ProductImage('banana', 'jpg');
new ProductImage('bathroom', 'jpg');
new ProductImage('boots', 'jpg');
new ProductImage('breakfast', 'jpg');
new ProductImage('bubblegum', 'jpg');
new ProductImage('chair', 'jpg');
new ProductImage('cthulhu', 'jpg');
new ProductImage('dog-duck', 'jpg');
new ProductImage('dragon', 'jpg');
new ProductImage('pen', 'jpg');
new ProductImage('pet-sweep', 'jpg');
new ProductImage('scissors', 'jpg');
new ProductImage('shark', 'jpg');
new ProductImage('sweep', 'png');
new ProductImage('tauntaun', 'jpg');
new ProductImage('unicorn', 'jpg');
new ProductImage('usb', 'gif');
new ProductImage('water-can', 'jpg');
new ProductImage('wine-glass', 'jpg');


generateRandomImages();

console.log(images);
