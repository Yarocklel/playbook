//al aplicar esto debemos tener en cuenta que 
// -require('./logger') regresa el objeto creado
// -require('./logger').Logger regresa la clase

//para este ejemplo estamos agregando una funcion mas al objeto instanciado, no a la clase


require('./logger').customMessage=function(){
    console.log('custom message');
}