import mongoose from 'mongoose'
import config from 'config'

const MONGO_URI = config.get<string>('db_url')

mongoose.connect(MONGO_URI)

export default mongoose.connection