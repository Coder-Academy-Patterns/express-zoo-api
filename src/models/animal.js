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

let nextID = 4

// Read

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

// Create

// Update

function update(id, attributes) {
  const animal = find(id)
  // Warning: attributes may contain 'id' or other unwanted attributes
  Object.assign(animal, attributes)
  // Return the updated animal
  return animal
}

// Destroy

function destroy(id) {
  // Ensure `id` is an integer
  id = parseInt(id, 10)
  // Find the animal with this particular id
  const index = animals.findIndex((animal) => animal.id === id)
  // Check if index was not found
  if (index === -1) {
    return null
  }

  // Remove the animal at this index
  const removed = animals.splice(index, 1)
  // Return the removed animal
  return removed[0]
}

module.exports = {
  all,
  find,
  create,
  destroy
}