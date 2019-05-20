//add event listener to the button add memes
//in the function, read input value of image url
//find image tag in the page
//set the source of the image tag to be that url that you read from the input

window.addEventListener("DOMContentLoaded", () => {
  var buttonElement = document.getElementById("button-add-memes");
  buttonElement.addEventListener("click", function(event) {
    event.preventDefault();
    //create a container to put every memes in
    var memeContainer = document.createElement("div");
    //create elements for each meme that will be appended in the memeContainer
    var pTop = document.createElement("p");
    var pBottom = document.createElement("p");
    var img = document.createElement("img");
    //create class for each elements
    memeContainer.className = "meme-container";
    pTop.className = "top-text";
    pBottom.className = "bottom-text";
    img.className = "img-input";
    //put image source in the element that is created for image (img)
    var imageUrlInputElement = document.getElementById("image-input");
    img.src = imageUrlInputElement.value;
    imageUrlInputElement.value = "";
    //put value of toptext in the element that is created for the top text (pTop)
    var topTextInputElement = document.getElementById("top-text-input");
    pTop.textContent = topTextInputElement.value;
    topTextInputElement.value = "";
    //put value of bottomtext in the element that is created for the bottom text (pBottom)
    var bottomTextInputElement = document.getElementById("bottom-text-input");
    pBottom.textContent = bottomTextInputElement.value;
    bottomTextInputElement.value = "";
    //append each element in to the meme container
    memeContainer.appendChild(pTop);
    memeContainer.appendChild(pBottom);
    memeContainer.appendChild(img);
    //append each meme container into the big memes container
    var allMemeContainerElement = document.getElementById("all-meme-container");
    allMemeContainerElement.appendChild(memeContainer);
  });
});
