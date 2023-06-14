import {ApolloServer} from '@apollo/server';
import {startStandaloneServer} from '@apollo/server/standalone';
import { expressMiddleware} from '@apollo/server/express4';
import { ApolloServerPluginDrainHttpServer } from '@apollo/server/plugin/drainHttpServer';
import express from 'express';
import http from 'http';
import cors from 'cors';
import bodyParser from 'body-parser';
import {typeDefs} from './models/typeDefs.js';
import {resolvers} from './resolvers/resolvers.js';
import mongoose from 'mongoose';
import { MongoClient } from 'mongodb';
import dotenv from 'dotenv';
import { log } from 'console';
dotenv.config({ path: '../.env'})
const Db = process.env.ATLAS_URI;
const PORT = 4000;

////////////////////////// FIRST VERSION ////////////////////////////////////////////////
// const db = await mongoose.connect('mongodb+srv://Feulife:Jardin7FeuLife@cluster0.1vxismk.mongodb.net/cookbook?retryWrites=true&w=majority');

const db = await mongoose.connect(`${Db}`);
console.info('Connected to db', db?.connections[0]?._connectionString);

const server = new ApolloServer({typeDefs, resolvers})
const { url } = await startStandaloneServer(server, {
  listen: {
      port: 4321,
  },
});
console.info(`🚀 Server ready at ${url}`);

// const app = express();
// const httpServer = http.createServer(app);
// const server = new ApolloServer({
//   typeDefs,
//   resolvers,
//   plugins: [ApolloServerPluginDrainHttpServer({ httpServer })],
// });

// await server.start();

// app.use(
//   '/',
//   cors(),
//   bodyParser.json({ limit: '50mb' }),
//   expressMiddleware(server, {
//     context: async ({ req }) => ({ token: req.headers.token }),
//   }),
// );

// await new Promise((resolve) => httpServer.listen({ port: 4000 }, resolve));
// console.info(`🚀 Server ready at http://localhost:4000/`);
/////////////////////////////////////////////////////////////////////////////////////////////////////////////

///////////////////////////////////////SECOND VERSION//////////////////////////////////////////////////////////

// const client = new MongoClient('mongodb+srv://Feulife:Jardin7FeuLife@cluster0.1vxismk.mongodb.net/CookBook?retryWrites=true&w=majority');

// const start = async () => {
//   try {
//     await client.connect()
//     console.info('Connected to db', client?.connections[0]?._connectionString)
//     await client.db().createCollection('recipes')
//     const recipes = client.db().collection('recipes')    
//   } catch (e) {
//     console.log(e);
//   }
// }

// const app = express();
// const httpServer = http.createServer(app);
// const server = new ApolloServer({
//   typeDefs,
//   resolvers,
//   plugins: [ApolloServerPluginDrainHttpServer({ httpServer })],
// });

// await server.start();

// app.use(
//   '/',
//   cors(),
//   bodyParser.json({ limit: '50mb' }),
//   expressMiddleware(server, {
//     context: async ({ req }) => ({ token: req.headers.token }),
//   }),
// );

// await new Promise((resolve) => httpServer.listen({ port: 4000 }, resolve));
// console.info(`🚀 Server ready at http://localhost:3000/`);