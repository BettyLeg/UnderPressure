let string_pagina = "visible";
let string_boton = "bn_activo";

function ver(pagina, boton) {
  ver_pagina($(pagina)[0]);
  cambiar_boton_activo($(boton)[0]);
} 
function ver_pagina(pagina){
  if(esta_inactivo(pagina, string_pagina)){
    $($(".visible")[0]).toggleClass(string_pagina);
    $(pagina).toggleClass(string_pagina);
    console.log("cabie ag");
  }
}
function cambiar_boton_activo(boton_nuevo){
  if(esta_inactivo(boton_nuevo, string_boton)){
    $($('.bn_activo')[0]).toggleClass(string_boton);
    $(boton_nuevo).toggleClass(string_boton);
    console.log("cambie boton");
  }  
}
function esta_inactivo(objeto, identificador){
  console.log(!$(objeto).hasClass(identificador));
  return !$(objeto).hasClass(identificador);
}