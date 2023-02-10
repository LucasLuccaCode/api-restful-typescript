const { MONGO_URL } = process.env

export default {
  port: 3000,
  db_url: MONGO_URL,
  env: 'development'
}