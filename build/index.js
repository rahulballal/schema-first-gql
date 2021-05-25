"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var apollo_server_1 = require("apollo-server");
var uuid_1 = require("uuid");
var fs_1 = __importDefault(require("fs"));
var resolvers_1 = __importDefault(require("./resolvers"));
var petData = [
    { id: uuid_1.v4(), name: "Tipu" },
    { id: uuid_1.v4(), name: "Julie" },
];
var typeDefs = fs_1.default.readFileSync("schema.graphql", "utf-8");
var gqlServer = new apollo_server_1.ApolloServer({
    context: function () {
        return {
            requestId: uuid_1.v4(),
            petData: petData,
        };
    },
    playground: true,
    resolvers: resolvers_1.default,
    typeDefs: typeDefs,
});
gqlServer.listen().then(function (_a) {
    var url = _a.url;
    return console.info("\uD83D\uDE80 Up and running at: " + url);
});
