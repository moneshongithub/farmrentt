// ####### loader ##########

$(window).on('load',function(){
	setTimeout(function(){ // allowing 3 secs to fade out loader
	$('.page-loader').fadeOut('slow');
	},1500);
});

// ############ login ##########

const wrapper = document.querySelector('.wrapper');
const loginLink = document.querySelector('.login-link');
const registerLink = document.querySelector('.register-link');
const btnPopup = document.querySelector('.btnLogin-popup');
const iconClose = document.querySelector('.icon-close');

registerLink.addEventListener('click',()=>{
	wrapper.classList.add('active')
})

loginLink.addEventListener('click',()=>{
	wrapper.classList.remove('active')
})


iconClose.addEventListener('click',()=>{
	wrapper.classList.remove('active-popup')
})

btnPopup.addEventListener('click',()=>{
	wrapper.classList.add('active-popup')
})

// ########### centerimages #########

var tl = gsap.timeline();
tl.to("#nav", {
		opacity: 1,
	   ease:"power1",
	   duration: 2,
	   top:"0%",
	   delay:1.8
},'one')

var tl = gsap.timeline();
tl.to("#one", {
	opacity: 1,
	   y:"-60%",
	   x:"50%",
	   ease:"power1",
	   duration: 2.5,
},'one')
tl.to("#three", {
	opacity: 1,
		y:"-60%",
		x:"-45%",
		duration: 2.5,
		ease:"power1",
},'one')
tl.to("#two", {
	opacity: 1,
		ease:"power1",
		duration: 2.5,
		y:"-60%",
},'one')
 

var marketpage = document.querySelector("#marketpage")
var market = document.querySelector("#centerdiv button")
market.addEventListener("click",function(dets){

	document.querySelector("#marketloader").style.left="0%"

	setTimeout(() => {
		document.querySelector("#marketpage").style.transform="scale(1)"
		document.querySelector("#marketpage").style.pointerEvents="all"

		  }, "2000")
	

	setTimeout(() => {
	document.querySelector("#marketloader").style.left="100%"
	  }, "3000")


})
var marketicon = document.querySelector("#mlefticon").addEventListener("click",function(icon){
	document.querySelector("#marketloader").style.left="0%"
	setTimeout(() => {
		document.querySelector("#marketpage").style.transform="scale(0)"
		document.querySelector("#marketpage").style.pointerEvents="none"

		  }, "1000")
	setTimeout(() => {
		document.querySelector("#marketloader").style.left="-100%"
		  }, "2000")
		  

})

