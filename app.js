const express = require("express");
const mongoose = require("mongoose");
require("dotenv").config();
const { ApolloServer } = require("apollo-server-express");
const typeDefs = require("./typeDefs");
const resolvers = require("./resolvers");

const { PORT, HOST, DATABASE_URI } = process.env;
(async () => {
  try {
    const app = express();
    const apolloServer = new ApolloServer({ typeDefs, resolvers });
    await apolloServer.start();
    apolloServer.applyMiddleware({ app });
    await mongoose.connect(DATABASE_URI);
    app.listen(PORT, HOST, () => {
      console.log(`❄ Server started on port, ${PORT}.`);
    });
  } catch (error) {
    console.log("🤦‍♂️ Oops something went terribly wrong.", error);
  }
})();
