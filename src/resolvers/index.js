const resolvers = {
  Query: {
    cocktails: (_, args, ctx) => ctx.connectors.CocktailsDB.cocktails(args),
  },
};

module.exports = resolvers;
