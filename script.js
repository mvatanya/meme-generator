//add event listener to the button add memes


window.addEventListener('DOMContentLoaded', () => {
  var buttonElement = document.getElementById('button-add-memes');
  buttonElement.addEventListener('click', function (event) {
    event.preventDefault();
    var imageUrl = document.getElementById('image-input').value;
    var imageTag = document.getElementsByTagName('img')[0];
    imageTag.src = imageUrl;
    var topText = document.getElementById('top-text').value;
    var bottomText = document.getElementById('bottom-text').value;
  });
});

//in the function, read input value of image url

//find image tag in the page


//set the source of the image tag to be that url that you read from the input