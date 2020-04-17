let myHeading = document.querySelector('h1');
myHeading.textContent = 'Hello world!';

myImage = document.querySelector('img');
var blinkFunc = function() {
    let mySrc = myImage.getAttribute('src');
    console.log(mySrc);
    if(mySrc === 'images/then.png') {
      myImage.setAttribute ('src','images/there.svg');
    } else if(mySrc === 'images/there.svg') {
      myImage.setAttribute ('src','images/were.svg');
    }else if(mySrc === 'images/were.svg') {
      myImage.setAttribute ('src','images/none.svg');
    }else if(mySrc === 'images/none.svg') {
      myImage.setAttribute ('src','images/then.png');
    }
};

setInterval(blinkFunc, 1000);

let myButton = document.querySelector('button');
function setUserName() {
  let myName = prompt('Please enter your name.');
  if(!myName || myName === null) {
    setUserName();
  } else {
    localStorage.setItem('name', myName);
    myHeading.innerHTML = 'You are cool, ' + myName;
  }
}

if(!localStorage.getItem('name')) {
  setUserName();
} else {
  let storedName = localStorage.getItem('name');
  myHeading.textContent = 'Mozilla is cool, ' + storedName;
}

myButton.onclick = function() {
  setUserName();
}