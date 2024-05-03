
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

  //Menu Open Close
  let menu = document.querySelector(".menu-icon");
  let navbar = document.querySelector(".navbar");

  menu.onclick = () =>{
    menu.classList.toggle("move");
    navbar.classList.toggle("open-menu");
  };

  //Menu close When Scroll
  window.onscroll = () =>{
    menu.classList.remove("move");
    navbar.classList.remove("open-menu");
  } 

  //Sroll Animation   
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
 }

function removeCartItem(event){
  var buttonClicked = event.target
  buttonClicked.parentElement.remove()
}

function updatetotal(){
  var cartContent = document.getElementsByClassName("cart-content")[0];
  var cartBoxes = cartContent.getElementsByClassName("cart-box");
  var total = 0;
  for (var i = 0 ; i < cartBoxes.length; i++){
    var cartBox = cartBoxes[i];
    var priceElement = cartBox.getElementsByClassName("cart-price")[0];
    var quantityElement = cartBox.getElementsByClassName("cart-quantity")[0];
    var price = parseFloat(priceElement.innerText.replace("Dong", ""));
    var quantity = quantityElement.value;
    total = total + (price * quantity);

    document.getElementsByClassName("total-price")[0].innerText = "Dong" + total;
  }

}

  animate.reveal(".nav");
  animate.reveal(".home-text", {origin:"left"});
  animate.reveal(".home-img", {origin:"bottom"});
  animate.reveal(".ser-box , .product-box, .team-box, .book-data", {interval: 100});