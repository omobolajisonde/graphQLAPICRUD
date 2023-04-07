const express = require("express");
const { buildSchema } = require("graphql");
const { graphqlHTTP } = require("express-graphql");

const app = express();

const schema = buildSchema(`

    type User{
        name: String
        age: Int
        college: String
    }

    input userInfo{
        name: String!
        age: Int!
        college: String!
    }

    type Query{
        hello: String
        welcomeMsg(name: String!): String
        getUser: User
        getUsers: [User]
    }

    type Mutation{
        createUser(user: userInfo): User
    }
`);

const root = {
  hello: () => {
    return "Hello world!";
  },
  welcomeMsg: ({ name }) => {
    return `Welcome, ${name}.`;
  },
  getUser: () => {
    const user = { name: "Sonde Omobolaji", age: 18, college: "UNILORIN" };
    return user;
  },
  getUsers: () => {
    const users = [
      { name: "Sonde Omobolaji", age: 18, college: "UNILORIN" },
      { name: "Vin Omole", age: 19, college: "UNILORIN" },
      { name: "Joel Oj", age: 20, college: "UNILORIN" },
    ];
    return users;
  },
  createUser: (args) => {
    console.log(args);
    return args.user;
  },
};

app.use(
  "/graphql",
  graphqlHTTP({ graphiql: true, schema: schema, rootValue: root })
);

app.listen(8080, () => {
  console.log("❄ Server started on port, 8080.");
});
