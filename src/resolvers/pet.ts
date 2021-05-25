import { IContext } from '../context'
import {PetResolvers} from '../generated/graphql'

const resolvers: PetResolvers<IContext> = {
    name: (pet) => pet.name.toLocaleUpperCase()
}

export default resolvers