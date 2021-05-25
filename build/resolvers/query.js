"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var resolvers = {
    pet: function (_, args, context) {
        return context.petData[args.id];
    },
    pets: function (_, _args, context) {
        return context.petData;
    }
};
exports.default = resolvers;
