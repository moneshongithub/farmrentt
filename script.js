$(window).on('load',function(){
	setTimeout(function(){ // allowing 3 secs to fade out loader
	$('.page-loader').fadeOut('slow');
	},3500);
});

const wrapper = document.querySelector('.wrapper');
const loginLink = document.querySelector('.login-link');
const registerLink = document.querySelector('.register-link');
const btnpopup = document.querySelector('.btnLogin-popup');
const iconClose = document.querySelector('.icon-close');

registerLink.addEventListener('click',()=>{
	wrapper.classList.add('active')
})

loginLink.addEventListener('click',()=>{
	wrapper.classList.remove('active')
})

btnpopup.addEventListener('click',()=>{
	wrapper.classList.add('active-popup')
})

iconClose.addEventListener('click',()=>{
	wrapper.classList.remove('active-popup')
})

var tl = gsap.timeline({
	scrollTrigger: {
		trigger: "#first",
		start: "top top",
		scrub: 1,
		pin: true,
		markers: true,
	}
})

ti.
to(
	
)
