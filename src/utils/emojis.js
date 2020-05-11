import smileys from './categories/smileys';
import people from './categories/people';
import clothingAndAccessories from './categories/clothingAndAccessories';
import animals from './categories/animals';
import nature from './categories/nature';
import food from './categories/food';
import activities from './categories/activities';
import travel from './categories/travel';
import objects from './categories/objects';
import symbols from './categories/symbols';
import flags from './categories/flags';
import body from './categories/body';

const emojis = {
  smileys: {
    categoryEmote: smileys.smilingFace,
    ...smileys
  },
  people: {
    categoryEmote: people.manBeard,
    ...people
  },
  clothingAndAccessories: {
    categoryEmote: clothingAndAccessories.tShirt,
    ...clothingAndAccessories
  },
  animals: {
    categoryEmote: animals.dogFace,
    ...animals
  },
  nature: {
    categoryEmote: nature.evergreenTree,
    ...nature
  },
  food: {
    categoryEmote: food.doughnut,
    ...food
  },
  activities: {
    categoryEmote: activities.fishingPole,
    ...activities
  },
  travel: {
    categoryEmote: travel.train,
    ...travel
  },
  objects: {
    categoryEmote: objects.movieCamera,
    ...objects
  },
  symbols: {
    categoryEmote: symbols.redHeart,
    ...symbols
  },
  flags: {
    categoryEmote: flags.triangularFlag,
    ...flags
  },
  body: {
    categoryEmote: body.leg,
    ...body
  }
};

export default emojis;
