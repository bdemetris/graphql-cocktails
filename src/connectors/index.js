const CoctailsDB = require('./CoctailsDB');

const createConnectors = () => ({
  CoctailsDB: new CoctailsDB(),
});

module.exports = createConnectors;
