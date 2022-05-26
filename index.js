const winston = require('winston')

const logger = winston.createLogger({
  level: 'debug',
  format: winston.format.json(),
  defaultMeta: { service: 'user-service' },
  transports: [
    new winston.transports.File({ filename: 'error.log', level: 'error' }),
    new winston.transports.File({ filename: 'combined.log' })
  ]
})
// una función que devuelva un error con un mensaje personalizado

// - Registra el error en un archivo a través de un try...catch

function logError (error) {
  try {
    logger.error(error)
  } catch (error) {
    console.info('Error en el log')
  }
}
logError('Error Error Error cuidado')

// logger.info('Hello world')
// logger.error('Oh noes!')
