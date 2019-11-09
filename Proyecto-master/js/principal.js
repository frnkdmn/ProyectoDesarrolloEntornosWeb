//slider
var slider = document.getElementById('slider');
var fotos = ['../imagenes/slider1.jpg','../imagenes/slider2.jpg','../imagenes/slider3.jpg',
            '../imagenes/slider4.jpg','../imagenes/slider5.jpg'];
var pos = 0;
function carrusel(){
    slider.src = fotos[pos];
    pos++;
    if(pos>4) pos=0;
    setTimeout("carrusel()",2000);
}
window.onload= carrusel();
//cambiar de foto
var opciones = document.getElementsByClassName('opcion');
for (let i = 0; i < opciones.length; i++) {
    opciones[i].addEventListener("click", function(){
        slider.src = fotos[i];
        pos=i;
    })
}
//Evento mouseover y mouseout
var bloques = document.getElementsByClassName('image');
var textos = document.getElementsByClassName('middle')
for (let i = 0; i < bloques.length; i++) {
     bloques[i].addEventListener("mouseover", function(){
        bloques[i].style.opacity = "0.3";
        bloques[i].style.transition = "0.8s ease";
        textos[i].style.transition = "0.8s ease";
        textos[i].style.opacity = "1";
     } );
     bloques[i].addEventListener("mouseout", function(){
        bloques[i].style.opacity = "1";
        textos[i].style.opacity = "0";   
     } );
}
