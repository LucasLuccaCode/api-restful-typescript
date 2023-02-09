const { DB_USER, DB_PASS } = process.env

export default {
  port: 3000,
  db_uri: `mongodb+srv://${DB_USER}:${DB_PASS}@mr-cadastros.hajq2fq.mongodb.net/TS_RESTFUL_API?retryWrites=true&w=majority`
}