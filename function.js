let imagesHtml = [];
let categoria = null;
function activeItem(category) {
  let active = document.getElementsByClassName("activeButton");
  active[0].classList.remove("activeButton");
  if (category == null) {
    document.getElementById("all").classList.add("activeButton");
  }
  if (category == "branding") {
    document.getElementById("branding").classList.add("activeButton");
  }
  if (category == "web") {
    document.getElementById("web").classList.add("activeButton");
  }
  if (category == "photography") {
    document.getElementById("photography").classList.add("activeButton");
  }
  if (category == "app") {
    document.getElementById("app").classList.add("activeButton");
  }
}
function selectCategory(category) {
  activeItem(category);
  document.getElementById("row").innerHTML = "";
  categoria = category;
  images.forEach(innerImages);
}
function innerImages(item, index) {
  //   console.log(categoria)
  if (categoria == item.category || categoria == null) {
    let contador = index + 1;
    let row = document.getElementById("row");
    imagesHtml[index] = `<img src='${item.image}' class='image'></img>`;
    if (contador % 3 == 0) {
      row.innerHTML +=
        "<div class='column'>" +
        imagesHtml[index - 2] +
        imagesHtml[index - 1] +
        imagesHtml[index] +
        "</div>";
    }
  }
}
function loadImages() {
  images.forEach(innerImages);
}
function menuMobile() {
  var x = document.getElementById("menuMobile");
  if (x.style.display === "block") {
    x.style.display = "none";
  } else {
    x.style.display = "block";
  }
}
loadImages();
