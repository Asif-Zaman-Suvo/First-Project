import dotenv from 'dotenv'
import path from 'path'

dotenv.config({ path: path.join(process.cwd(), '.env') })

export default {
  port: process.env.PORT,
  database_url: process.env.DATABASE_URL,
  salt_rounts: process.env.SALT_ROUNDS,
  default_password: process.env.DEFAULT_PASSWORD,
}
