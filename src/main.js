import MongoDb from "./mongo-db.js";
import Server from './server.js';

const db = new MongoDb()
db.connect()
db.getAll()

const server = new Server(8081)
server.get()
server.listen()