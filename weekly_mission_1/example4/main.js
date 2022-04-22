const Logger= require('./logger');//importa la clase

const dblogger=new Logger('DB');//crea un objeto nuevo y se le agrega el constructor

dblogger.info('this is an informational message');//ejecuta el metodo info

const accesLogger = new Logger ('Access');//crea un objeto nuevo y se le agrega el constructor
accesLogger.info('this is a verbose message ');//ej
