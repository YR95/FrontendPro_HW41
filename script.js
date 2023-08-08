const images = ["grater", "pastry-bag", "scale", "whisk"];
const buttonNext = document.createElement("input");
const buttonPrev = document.createElement("input");
const img = document.createElement("img");

function renderNodes() {
  const div = document.createElement("div");
  div.classList.add('divGroup');

  buttonNext.type = "button";
  buttonPrev.type = "button";

  buttonNext.value = "Next";
  buttonPrev.value = "Prev";

  buttonNext.id = "next"
  buttonPrev.id = "prev"

  buttonNext.classList.add('buttonNext');
  buttonPrev.classList.add('buttonPrev');
  img.src = `./images/${images[3]}.svg`;

  div.append(buttonPrev, img, buttonNext);
  document.body.append(div);
}

buttonPrev.addEventListener('click', () => {
  buttonNext.classList.remove("toggleButton");

  let currentImg = img.getAttribute('src')
  .substring(9)
  .replace(".svg", "");
  let currentImgIndex = images.indexOf(currentImg);

  if (currentImgIndex !== 0) {
    img.src = `./images/${images[currentImgIndex - 1]}.svg`;
    currentImgIndex--;
  } else {
    currentImgIndex = 0;
    img.src = `./images/${images[currentImgIndex]}.svg`;
    buttonPrev.classList.toggle("toggleButton");

  }

})
buttonNext.addEventListener('click', () => {
  buttonPrev.classList.remove("toggleButton");
  let currentImg = img.getAttribute('src')
  .substring(9)
  .replace(".svg", "");
  let currentImgIndex = images.indexOf(currentImg);

  if (currentImgIndex !== images.length - 1) {
    buttonNext.classList.remove("toggleButton");
    img.src = `./images/${images[currentImgIndex + 1]}.svg`;
    currentImgIndex++;
  } else {
    currentImgIndex = images.length - 1;
    img.src = `./images/${images[currentImgIndex]}.svg`;
    buttonNext.classList.toggle("toggleButton");

  }

})

console.log(images)
renderNodes();
