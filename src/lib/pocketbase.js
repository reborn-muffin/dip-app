import PocketBase from 'pocketbase'

export const db = new PocketBase('http://127.0.0.1:8090')
const authDB = await db.admins.authWithPassword('dacenkoboda@gmail.com', 'Hohotyn008-')
