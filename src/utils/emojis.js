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
    name: 'Smileys',
    titleEmoji: smileys.grinningFace,
    emojis: smileys
  },
  people: {
    name: 'People',
    titleEmoji: people.manBeard,
    emojis: people
  },
  clothingAndAccessories: {
    name: 'Clothing and accessories',
    titleEmoji: clothingAndAccessories.tShirt,
    emojis: clothingAndAccessories
  },
  animals: {
    name: 'Animals',
    titleEmoji: animals.dogFace,
    emojis: animals
  },
  nature: {
    name: 'Nature',
    titleEmoji: nature.evergreenTree,
    emojis: nature
  },
  food: {
    name: 'Food',
    titleEmoji: food.doughnut,
    emojis: food
  },
  activities: {
    name: 'Food',
    titleEmoji: activities.fishingPole,
    emojis: activities
  },
  travel: {
    name: 'Travel',
    titleEmoji: travel.train,
    emojis: travel
  },
  objects: {
    name: 'Objects',
    titleEmoji: objects.movieCamera,
    emojis: objects
  },
  symbols: {
    name: 'Symbols',
    titleEmoji: symbols.redHeart,
    emojis: symbols
  },
  flags: {
    name: 'Flags',
    titleEmoji: flags.triangularFlag,
    emojis: flags
  },
  bodyParts: {
    name: 'Body parts',
    titleEmoji: bodyParts.leg,
    emojis: bodyParts
  }
};

export default emojis;
