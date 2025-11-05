const logger = (req,res,next) => {
    const fecha = new Date().toISOString()
    const method = req.method
    const url = req.originalUrl
    console.log(`[${fecha}] ${method} ${url}`)  
    next()
    
}
module.exports = logger