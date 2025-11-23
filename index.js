let question = document.querySelectorAll(".question")
let answer = document.getElementsByClassName("answer")

question.forEach((element, id) => {
    element.addEventListener("click", function() {
        console.log(id)
        answer[id].style.display = answer[id].style.display == "none" ? "block" : "none"
        answer[id].style.height = answer[id].style.height == "100%" ? "0%" : "100%"
    })
});
let imageArray = []
let titleArray = []
let authorArray = []
let priceArray = []
let genreArray = []
document.querySelectorAll(".section4 .card .primary").forEach((e, index) => {
    let id = index
    e.addEventListener("click", () => {
        saveProduct(titleArray[id], imageArray[id], priceArray[id], authorArray[id], genreArray[id])
        window.location.assign("/payment.html")
    })
})
$('.section4 .image').each(function() {
    var backgroundImage = $(this).css('background-image');
    var imageUrl = backgroundImage.replace(/^url\(['"]?/, '').replace(/['"]?\)$/, '').replace("http://127.0.0.1:5500/", " ");
    imageArray.push(imageUrl)
});
$('.section4 .card .title').each(function() {
    var content = $(this).text().replace(/\s\s+/g, '');
    titleArray.push(content)
});
$('.section4 .author').each(function() {
    var content = $(this).text().replace(/\s\s+/g, '');
;
    authorArray.push(content)
});
$('.section4 .price').each(function() {
    var content = $(this).text().replace(/\s\s+/g, '');
    priceArray.push(content)
});
$('.section4 .desc').each(function() {
    var content = $(this).text().replace(/\s\s+/g, '');
    genreArray.push(content)
});

function saveProduct(name, url, price, author, genre) {
    let productData = {
        name: name,
        url: url,
        price: price,
        author: author,
        genre: genre,
    }
    localStorage.setItem("productData", JSON.stringify(productData))
}
function loadProduct() {
    let productData = localStorage.getItem("productData");
    productData = JSON.parse(productData);
    document.querySelector("#name").textContent = productData.name
    document.querySelector(".price").textContent = productData.price
    document.querySelector(".image").style.backgroundImage = `url(${productData.url})`
    document.querySelector(".author").textContent = productData.author
    document.querySelector(".genre").textContent = productData.genre
    return productData;
}
function action(target, mode) {
    if (mode == "transfer") {
        window.location.assign(target)
    } else {
        document.querySelector(target).scrollIntoView({ behavior: "smooth" });
    }
}