const app = require('./app')


/* a porta vai ser a do ambiente (se estiver rodando num server, por exemplo)
 * ou a porta 3000 (ou qualquer outra, você define) */

const port = process.env.PORT || 3000

app.listen(port, () => {
  console.log(`Listening on port ${port}`)
})
