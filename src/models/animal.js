let animals = [
  {
    id: 1,
    name: 'Meercat',
    count: 27
  },
  {
    id: 2,
    name: 'Rhinoceros',
    count: 4
  },
  {
    id: 3,
    name: 'Giraffe',
    count: 8
  }
]

function all() {
  return animals
}

function find(id) {
  // Ensure `id` is an integer
  id = parseInt(id, 10)
  let foundAnimal = null
  // Loop through all the animals
  animals.forEach((animal) => {
    // Compare this animal’s id to the one we want to find
    if (animal.id === id) {
      // If so, remember this animal
      foundAnimal = animal
    }
  })
  // Return the animal we found, or if not successful, null
  return foundAnimal
}

module.exports = {
  all,
  find
}