type Hero = {
  name :string
  age :number
  isAlive :boolean
}

const describeHero = (hero :Hero) :string => {
  return `Le hero s'appelle ${hero.name} il a ${hero.age} ans et isAlive: ${hero.isAlive}.`
}

const hero :Hero = {
  name: "Spiderman",
  age: 2,
  isAlive: true
}

console.log(describeHero(hero))
