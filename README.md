# 🍹 graphql-coctails

`npm start`

find server at `http://localhost:4000`

try a query like...

```
{
  coctails(name: "margarita") {
    name
    ingredients {
      name
      measure
    }
    instructions
    image
  }
}
```
