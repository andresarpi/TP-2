const imgs =["imagenes/alce.jpg", "imagenes/epelante.jpg", "imagenes/nena.jpg", "imagenes/peces.jpg", 
"imagenes/unichancho.jpg", "imagenes/zapas.jpg", "imagenes/alce.jpg", "imagenes/epelante.jpg", "imagenes/nena.jpg", 
"imagenes/peces.jpg", "imagenes/unichancho.jpg", "imagenes/zapas.jpg"]

$(".levels").on("click",function(){
    var input=$("#name")
    if (input.val()==""){
        $("#ups").html("Ups! Para avanzar necesitas poner un nombre");
        $("#ups").show()
        setTimeout(function() {
            $("#ups").fadeOut()
        }, 3000);
        
    } else {
        $("#ups").html("")
    }
})




imgs.sort(function (a,b) {
    return Math.random () -0.5
})
 
 
for (var i = 0; i < imgs.length; i++) {
    $(".pieza").eq(i).attr('data-img', imgs[i])
}
 
$(".pieza").on("click", function() {
    var visible = $(this).attr('data-img')
    $(this).attr('src', visible)
})




 // para comparar las imgs : 
 //creamos dos variables, la variable clicks = 0 y otra var primerClick 
 //$("img").on("click"function(){
//   clicks = clicks+1
  
//   if(clicks==1){

//   } else{
//       COMPARACION
//       clicks=0
//   }
//  })