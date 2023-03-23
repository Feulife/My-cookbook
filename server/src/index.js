import { ApolloServer } from '@apollo/server'
import { startStandaloneServer } from '@apollo/server/standalone'
import { typeDefs } from './models/typeDefs.js'
import { resolvers } from './resolvers/resolvers.js'
import { models } from './modules/cookBook.js'
import mongoose from 'mongoose'

const Db = process.env.ATLAS_URI

const server = new ApolloServer({
  typeDefs,
  resolvers,
  context: async () => {
    return { models }
  },
})

const db = await mongoose.connect(`${Db}`)
console.info('📚 Connected to db', db?.connections?._connectionString);

const { url } = await startStandaloneServer(server, {
  listen: {
    port: 5000,
  },
})
console.info(`🚀 Server ready at ${url}`);
