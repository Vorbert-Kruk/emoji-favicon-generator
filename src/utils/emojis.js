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
import bodyParts from './categories/bodyParts';

const emojis = {
  smileys: {
    categoryEmoji: smileys.grinningFace,
    emojis: smileys
  },
  people: {
    categoryEmoji: people.manBeard,
    emojis: people
  },
  clothingAndAccessories: {
    categoryEmoji: clothingAndAccessories.tShirt,
    emojis: clothingAndAccessories
  },
  animals: {
    categoryEmoji: animals.dogFace,
    emojis: animals
  },
  nature: {
    categoryEmoji: nature.evergreenTree,
    emojis: nature
  },
  food: {
    categoryEmoji: food.doughnut,
    emojis: food
  },
  activities: {
    categoryEmoji: activities.fishingPole,
    emojis: activities
  },
  travel: {
    categoryEmoji: travel.train,
    emojis: travel
  },
  objects: {
    categoryEmoji: objects.movieCamera,
    emojis: objects
  },
  symbols: {
    categoryEmoji: symbols.redHeart,
    emojis: symbols
  },
  flags: {
    categoryEmoji: flags.triangularFlag,
    emojis: flags
  },
  bodyParts: {
    categoryEmoji: bodyParts.leg,
    emojis: bodyParts
  }
};

export default emojis;
