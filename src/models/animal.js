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

function create(attributes) {
  // Create new animal 'record' copying attributes across
  // and assigning it an id
  const newAnimal = Object.assign({}, attributes, {
    id: nextID
  })
  // Increment id for next time
  nextID += 1
  
  // Add to our array that stores our data
  animals.push(newAnimal)

  return newAnimal
}

// Update

function update(id, attributes) {
  const animal = find(id)
  // Check if animal was not found
  if (!animal) {
    // If so, bail early
    return null
  }
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
  update,
  destroy
}