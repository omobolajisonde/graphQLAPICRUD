const Post = require("./models/postModel");
const catchAsync = require("./utils/catchAsync");

const resolvers = {
  Query: {
    getAllPosts: catchAsync(async (parent, args, context, info) => {
      return await Post.find({});
    }),
    getPostById: catchAsync(async (parent, args, context, info) => {
      return await Post.findById(args.id);
    }),
  },
  Mutation: {
    createPost: catchAsync(async (parent, args, context, info) => {
      return await Post.create(args.post);
    }),
    updatePost: catchAsync(async (parent, args, context, info) => {
      return await Post.findByIdAndUpdate(args.id, args.post, { new: true });
    }),
    deletePost: catchAsync(async (parent, args, context, info) => {
      const deletedPost = await Post.findByIdAndDelete(args.id);
      return deletedPost.id;
    }),
  },
};

module.exports = resolvers;
