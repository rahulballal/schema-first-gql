"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var resolvers = {
    addPet: function (_, args, context) {
        var newPet = {
            id: args.pet.id,
            name: args.pet.name,
        };
        context.petData.push(newPet);
        return newPet;
    }
};
exports.default = resolvers;
