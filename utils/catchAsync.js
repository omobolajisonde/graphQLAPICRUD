module.exports = (fn) => {
  return async (parent, args, context, info) => {
    try {
      return await fn(parent, args, context, info);
    } catch (error) {
      console.log(error);
    }
  };
};
