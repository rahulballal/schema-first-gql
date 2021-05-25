import { ApolloServer } from "apollo-server";
import { v4 as uuidv4 } from "uuid";
import fs from "fs";
import { IContext } from "./context";
import { Pet } from "./generated/graphql";
import resolvers from "./resolvers";

const petData: Pet[] = [
  { id: uuidv4(), name: "Tipu" },
  { id: uuidv4(), name: "Julie" },
];

const typeDefs = fs.readFileSync("schema.graphql", "utf-8");

const gqlServer = new ApolloServer({
  context: (): IContext => {
    return {
      requestId: uuidv4(),
      petData,
    };
  },
  playground: true,
  resolvers,
  typeDefs,
});

gqlServer.listen().then(({ url }) => console.info(`🚀 Up and running at: ${url}`));
