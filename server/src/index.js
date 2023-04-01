import { ApolloServer } from '@apollo/server'
import { startStandaloneServer } from '@apollo/server/standalone'
import { typeDefs } from './models/typeDefs.js'
import { resolvers } from './resolvers/resolvers.js'
// import { models } from './models/cookBook.js'
import mongoose from 'mongoose'
import * as dotenv from 'dotenv'

dotenv.config({ path: "./.env" })
const Db = process.env.ATLAS_URI
console.log(Db);
const server = new ApolloServer({
  typeDefs,
  resolvers,
  // context: async () => {
  //   return { models }
  // },
})

const db = await mongoose.connect('mongodb+srv://Feulife:Jardin7FeuLife@cluster0.1vxismk.mongodb.net/cookbook?w=majority')
console.info('📚 Connected to db', db?.connections?._connectionString);

const { url } = await startStandaloneServer(server, {
  listen: {
    port: 5000,
  },
})
console.info(`🚀 Server ready at ${url}`);
