const CocktailsDB = require('./CocktailsDB');

const createConnectors = () => ({
  CocktailsDB: new CocktailsDB(),
});

module.exports = createConnectors;
