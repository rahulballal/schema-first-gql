"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var query_1 = __importDefault(require("./query"));
var mutation_1 = __importDefault(require("./mutation"));
var pet_1 = __importDefault(require("./pet"));
var resolvers = {
    Query: query_1.default,
    Mutation: mutation_1.default,
    Pet: pet_1.default,
};
exports.default = resolvers;
