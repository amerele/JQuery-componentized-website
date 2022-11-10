let currentSlider = 0;
let totalSlides = $(".wrapper .left > div").length - 1;

$(".controls .up").click(function(){
    if (currentSlider == 0){
        return;
    }
    currentSlider--;
    document.querySelector(".left div").style.marginTop = `${currentSlider*-80}vh`;
    document.querySelector(".right div").style.marginTop = `${(totalSlides - currentSlider)*-80}vh`;
});

$(".controls .down").click(function(){
    if (currentSlider == totalSlides){
        return;
    }
    currentSlider++;
    document.querySelector(".left div").style.marginTop = `${currentSlider*-80}vh`;
    document.querySelector(".right div").style.marginTop = `${(totalSlides - currentSlider)*-80}vh`;
});
