import Query from './query.js'
import Mutation from './mutation.js'
import { DateTimeScalar } from 'graphql-date-scalars'

export const resolvers = {
  Query,
  Mutation,
  // DateTime: DateTimeScalar
}