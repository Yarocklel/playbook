const Pokemon=require('./pokemon');

const pikachu=new Pokemon("pikachu");
const charmander=new Pokemon("charmander");
const squirtle=new Pokemon("squirtle");
const bulbasaur=new Pokemon("bulbasaur");

pikachu.sayHello();
pikachu.sayMessage("Hey, I'm Pikachu!");

charmander.sayHello();
charmander.sayMessage("Hey, I'm Charmander!");

squirtle.sayHello();
squirtle.sayMessage("Hey, I'm Squirtle!");
