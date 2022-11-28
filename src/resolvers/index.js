const resolvers = {
  Query: {
    cocktails: (_, args, ctx) => ctx.connectors.CocktailsDB.cocktails(args),
    cocktail: (_, args, ctx) => ctx.connectors.CocktailsDB.cocktail(args),
    random: (_, args, ctx) => ctx.connectors.CocktailsDB.random(args),
  },
};

module.exports = resolvers;
