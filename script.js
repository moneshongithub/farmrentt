
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
 

// var marketpage = document.querySelector("#marketpage")

// var market = document.querySelector("#centerdiv button")
// market.addEventListener("click",function(dets){

// 	document.querySelector("#marketloader").style.left="0%"
	
// 	document.querySelector("#first").style.position="relative"       
// 	document.querySelector("#marketpage").style.height="100vh"
// 	document.querySelector("#second").style.height="0"
// 	document.querySelector("#third").style.height="0"
// 	document.querySelector("#fourth").style.height="0"

// 	document.querySelector("#first").style.height="100vh"
	




// 	setTimeout(() => {
// 		document.querySelector("#marketpage").style.transform="scale(1)"
// 		document.querySelector("#marketpage").style.pointerEvents="all"

// 		  }, "1500")
	

// 	setTimeout(() => {
// 	document.querySelector("#marketloader").style.left="100%"
// 	  }, "1800")

// 	  var tl2 = gsap.timeline();
// 	  tl2.from("#mleft h1", {
// 		x: -380,
		// ease: "power4.out",
		// skewY: 10,
// 		delay: 2,
// 		duration:2,
// 		stagger: {
// 		  amount: 0.3
// 		}
// 	  })
	  
// })


// var marketnav = document.querySelector("#bc")
// marketnav.addEventListener("click",function(dets){

// 	document.querySelector("#marketloader").style.left="0%"
	
// 	document.querySelector("#first").style.position="relative"
// 	document.querySelector("#marketpage").style.height="100vh"
// 	document.querySelector("#second").style.height="0"
// 	document.querySelector("#third").style.height="0"
// 	document.querySelector("#fourth").style.height="0"
// 	document.querySelector("#first").style.height="100vh"



// 	setTimeout(() => {
// 		document.querySelector("#marketpage").style.transform="scale(1)"
// 		document.querySelector("#marketpage").style.pointerEvents="all"

// 		  }, "1500")
	

// 	setTimeout(() => {
// 	document.querySelector("#marketloader").style.left="100%"
// 	  }, "1800")

// 	  gsap.from("#mleft h1", {
// 		x: -380,
// 		ease: "power4.out",
// 		delay: 3,
// 		duration:2,
// 		skewY: 10,
// 		stagger: {
// 		  amount: 0.3
// 		}
// 	  })
	  
	 
// })



// var marketicon = document.querySelector("#mlefticon").addEventListener("click",function(icon){
// 	document.querySelector("#marketloader").style.left="0%"
// 	document.querySelector("#first").style.position="initial"
// 	document.querySelector("#second").style.height="100vh"
// 	// document.querySelector("#mright").style.transform="scale(0)"
// 	document.querySelector("#buy").style.transform="scale(0)"
// 	document.querySelector(".rent").style.transform="scale(0)"
// 	document.querySelector(".sell").style.transform="scale(0)"
// 	// document.querySelector("#marketpage").style.height="140vh"

// 	document.querySelector("#third").style.height="100vh"
// 	document.querySelector("#first").style.height="140vh"
// 	document.querySelector("#fourth").style.height="120vh"
	
// 	setTimeout(() => {
// 		document.querySelector("#marketpage").style.transform="scale(0)"
// 		document.querySelector("#marketpage").style.pointerEvents="none"
// 		  }, "1500")
// 	setTimeout(() => {
// 		document.querySelector("#marketloader").style.left="-100%"
// 		  }, "1800")
		  
		
// })


// // var mlefticon = document.querySelector("#mleft .two").addEventListener("click",function(rent){
// // 	document.querySelector(".rent").style.transform="scale(1)"
// // 	document.querySelector("#	").style.transform="scale(0)"
// // 	document.querySelector(".sell").style.transform="scale(0)"

	
// // 	var tl7 = gsap.timeline();
// // 	tl7.from(".rent", {
// // 		x: 1010,
// // 		ease: "power4.out",
// // 		delay: 0,		
// // 		duration:1,
// // 		opacity:0
	  
// // 	  })
// // 	tl7.from(".rent h2", {
// // 		y: 101,
// // 		ease: "power4.out",
// // 		delay: -0.5,		
// // 		duration:2,
// // 		opacity:0
	  
// // 	  },'a')
	 
// // 	tl7.from(" #rentsteps h1 , p", {
// // 	  x: 850,
// // 	  ease: "power4.out",
// // 	  delay: -1.5,		
// // 	  duration:1,
// // 	  stagger:0.1
	
// // 	},'a')


// // })

// var mlefticon1 = document.querySelector("#mleft .one").addEventListener("click",function(buy){
// 	document.querySelector("#buy").style.transform="scale(1)"
// 	document.querySelector(".rent").style.transform="scale(0)"
// 	document.querySelector(".sell").style.transform="scale(0)"


// 	var tl3 = gsap.timeline();
// 	tl3.from("#buy h2", {
// 		y: -101,
// 		ease: "power4.out",
// 		delay: 0,		
// 		duration:1,
// 		opacity:0
	  
// 	  })
// 	tl3.from("#buy .buybox", {
// 	  x: 1010,
// 	  ease: "power4.out",
// 	  delay: -0.6	,		
// 	  duration:1,
	
// 	})
	
// })

// var mlefticon2 = document.querySelector("#mleft .three").addEventListener("click",function(sell){
// 	document.querySelector(".sell").style.transform="scale(1)"
// 	document.querySelector("#buy").style.transform="scale(0)"
// 	document.querySelector(".rent").style.transform="scale(0)"

