
// objetos con propiedades
let myCar=new Object();// es POO
myCar.make="Ford";//guarda un valor en el objeto
myCar.model="mustang";
myCar.year=1969;

console.log(myCar);//imprime el objeto

//objetos con variables locales y publicas

const myModule=(()=>{
//variables de contexto locales 

const privateFoo="un valor privado que solo se puede usar dentro del objeto";
const privateBar=[1,2,3,4];
const baz="valor que va a ser expuesto";

const exported={//funciones
    publicFoo:"valor publico, se puede llamar desde cualquier lado",
    publicBar:"otro valor publico",
    publicBaz:baz//vuelve publica la variable baz
}
return exported;

});

console.log(myModule);