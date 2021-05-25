import { Pet } from './generated/graphql'

export interface IContext {
    requestId: string;
    petData: Pet[];
}
