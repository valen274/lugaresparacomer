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