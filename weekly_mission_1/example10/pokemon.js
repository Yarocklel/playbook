export default class Pokemon{
    constructor(name){this.name=name;}

    sayHello(name){
            console.log(`${this.name} says hello!`);
    }

    sayMessage(message){
            console.log(`${this.name} says: ${message}`);
    }
}