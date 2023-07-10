import {ApolloServer} from '@apollo/server';
import { expressMiddleware } from '@apollo/server/express4';
import { ApolloServerPluginDrainHttpServer } from '@apollo/server/plugin/drainHttpServer';
import express from 'express';
import http from 'http';
import pkg from 'body-parser';
import {typeDefs} from './models/typeDefs.js';
import {resolvers} from './resolvers/resolvers.js';
import mongoose from 'mongoose';
import cors from 'cors';
import dotenv from 'dotenv';
dotenv.config({ path: '../.env'})
const Db = process.env.ATLAS_URI;
const PORT = process.env.PORT;
const { json } = pkg;

const db = await mongoose.connect(`${Db}`);
console.info(db ? 'Connected to CookBook DataBase' : 'Not connected toCookBook DataBase' );

const app = express();
const httpServer = http.createServer(app);
const server = new ApolloServer({
  typeDefs,
  resolvers,
  plugins: [ApolloServerPluginDrainHttpServer({ httpServer })],
});

await server.start();

app.use(
  cors({
    origin: ['https://my-cookbook-one.vercel.app/']    
  }),
  json(),
  expressMiddleware(server)
);

await new Promise ((resolve) => httpServer.listen({ port: PORT }, resolve))

console.info(`🚀 Server ready at http://localhost:${PORT}`);