// 	var tl8 = gsap.timeline();
// 	tl8.from(".sell ", {
// 		x: 1010,
// 		ease: "power4.out",
// 		delay: 0,		
// 		duration:1,
	  
// 	  })
// 	tl8.from(".sell h2", {
// 		y: 101,
// 		ease: "power4.out",
// 		delay: -0.5,		
// 		duration:1,
// 		opacity:0
	  
// 	  })
	  

// })



//  var tl4 = gsap.timeline({
// 	scrollTrigger:{
// 		trigger:'#buy h2',
// 		start:'top 78%',
// 		end:'bottom bottom',
// 		scrub:1,
// 		markers:true,
// 		y:"40",
// 		duration:1,
// 		opacity: 0,

// 		}

// })


var tl2 = gsap.timeline({
			scrollTrigger:{
				start:'top 78%',
				trigger:'#buy',
				end:'bottom bottom',
				scrub:1,
				// markers:true
		
				}
		})

tl2 .from('#buy h2', {
	duration:0.8,
	opacity: 0,
	y:"40",
	ease: "power4.out",
	skewY: 10,
	
})
tl2 .from('.buybox', {
	duration:0.8,
	opacity: 0,
	y:"40",
	stagger:0.3
	
	
})

var tl3 = gsap.timeline({
	scrollTrigger:{
		trigger:'.sell',
		start:'top 78%',
		end:'bottom bottom',
		scrub:1,
		// markers:true,
		ease: "power4.out",

		}
})

tl3 .from('.sell h2', {
	duration:0.8,
	opacity: 0,
	y:"40",
	stagger:0.2,
	ease: "power4.out",
	// skewY: 10,

})
tl3 .from('#sell1', {
	duration:0.5,
	opacity: 0,
	y:"40",
	delay:"-0.5"

})
tl3 .from('.sellleft', {
	duration:0.5,
	opacity: 0,
	x:"-50",
	delay:"-0.5"

})
tl3 .from('.sellright', {
	duration:0.5,
	opacity: 0,
	x:"50",
	delay:"-0.5"

})

var tl4 = gsap.timeline({
	scrollTrigger:{
		trigger:'.rent',
		start:'top 78%',
		end:'bottom bottom',
		scrub:1,
		// markers:true,
		ease: "power4.out",

		}
})

tl4 .from('.rent h2', {
	duration:0.8,
	opacity: 0,
	y:"40",

})
tl4 .from('#rent1', {
	duration:1,
	opacity: 0,
	y:"40",
	backgroundColor:"white"

})
tl4 .from('#rentsteps h1', {
	duration:0.8,
	opacity: 0,
	y:"40",

})
tl4 .from('#rentsteps p', {
	duration:0.8,
	opacity: 0,
	x:"40",

})
tl4 .from('.rentleft', {
	duration:0.8,
	opacity: 0,
	x:"-40",

},'a')
tl4 .from('.rentright', {
	duration:0.8,
	opacity: 0,
	x:"40",

},'a')




var tl5 = gsap.timeline({
	scrollTrigger:{
		trigger:'#second',
		start:'top 78%',
		end:'bottom bottom',
		scrub:1,
		ease: "power4.out",
		// markers:true

		}
})

   tl5 .from('#second h1', {
		y:"40",
		duration:0.8,
		opacity: 0,

	})
	.from('#second p', {
		y:"30",
		duration:0.8,
		delay:"-0.5",
		opacity: 0,
	})

	var tl6 = gsap.timeline({
		scrollTrigger:{
			trigger:'#third',
			start:'top 78%',
			end:'bottom bottom',
			scrub:1,
			ease: "power4.out",

			//    markers:true
			}
	})
	   tl6 .from('#third h1', {
			y:"40",
			duration:0.8,
			opacity: 0,
		})
		.from('#third p', {
			y:"40",
			duration:0.6,
			delay:"-0.5",
			opacity: 0,
			
		},)

		.to('#third .slidebox', {
			y:"-50",
			duration:1,
			delay:"0",
			// opacity: 0,
			stagger:0.5
			
		},)

.from('#third #slideboxleft', {
			x:"-40",
			duration:1,
			delay:"0",
			opacity: 0,
			
		},)
		.from('#third #slideboxright', {
			x:"-40",
			duration:1,
			delay:"0",
			opacity: 0,
			
		},)		
		
		var tl7 = gsap.timeline({
			scrollTrigger:{
				trigger:'#fourth',
				start:'top 85%',
				end:'bottom bottom',
				scrub:1,
				ease: "power4.out",

				//    markers:true
				}
		})
		   tl7 .from('#fourth h1', {
				y:"-40",
				duration:1,
				opacity: 0,
			})
			.from('#fourth p', {
				y:"40",
				duration:1,
				delay:"-0.5",
				opacity: 0,
				
			},)

			.from('#fourth img', {
				y:"40",
				duration:1,
				opacity: 0,
				
			},)
			.from('#fourth .container input', {
				x:"800",
				ease:"power1",
				duration:1,
				opacity: 0,
				stagger:0.2
				
			},)
			.from('#fourth .container select', {
				x:"800",
				ease:"power1",

				duration:1,
				opacity: 0,
				
			},)
			.from('#fourth .container textarea', {
				x:"800",
				ease:"power1",

				duration:1,
				opacity: 0,
				
			},)
			.from('#fourth .Social-media ', {
				x:"-1070",
				duration:1,
				delay:"0.5",
				stagger:0.2,
				ease:"power1",
				// opacity: 0,
				
			},)