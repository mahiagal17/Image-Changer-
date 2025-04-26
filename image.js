const images = [
   "https://images.rawpixel.com/image_png_800/czNmcy1wcml2YXRlL3Jhd3BpeGVsX2ltYWdlcy93ZWJzaXRlX2NvbnRlbnQvbHIvcm01MDQtZS0wOF8xLnBuZw.png" ,
   "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQy6Y1vWxManERqDe96a8fmEnAC2m7VnPP5Wg&s" ,
   "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSsipcHty1zdOkd22UUXVYCP21J9CG4OT40aA&s"
] ;


let currentIndex=0;
//set the default image on page load 
window.onload = function() {
    document.getElementById("image").src = images[currentIndex];
} ;

function nextImage () {
    currentIndex = (currentIndex + 1) % images.length;
    document.getElementById("image").src = images[currentIndex];
}

function prevImage () {
    currentIndex = (currentIndex - 1  + images.length) % images.length ;
    document.getElementById("image").src = images[currentIndex];
}


























