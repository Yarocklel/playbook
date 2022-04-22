

//este modulo se comporta como un objeto


export function log (message){
    console.log(message);
}

export const DEFAULT_LEVEL = 'info';//constantes

export const LEVELS={//objeto
    error:0,
    debug:1,
    warn:2,
    data:3,
    info:4,
    verbose:5
}

//exporar una clase de la clase
export class Logger{
    constructor(name){this.name=name;}

    log(message){console.log(`${this.name}: ${message}`);}
}

