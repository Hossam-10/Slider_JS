var imgs = document.getElementsByClassName("item-img");
var sliderBox = document.getElementById("slider");
var sliderImage = document.getElementById("sliderImg");
var prv = document.getElementById("prv");
var next = document.getElementById("next");
var windowClose = document.getElementById("wClose");
var currentImg = 0; //to know index of first clicked image
var imgsArr = [];

for(var i = 0; i<imgs.length; i++)
{
    imgsArr.push(imgs[i]);
    imgs[i].addEventListener("click" , function(e){

        sliderBox.classList.add("show");
        var imgSrc = e.target.src;
        sliderImage.style.backgroundImage = "url("+imgSrc+")";
        currentImg = imgsArr.indexOf(e.target);
    })
}

prv.addEventListener("click" , function(){

    prevSlide();

})

next.addEventListener("click" , function(){

    nextSlide();
})

windowClose.addEventListener("click" , function(){
    hideSlider();
})

document.addEventListener("keydown" , function(e){

    if( sliderBox.classList.contains("show") )
    {
      if(e.keyCode == 27)
      {
          hideSlider();
      }
      else if(e.keyCode == 39)
      {
          nextSlide();
      }
      else if(e.keyCode == 37)
      {
          prevSlide();
      }
    }
})

function prevSlide()
{
    currentImg--;
    if(currentImg < 0)
    {
        currentImg = imgsArr.length-1;
    }
    sliderImage.style.backgroundImage = "url("+imgsArr[currentImg].src+")";
}
function nextSlide()
{
    currentImg++;
    if(currentImg > imgsArr.length - 1)
    {
        currentImg = 0;
    }
    sliderImage.style.backgroundImage = "url("+imgsArr[currentImg].src+")";
}
function hideSlider()
{
    sliderBox.classList.remove("show");
}

