import 'dotenv/config';
import { drizzle } from 'drizzle-orm/libsql';
import { apps } from './schema'

const db = drizzle(process.env.DB_FILE_NAME!);


const getApps = async () => {
 try {
   const result = await db.select().from(apps)
  return result
 } catch (err) {
  console.log(err)
 }
}

const createNewApp = async () => {
  try {

  } catch (err) {
    console.log(err)
  }
}

export {
  getApps
}