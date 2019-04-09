'use strict';

let images = [];
let currentDisplay = [];
console.log(currentDisplay);
let totalClicks = 0;
let display = document.getElementById('products');
let products = display.getElementsByTagName('IMG');

function ProductImage(imgName, filetype) {
  this.name = imgName;
  this.filetype = filetype;
  this.filepath = `img/${imgName}.${filetype}`;
  this.clicks = 0;
  this.views = 0;
  this.justSeen = false;
  images.push(this);
}

function generateRandomImages() {
  let threeRandomImages = [];

  for (let i = 0; threeRandomImages.length < 3; i++) {
    let index = Math.floor(Math.random() * images.length);
    if(!threeRandomImages.includes(images[index].filepath)) {
      threeRandomImages.push(images[index].filepath);
      images[index].views++;
    }
  }
  for (let i = 0; i < products.length; i++) {
    products[i].setAttribute('src', threeRandomImages[i]);
  }
  console.log(threeRandomImages);
  console.log(currentDisplay);
  currentDisplay = threeRandomImages.slice();
}

function handleVoteClick(e) {
  if (totalClicks < 25) {
    generateRandomImages();
    images.forEach((image) => {
      if (`${e.target.baseURI}${image.filepath}` === e.target.currentSrc) {
        image.clicks++;
      }
    });
    totalClicks++;

    if (totalClicks === 25) {
      let results = document.getElementById('results');
      images.forEach((image) => {
        console.log(image);
        let liEl = document.createElement('li');
        console.log(liEl);
        liEl.textContent = `${image.name}: ${image.clicks} votes`;
        results.appendChild(liEl);
      });
    }
  }
  console.log(totalClicks);
  console.log(images);
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
display.addEventListener('click', handleVoteClick);


