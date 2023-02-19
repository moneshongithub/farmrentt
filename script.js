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
	   delay:0.5
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
 
