'use strict';
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const apollo_server_lambda_1 = require("apollo-server-lambda");
require("reflect-metadata");
const author_1 = require("./schema/author");
const root_1 = require("./schema/root");
(() => __awaiter(void 0, void 0, void 0, function* () {
    const apolloServer = new apollo_server_lambda_1.ApolloServer({
        typeDefs: [author_1.authorTypeDefs, root_1.rootTypeDefs],
        resolvers: [root_1.rootResolvers]
    });
    module.exports.graphqlHandler = apolloServer.createHandler();
}))();
//# sourceMappingURL=handler.js.map