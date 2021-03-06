const people = {
  baby: '👶',
  child: '🧒',
  boy: '👦',
  girl: '👧',
  person: '🧑',
  personBlondHair: '👱',
  man: '👨',
  manBeard: '🧔',
  manRedHair: '👨‍🦰',
  manCurlyHair: '👨‍🦱',
  manWhiteHair: '👨‍🦳',
  manBald: '👨‍🦲',
  woman: '👩',
  womanRedHair: '👩‍🦰',
  womanCurlyHair: '👩‍🦱',
  womanWhiteHair: '👩‍🦳',
  womanBald: '👩‍🦲',
  womanBlondHair: '👱‍♀️',
  manBlondHair: '👱‍♂️',
  olderPerson: '🧓',
  oldMan: '👴',
  oldWoman: '👵',
  personFrowning: '🙍',
  manFrowning: '🙍‍♂️',
  womanFrowning: '🙍‍♀️',
  personPouting: '🙎',
  manPouting: '🙎‍♂️',
  womanPouting: '🙎‍♀️',
  personGesturingNo: '🙅',
  manGesturingNo: '🙅‍♂️',
  womanGesturingNo: '🙅‍♀️',
  personGesturingOK: '🙆',
  manGesturingOK: '🙆‍♂️',
  womanGesturingOK: '🙆‍♀️',
  personTippingHand: '💁',
  manTippingHand: '💁‍♂️',
  womanTippingHand: '💁‍♀️',
  personRaisingHand: '🙋',
  manRaisingHand: '🙋‍♂️',
  womanRaisingHand: '🙋‍♀️',
  deafPerson: '🧏',
  deafMan: '🧏‍♂️',
  deafWoman: '🧏‍♀️',
  personBowing: '🙇',
  manBowing: '🙇‍♂️',
  womanBowing: '🙇‍♀️',
  personFacepalming: '🤦',
  manFacepalming: '🤦‍♂️',
  womanFacepalming: '🤦‍♀️',
  personShrugging: '🤷',
  manShrugging: '🤷‍♂️',
  womanShrugging: '🤷‍♀️',
  manHealthWorker: '👨‍⚕️',
  womanHealthWorker: '👩‍⚕️',
  manStudent: '👨‍🎓',
  womanStudent: '👩‍🎓',
  manTeacher: '👨‍🏫',
  womanTeacher: '👩‍🏫',
  manJudge: '👨‍⚖️',
  womanJudge: '👩‍⚖️',
  manFarmer: '👨‍🌾',
  womanFarmer: '👩‍🌾',
  manCook: '👨‍🍳',
  womanCook: '👩‍🍳',
  manMechanic: '👨‍🔧',
  womanMechanic: '👩‍🔧',
  manFactoryWorker: '👨‍🏭',
  womanFactoryWorker: '👩‍🏭',
  manOfficeWorker: '👨‍💼',
  womanOfficeWorker: '👩‍💼',
  manScientist: '👨‍🔬',
  womanScientist: '👩‍🔬',
  manTechnologist: '👨‍💻',
  womanTechnologist: '👩‍💻',
  manSinger: '👨‍🎤',
  womanSinger: '👩‍🎤',
  manArtist: '👨‍🎨',
  womanArtist: '👩‍🎨',
  manPilot: '👨‍✈️',
  womanPilot: '👩‍✈️',
  manAstronaut: '👨‍🚀',
  womanAstronaut: '👩‍🚀',
  manFirefighter: '👨‍🚒',
  womanFirefighter: '👩‍🚒',
  policeOfficer: '👮',
  manPoliceOfficer: '👮‍♂️',
  womanPoliceOfficer: '👮‍♀️',
  detective: '🕵',
  manDetective: '🕵️‍♂️',
  womanDetective: '🕵️‍♀️',
  guard: '💂',
  manGuard: '💂‍♂️',
  womanGuard: '💂‍♀️',
  constructionWorker: '👷',
  manConstructionWorker: '👷‍♂️',
  womanConstructionWorker: '👷‍♀️',
  prince: '🤴',
  princess: '👸',
  personWearingTurban: '👳',
  manWearingTurban: '👳‍♂️',
  womanWearingTurban: '👳‍♀️',
  personWithSkullcap: '👲',
  womanwithHeadscarf: '🧕',
  personInTuxedo: '🤵',
  personWithVeil: '👰',
  pregnantWoman: '🤰',
  breastFeeding: '🤱',
  babyAngel: '👼',
  santaClaus: '🎅',
  mrsClaus: '🤶',
  superhero: '🦸',
  manSuperhero: '🦸‍♂️',
  womanSuperhero: '🦸‍♀️',
  supervillain: '🦹',
  manSupervillain: '🦹‍♂️',
  womanSupervillain: '🦹‍♀️',
  mage: '🧙',
  manMage: '🧙‍♂️',
  womanMage: '🧙‍♀️',
  fairy: '🧚',
  manFairy: '🧚‍♂️',
  womanFairy: '🧚‍♀️',
  vampire: '🧛',
  manVampire: '🧛‍♂️',
  womanVampire: '🧛‍♀️',
  merperson: '🧜',
  merman: '🧜‍♂️',
  mermaid: '🧜‍♀️',
  elf: '🧝',
  manElf: '🧝‍♂️',
  womanElf: '🧝‍♀️',
  manGenie: '🧞‍♂️',
  womanGenie: '🧞‍♀️',
  zombie: '🧟',
  manZombie: '🧟‍♂️',
  womanZombie: '🧟‍♀️',
  personGettingMassage: '💆',
  manGettingMassage: '💆‍♂️',
  womanGettingMassage: '💆‍♀️',
  personGettingHaircut: '💇',
  manGettingHaircut: '💇‍♂️',
  womanGettingHaircut: '💇‍♀️',
  personWalking: '🚶',
  manWalking: '🚶‍♂️',
  womanWalking: '🚶‍♀️',
  personStanding: '🧍',
  manStanding: '🧍‍♂️',
  womanStanding: '🧍‍♀️',
  personKneeling: '🧎',
  manKneeling: '🧎‍♂️',
  womanKneeling: '🧎‍♀️',
  manwithWhiteCane: '👨‍🦯',
  womanwithWhiteCane: '👩‍🦯',
  manInMotorizedWheelchair: '👨‍🦼',
  womanInMotorizedWheelchair: '👩‍🦼',
  manInManualWheelchair: '👨‍🦽',
  womanInManualWheelchair: '👩‍🦽',
  personRunning: '🏃',
  manRunning: '🏃‍♂️',
  womanRunning: '🏃‍♀️',
  womanDancing: '💃',
  manDancing: '🕺',
  personInSuitLevitating: '🕴',
  peoplewithBunnyEars: '👯',
  menwithBunnyEars: '👯‍♂️',
  womenwithBunnyEars: '👯‍♀️',
  personInSteamyRoom: '🧖',
  manInSteamyRoom: '🧖‍♂️',
  womanInSteamyRoom: '🧖‍♀️',
  personInLotusPosition: '🧘',
  peopleHoldingHands: '🧑‍🤝‍🧑',
  womenHoldingHands: '👭',
  womanAndManHoldingHands: '👫',
  menHoldingHands: '👬',
  kiss: '💏',
  kissManMan: '👨‍❤️‍💋‍👨',
  kissWomanWoman: '👩‍❤️‍💋‍👩',
  couplewithHeart: '💑',
  couplewithHeartManMan: '👨‍❤️‍👨',
  couplewithHeartWomanWoman: '👩‍❤️‍👩',
  family: '👪',
  familyManWomanBoy: '👨‍👩‍👦',
  familyManWomanGirl: '👨‍👩‍👧',
  familyManManBoy: '👨‍👨‍👦',
  familyManManGirl: '👨‍👨‍👧',
  familyWomanWomanBoy: '👩‍👩‍👦',
  familyWomanWomanGirl: '👩‍👩‍👧',
  familyManBoy: '👨‍👦',
  familyManBoyBoy: '👨‍👦‍👦',
  familyManGirl: '👨‍👧',
  familyManGirlBoy: '👨‍👧‍👦',
  familyManGirlGirl: '👨‍👧‍👧',
  familyWomanBoy: '👩‍👦',
  familyWomanBoyBoy: '👩‍👦‍👦',
  familyWomanGirl: '👩‍👧',
  familyWomanGirlBoy: '👩‍👧‍👦',
  familyWomanGirlGirl: '👩‍👧‍👧',
  bustInSilhouette: '👤',
  bustsInSilhouette: '👥'
};

export default people;
