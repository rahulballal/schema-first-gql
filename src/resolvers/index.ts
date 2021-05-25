import { Resolvers } from '../generated/graphql'
import Query from './query'
import Mutation from './mutation'
import Pet from './pet'

const resolvers: Resolvers = {
    Query,
    Mutation,
    Pet,
}
export default resolvers