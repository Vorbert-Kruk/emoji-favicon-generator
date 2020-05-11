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

import { getFormatedCategoryName } from './utils';

const emojis = {
  smileys: {
    titleEmoji: smileys.grinningFace,
    emojis: smileys
  },
  people: {
    titleEmoji: people.manBeard,
    emojis: people
  },
  clothingAndAccessories: {
    titleEmoji: clothingAndAccessories.tShirt,
    emojis: clothingAndAccessories
  },
  animals: {
    titleEmoji: animals.dogFace,
    emojis: animals
  },
  nature: {
    titleEmoji: nature.evergreenTree,
    emojis: nature
  },
  food: {
    titleEmoji: food.doughnut,
    emojis: food
  },
  activities: {
    titleEmoji: activities.fishingPole,
    emojis: activities
  },
  travel: {
    titleEmoji: travel.train,
    emojis: travel
  },
  objects: {
    titleEmoji: objects.movieCamera,
    emojis: objects
  },
  symbols: {
    titleEmoji: symbols.redHeart,
    emojis: symbols
  },
  flags: {
    titleEmoji: flags.triangularFlag,
    emojis: flags
  },
  bodyParts: {
    titleEmoji: bodyParts.leg,
    emojis: bodyParts
  }
};

const emojiCategories = Object.values(emojis).map((emojiCategory, categoryIndex) => {
  const categoryName = Object.getOwnPropertyNames(emojis)[categoryIndex];

  return {
    ...emojiCategory,
    id: categoryName,
    name: getFormatedCategoryName(categoryName)
  };
});

export default emojiCategories;
