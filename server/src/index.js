import {ApolloServer} from '@apollo/server';
import {startStandaloneServer} from '@apollo/server/standalone';
import {typeDefs} from './models/typeDefs.js';
import {resolvers} from './resolvers/resolvers.js';
import mongoose from 'mongoose';
import dotenv from 'dotenv';
dotenv.config({ path: '../.env'})
const Db = process.env.ATLAS_URI;
const PORT = 4321;

const db = await mongoose.connect(`${Db}`);
console.info(db ? 'Connected to CookBook DataBase' : 'Not connected toCookBook DataBase' );

const server = new ApolloServer({typeDefs, resolvers})
const { url } = await startStandaloneServer(server, {
  listen: {
      port: PORT,
  },
});
console.info(`🚀 Server ready at ${url}`);
