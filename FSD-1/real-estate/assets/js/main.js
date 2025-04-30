/*=============== SWIPER POPULAR ===============*/
var swiperPupular = new Swiper(".popular__container", {
    spaceBetween: 32,
    grabCursor: true,
    slidesPerView:'auto',
    // loop: true,

    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    }
    
  });


/*=============== VALUE ACCORDION ===============*/
const accordionItems=document.querySelectorAll(".value__accordion--item");

accordionItems.forEach((item)=>{
    const accordionHeader = item.querySelector(".value__accordion--header")

    accordionHeader.addEventListener('click',()=>{
        const openItem = document.querySelector('.accordion-open')

        toggleItem(item)

        if(openItem && openItem!==item){
            toggleItem(openItem)
        }
    })
})

const toggleItem=(item) =>{
    const accordionContent=item.querySelector('.value__accordion--content')

    if(item.classList.contains('accordion-open')){
        accordionContent.removeAttribute('style')
        item.classList.remove('accordion-open')
    }
    else{
        accordionContent.style.height=accordionContent.scrollHeight + 'px'
        item.classList.add('accordion-open')
    }


}
/*=============== SCROLL SECTIONS ACTIVE LINK ===============*/
const sections = document.querySelectorAll('section[id]')
    
const scrollActive = () =>{
  	const scrollDown = window.scrollY

	sections.forEach(current =>{
		const sectionHeight = current.offsetHeight,
			  sectionTop = current.offsetTop - 58,
			  sectionId = current.getAttribute('id'),
			  sectionsClass = document.querySelector('.nav__menu a[href*=' + sectionId + ']')

		if(scrollDown > sectionTop && scrollDown <= sectionTop + sectionHeight){
			sectionsClass.classList.add('active-link')
		}else{
			sectionsClass.classList.remove('active-link')
		}                                                    
	})
}
window.addEventListener('scroll', scrollActive)


/*=============== SHOW SCROLL UP ===============*/ 
const scrollUp = () =>{
	const scrollUp = document.getElementById('scroll-up')
    // When the scroll is higher than 350 viewport height, add the show-scroll class to the a tag with the scrollup class
	this.scrollY >= 350 ? scrollUp.classList.add('show-scroll')
						: scrollUp.classList.remove('show-scroll')
}
window.addEventListener('scroll', scrollUp)
