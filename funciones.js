function mostrarmenu(precio) {
    const cheescake=document.getElementById("cheescake");
    const lemonpie=document.getElementById("lemonpie");
    const tostada=document.getElementById("tostada");

   if (precio>=5300){
    cheescake.style.display= "block"
   } else {cheescake.style.display="none"}

   if (precio>=4900){
    lemonpie.style.display= "block"
   } else {lemonpie.style.display="none"}

   if (precio>=6400){
    tostada.style.display= "block"
   } else {tostada.style.display="none"}
}

const carrusel = document.querySelector(".carrusel"),
FirstImg= carrusel.querySelectorAll("img") [0];
arrowIcons = document.querySelectorAll(".wrapper.i");

let isDragStart=false,prevPageX, prevScrollLeft;



const showHideIcons =() => {
    //showing and hiding prev/next icon according to carrusel scroll left value
    let scrollWidth= carrusel.scrollWidth - carrusel.clientWidth;//getting max scrollable width
    arrowIcons[0].style.display = carrusel.scrollLeft == 0 ? "none" : "block";
    arrowIcons[1].style.display = carrusel.scrollLeft == scrollWidth ? "none" : "block";

}


arrowIcons.forEach(icon => {
icon.addEventListener("click",() =>{
    let FirstImgWidth= FirstImg.clientWidth + 14; //getting first img width & adding 14 margin value
    //if clicked icon is left, reduce width value from the carrusel scroll left else add to id
carrusel.ScrollLeft += icon.id == "left" ? - FirstImgWidth : FirstImgWidth;
setTimeout(() =>showHideIcons(),60); //calling showHideIcons after 60ms
});
});

const DragStart = (e) => {
    //updating global variables value on mouse down event
    isDragStart= true;
    prevPageX= e.pageX | | e.touched[0].pageX;
    prevScrollLeft= carrusel.scrollLeft;
}

const dragging= (e) => {
    //scrolling images/carrusel to left according to mouse pointer
    if (!isDragStart) return;
    e.preventDefault ();
    carrusel.classList.add("dragging");
    let positionDiff= (e.pageX | | e.touched[0].pageX)- prevPageX;
  carrusel.scrollLeft= prevScrollLeft - positionDiff ;
  showHideIcons();
} 
const dragStop = () => {
    isDragStart= false;
    carrusel.classList.remove("dragging");
}
carrusel.addEventListener("mousedown", DragStart);
carrusel.addEventListener("touchstart", DragStart);

carrusel.addEventListener("mousemove", dragging);
carrusel.addEventListener("touchmove", dragging);

carrusel.addEventListener("mouseup", dragStop);
carrusel.addEventListener("mouseleave", dragStop);
carrusel.addEventListener("touchend", dragStop);