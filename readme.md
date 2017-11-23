# Express Zoo API

- Using Express
- RESTful CRUD routes

## Getting started

- Run `yarn dev`, and open `http://localhost:7000/`

## Challenges

1. Add more default animals to its model file
2. Add a sea critters routes at `/sea-critters` plus the model, with six different ocean-based animals by default. Add all CRUD routes

### Challenges 2

1. Sort the animals by name
2. Add filtering of animals by name when the query variable `q` is passed

### Challenges 3

1. Add `/areas` CRUD routes and model, with different habitats (savanna, forest, etc) e.g. `{ id: 1, name: "Forest" }`
2. Associate each animal with a particular area, using the area's ID number
3. In the animal routes, replace any instances of area IDs instead with the information about that area instead ('populate')