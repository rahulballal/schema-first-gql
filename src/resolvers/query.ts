import { IContext } from '../context'
import { QueryResolvers } from '../generated/graphql'

const resolvers: QueryResolvers<IContext> = {
    pet(_, args, context) {
        return context.petData[args.id]
    },
    pets(_, _args, context) {
        return context.petData
    }
}

export default resolvers