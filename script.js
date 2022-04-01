let button = document.getElementById("question-button");
let main = document.getElementById("question");
let image =document.getElementById("question-image")

button.addEventListener("click", function () {
  if (main.style.display == "none") {
    main.style.display = "block";
    image.id = "question-image-spin"
  } else {
    main.style.display = "none";
    image.id = "question-image"
  }
});
