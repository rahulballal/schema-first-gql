import { IContext } from '../context'
import { MutationResolvers, Pet } from '../generated/graphql'

const resolvers: MutationResolvers<IContext> = {
    addPet(_, args, context){
        const newPet: Pet = {
            id: args.pet.id,
            name: args.pet.name,
        }
        context.petData.push(newPet)
        return newPet
    }
}

export default resolvers