const wrapper = document.querySelector(".sliderWrapper")
const menuItens = document.querySelectorAll(".menuItem")

menuItens.forEach((item, index) => {
    item.addEventListener("click", () => {
        //change the current slide (muda o slide atual)
       wrapper.style.transform = `translateX(${-100 * index}vw)`; 
    })
})