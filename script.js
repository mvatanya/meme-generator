//add event listener to the button add memes
//in the function, read input value of image url
//find image tag in the page
//set the source of the image tag to be that url that you read from the input

window.addEventListener("DOMContentLoaded", () => {
  var buttonElement = document.getElementById("button-add-memes");
  buttonElement.addEventListener("click", function(event) {
    event.preventDefault();

    var imageUrlInputElement = document.getElementById("image-input");
    var imageTag = document.getElementsByTagName("img")[0];
    imageTag.src = imageUrlInputElement.value;
    imageUrlInputElement.value = "";

    var bottomTextInputElement = document.getElementById("bottom-text-input");
    var bottomMemeTextElement = document.getElementById("bottom-text");
    bottomMemeTextElement.textContent = bottomTextInputElement.value;
    bottomTextInputElement.value = "";

    var topTextInputElement = document.getElementById("top-text-input");
    var topMemeTextElement = document.getElementById("top-text");
    topMemeTextElement.textContent = topTextInputElement.value;
    topTextInputElement.value = "";
  });
});
