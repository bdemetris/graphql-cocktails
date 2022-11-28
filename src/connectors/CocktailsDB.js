const { get } = require('got');


function matchIngredentToMeasure(data) {
  const results = [];

  Object.entries(data).forEach((entry) => {
    Object.values(entry).forEach((value) => {
      if (typeof value === 'object') {
        const ingredients = [];
        Object.entries(value).forEach((pair) => {
          if (pair[0].includes('Ingredient')) {
            const keyName = pair[0];
            Object.entries(value).forEach((subpair) => {
              const matchName = keyName.replace('Ingredient', 'Measure');
              if (subpair[0] === matchName) {
                if (pair[1]) {
                  const ingredient = {
                    name: pair[1],
                    measure: subpair[1],
                  };
                  ingredients.push(ingredient);
                }
              }
            });
          }
        });
        const c = {
          id: value.idDrink,
          name: value.strDrink,
          ingredients,
          image: value.strDrinkThumb,
          instructions: value.strInstructions,
          iba: value.strIBA,
          glass: value.strGlass,
        };
        results.push(c);
      }
    });
  });
  return results;
}

class CocktailsDB {
  async cocktails({ name }) {
    const options = {
      query: {
        s: name,
      },
      json: true,
    };

    const { body } = await get(
      'https://thecocktaildb.com/api/json/v1/1/search.php',
      options,
    );
    const { drinks } = body;
    const results = matchIngredentToMeasure(drinks);
    return results.map(result => ({
      id: result.id,
      name: result.name,
      ingredients: result.ingredients,
      image: result.image,
      instructions: result.instructions,
      iba: result.iba,
      glass: result.glass,
    }));
  }

  async cocktail({ id }) {
    const options = {
      query: {
        i: id,
      },
      json: true,
    };

    const { body } = await get(
      'https://thecocktaildb.com/api/json/v1/1/lookup.php',
      options,
    );
    const { drinks } = body;
    const results = matchIngredentToMeasure(drinks);
    return results.map(result => ({
      id: result.id,
      name: result.name,
      ingredients: result.ingredients,
      image: result.image,
      instructions: result.instructions,
      iba: result.iba,
      glass: result.glass,
    }));
  }

  async random() {
    const options = {
      query: {},
      json: true,
    };

    const { body } = await get(
      'https://thecocktaildb.com/api/json/v1/1/random.php',
      options,
    );
    const { drinks } = body;
    const results = matchIngredentToMeasure(drinks);
    console.log(results);
    return results.map(result => ({
      id: result.id,
      name: result.name,
      ingredients: result.ingredients,
      image: result.image,
      instructions: result.instructions,
      iba: result.iba,
      glass: result.glass,
    }));
  }
}

module.exports = CocktailsDB;
