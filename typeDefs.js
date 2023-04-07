const { gql } = require("apollo-server-express");

// Construct a schema, using GraphQL schema language

const typeDefs = gql`
  type Post {
    id: ID!
    title: String!
    description: String
  }

  input postInput {
    id: ID
    title: String
    description: String
  }

  type Query {
    getAllPosts: [Post]
    getPostById(id: ID!): Post
  }
  type Mutation {
    createPost(post: postInput): Post
    updatePost(id: ID!, post: postInput): Post
    deletePost(id: ID!): ID
  }
`;

module.exports = typeDefs;
