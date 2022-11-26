const resolvers = {
  Query: {
    coctails: (_, args, ctx) => ctx.connectors.CoctailsDB.coctails(args),
  },
};

module.exports = resolvers;
