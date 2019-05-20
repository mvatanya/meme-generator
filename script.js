//add event listener to the button add memes
//in the function, read input value of image url
//find image tag in the page
//set the source of the image tag to be that url that you read from the input

window.addEventListener("DOMContentLoaded", () => {
  var buttonElement = document.getElementById("button-add-memes");
  buttonElement.addEventListener("click", function(event) {
    event.preventDefault();
    var imageUrl = document.getElementById("image-input").value;
    var imageTag = document.getElementsByTagName("img")[0];
    imageTag.src = imageUrl;
    var topText = document.getElementById("top-text-input").value;
    var bottomText = document.getElementById("bottom-text-input").value;
    var topMemeTextElement = document.getElementById("top-text");
    topMemeTextElement.textContent = topText;
    var bottomMemeTextElement = document.getElementById("bottom-text");
    bottomMemeTextElement.textContent = bottomText;
  });
});
