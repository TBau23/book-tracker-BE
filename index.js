const server = require('./api/server.js');


const port = process.env.PORT || 5300;
server.listen(port, () => {
    console.log(`\n Server is cooking at port: ${port}\n`)
})