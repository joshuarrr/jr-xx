/* utity functions *./

/* return a random number from an array */
export const randomIndexOf = (arr) => Math.floor(Math.random() * arr.length)

/* return an item from an array */
export const chooseFrom = (arr) => arr[randomIndexOf(arr)]

/* Random image */
export const getRandomImage = (arr) => chooseFrom(arr)