var swiper = new Swiper(".mySwiper", {
  spaceBetween: 30,
  centeredSlides: true,
  autoplay: {
    delay: 2500,
    disableOnInteraction: false,
  },
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
});


let menu = document.querySelector(".menu-icon");
let navbar = document.querySelector(".navbar");

menu.onclick = () =>{
  menu.classList.toggle("move");
  navbar.classList.toggle("open-menu");
};


window.onscroll = () =>{
  menu.classList.remove("move");
  navbar.classList.remove("open-menu");
} 

  
const animate = ScrollReveal({
  origin: 'top',
  distance: '60px',
  duration: '2000',
  delay: '400',
});


let cartIcon = document.querySelector("#cart-icon");
let cart = document.querySelector(".cart");
let closeCart = document.querySelector("#close-cart");

cartIcon.onclick = ()=>{
  cart.classList.add("active");
};
closeCart.onclick = ()=>{
  cart.classList.remove("active");
};

if(document.readyState == "loading"){
  document.addEventListener("DOMContentLoaded", ready);
} else {
  ready();
}

function ready(){
  var removeCartButtons = document.getElementsByClassName('cart-remove')
  console.log(removeCartButtons); 
  for(var i = 0; i< removeCartButtons.length; i++){
    var button = removeCartButtons[i];
    button.addEventListener('click', removeCartItem);
}
   var quantityInputs = document.getElementsByClassName('cart-quantity');
   for ( var i = 0; i< quantityInputs.length; i++){
    var input = quantityInputs[i];
    input.addEventListener("change", quantityChanged);
   }
   var addCart = document.getElementsByClassName('add-cart');
   for(var i = 0; i< addCart.length; i++){
    var button = addCart[i];
    button.addEventListener('click', addCartClicked);
   }
}

function removeCartItem(event){
  var buttonClicked = event.target;
  buttonClicked.parentElement.remove();
  updatetotal();
}

function quantityChanged(event){
  var input = event.target;
  if (isNaN(input.value) || input.value <= 0){
    input.value = 1;
  }
  updatetotal();
}

function addCartClicked(event){
  var button = event.target;
  var productBox = button.closest('.product-box');
  var titleElement = productBox.querySelector('.product-title');
  var priceElement = productBox.querySelector('.price');
  var imgElement = productBox.querySelector('.product-img');

  if (titleElement && priceElement && imgElement) {
    var title = titleElement.innerText;
    var price = priceElement.innerText;
    var img = imgElement.src;
    addProductToCart(title, price, img);
  } else {
    console.error("Không thể tìm thấy một hoặc nhiều phần tử cần thiết trong phần tử cha .product-box.");
  }
}

function addProductToCart(title, price, img){
  var cartItems = document.getElementsByClassName("cart-content")[0];
  var cartItemsNames = cartItems.getElementsByClassName('cart-product-title');
  for (var i = 0; i < cartItemsNames.length; i++) {
    var existingTitle = cartItemsNames[i].innerText;
    if (existingTitle === title) {
      alert('Bạn đã thêm sản phẩm này vào giỏ hàng rồi');
      return; 
    }
  }

  var cartShopBox = document.createElement('div');
  cartShopBox.classList.add('cart-box');

  var cartBoxContent = `
    <img src="${img}" alt="" class="cart-img">
    <div class="detail-box">
        <div class="cart-product-title">${title}</div>
        <div class="cart-price">${price} VND</div>
        <input type="number" value="1" class="cart-quantity">
    </div>
    <i class='bx bx-trash-alt cart-remove'></i>`;
  cartShopBox.innerHTML = cartBoxContent;
  cartItems.append(cartShopBox);

  
  cartShopBox.querySelector('.cart-remove').addEventListener('click', removeCartItem);
  cartShopBox.querySelector('.cart-quantity').addEventListener('change', quantityChanged);
  updatetotal();
}

document.getElementsByClassName('btn-buy')[0].addEventListener('click', buyButtonClicked);
function buyButtonClicked(){
  alert("Đơn Hàng Của Bạn Đã Được Đặt Thành Công");
  var cartContent = document.getElementsByClassName('cart-content')[0];
  while (cartContent.hasChildNodes()){
    cartContent.removeChild(cartContent.firstChild);
  }
  updatetotal();
}

  function updatetotal(){
  var cartContent = document.getElementsByClassName("cart-content")[0];
  var cartBoxes = cartContent.getElementsByClassName("cart-box");
  var total = 0;
  for (var i = 0 ; i < cartBoxes.length; i++){
  var cartBox = cartBoxes[i];
  var priceElement = cartBox.getElementsByClassName("cart-price")[0];
  var quantityElement = cartBox.getElementsByClassName("cart-quantity")[0];
  var price = parseFloat(priceElement.innerText.replace("VND", ""));
  var quantity = quantityElement.value;
  total = total + (price * quantity);

  document.getElementsByClassName("total-price")[0].innerText = total + "VND";
}
var formattedTotal = total.toFixed(3).replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1,');
  
  document.getElementsByClassName("total-price")[0].innerText = formattedTotal + " VND";
}



animate.reveal(".nav");
animate.reveal(".home-text", {origin:"left"});
animate.reveal(".home-img", {origin:"bottom"});
animate.reveal(".ser-box , .product-box, .team-box, .book-data", {interval: 100});