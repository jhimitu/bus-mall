'use strict';

let images = [];
let currentThreeImages = [];
let votingScores = [];
let totalClicks = 0;
let display = document.getElementById('products');
let products = display.getElementsByTagName('IMG');
let chartDisplay = document.getElementById('chart');
let productSection = document.getElementById('product-section');
chartDisplay.style.display = 'none';

function ProductImage(imgName, filetype) {
  this.name = imgName;
  this.filetype = filetype;
  this.filepath = `img/${imgName}.${filetype}`;
  this.clicks = 0;
  this.views = 0;
  images.push(this);
}

function generateRandomImages() {
  let threeNewImages = [];

  for (let i = 0; threeNewImages.length < 3; i++) {
    let index = Math.floor(Math.random() * images.length);
    if(!threeNewImages.includes(images[index].filepath) && 
       !currentThreeImages.includes(images[index].filepath)) {
      threeNewImages.push(images[index].filepath);
      images[index].views++;
    }
  }
  for (let i = 0; i < products.length; i++) {
    products[i].setAttribute('src', threeNewImages[i]);
  }
  currentThreeImages = threeNewImages.slice();
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
      chartDisplay.style.display = '';
      productSection.style.display = 'none';
      images.forEach((image) => {
        votingScores.push(image.clicks);
        console.log('voting scores in app', votingScores);
      });
      window.localStorage.setItem('votingResults', JSON.stringify(votingScores));
      window.localStorage.setItem('clicks', totalClicks);
      votingScores.forEach((votingScore) => {
        chart.config.data.datasets[0].data.push(votingScore);
        console.log('chart data in loop', chart.config.data.datasets[0].data);
      });
      let votesInStorage = window.localStorage.getItem('clicks');
      window.localStorage.setItem('clicks', totalClicks + JSON.parse(votesInStorage));
      chart.update();
    }
  }
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
