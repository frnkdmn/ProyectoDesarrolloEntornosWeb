//Rotar redes sociales 
var webs = ['https://facebook.com','https://youtube.com','https://twitter.com','https://instagram.com']
var redes = document.getElementsByClassName('redes');
for (let i = 0; i < redes.length; i++) {
    redes[i].addEventListener("mouseover",function(){
        redes[i].style.width = "60px";
        redes[i].style.transition = "all 0.5s";
        redes[i].style.transform = "rotate(360deg)";
    })
    redes[i].addEventListener("mouseout",function(){
        redes[i].style.width= "100%";
        redes[i].style.transition = "all 0.5s";
        redes[i].style.transform = "rotate(-360deg)"
    })
    redes[i].addEventListener("click",function(){
        window.open(webs[i]);
    })
}