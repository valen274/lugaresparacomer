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
function mostrarmenu(precio) {
    const pizzamargarita=document.getElementById("pizzamargarita");
    const pizzapiña=document.getElementById("pizzapiña");
    const pizzahongos=document.getElementById("pizzahongos");

   if (precio>=8400){
    pizzamargarita.style.display= "block"
   } else {pizzamargarita.style.display="none"}

   if (precio>=9300){
    pizzapiña.style.display= "block"
   } else {pizzapiña.style.display="none"}

   if (precio>=10900){
    pizzahongos.style.display= "block"
   } else {tpizzahongos.style.display="none"}
}
