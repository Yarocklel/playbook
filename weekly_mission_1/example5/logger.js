class Logger{//clase
    constructor(name){//constructor 
        this.name=name;
        this.count=0;
    }
    log(message){//metodo log
        this.count++;//se incrementa el contador cada que se llama a este metodo
        console.log('['+this.name+']: '+message);//se imprime el mensaje
    }
}

module.exports=new Logger('default');//exporta un objeto nuevo