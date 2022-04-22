//programa principal del
const logger1=require('./logger_1');//invocamos el primer logger
const logger2=require('./logger_2');//invocamos el segundo logger

logger1('this is an informational message');
logger2.verbose('this is a verbose message');