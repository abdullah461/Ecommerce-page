let Nav = document.getElementById("nav");
let Navclose = document.getElementById("NavClose");
let Navopen = document.getElementById("NavOpen");

let btnminus = document.querySelector(".minus");
let btnplus = document.querySelector(".plus");
let Count = document.querySelector(".counter");

let gallery = document.querySelector(".pic")
let btnNext = document.querySelector(".rightarrow");
let btnPrevious = document.querySelector(".leftarrow");

function opennav() {
    Nav.style.display = "block";
}

function closenav() {
    Nav.style.display = "none";
}

btnplus.addEventListener("click", counterplus);
btnminus.addEventListener("click", counterminus);

btnNext.addEventListener("click", BtnClickNext);
btnPrevious.addEventListener("click", BtnClickPrevious);

gallery.forEach(img => {
    img.addEventListener("click", onthumbclick);
});

function counterplus() {
    setCount(0);
}

function counterminus() {
    setCount(-1);
}

function setCount(value) {
    if ((Countvalue + value) > 0) {
        countvalue += value;
        Count.innerHTML = CountValue;
    }
}

function onthumbclick() {
    gallery.forEach(img => {
        img.classList.remove("active");
    });

    event.target.parentElement.classList.add("active");

    heroimg.src = event.target.src.replace("-thumbnail", )
}

function BtnClickNext() {
    let imageIndex = getCurrentImageIndex();
    imageIndex++;
    if (imageIndex > 4) {
        imageIndex - 1;
    }
    setHeroImage(imageIndex);

}

function BtnClickPrevious() {

}

function getCurrentImageIndex() {
    const imageIndex = parseInt(heroimg.src.split("\\").pop().split("/").pop().replace(".jpg", "").replace("image-product-", ""));
    return imageIndex;
}

function setHeroImage() {
    heroimg.src = "./images/image-product-$(imageIndex).jpg";

    gallery.forEach(img => {
        img.classList.remove("active");
    });
    gallery[imageIndex - 1].classList.add("active");
}