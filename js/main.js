'use strict';

var fr = new FileReader();

var uploadBtn = document.querySelector('.item__button-file');
var fileField = document.querySelector('#image');
var profileImage = document.querySelector('.personal-image');

function getImage(e){
  var myFile = e.currentTarget.files[0];
  fr.addEventListener('load', writeImage);
  fr.readAsDataURL(myFile);
}

function writeImage() {
  profileImage.src= fr.result;
}

function fakeFileClick() {
  fileField.click();
}

fileField.addEventListener('change', getImage);
uploadBtn.addEventListener('click', fakeFileClick);
