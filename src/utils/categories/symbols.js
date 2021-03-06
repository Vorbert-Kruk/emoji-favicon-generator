const symbols = {
  heartwithArrow: '💘',
  heartwithRibbon: '💝',
  sparklingHeart: '💖',
  growingHeart: '💗',
  beatingHeart: '💓',
  revolvingHearts: '💞',
  twoHearts: '💕',
  heartDecoration: '💟',
  brokenHeart: '💔',
  redHeart: '❤️',
  orangeHeart: '🧡',
  yellowHeart: '💛',
  greenHeart: '💚',
  blueHeart: '💙',
  purpleHeart: '💜',
  brownHeart: '🤎',
  blackHeart: '🖤',
  whiteHeart: '🤍',
  hundredPoints: '💯',
  angerSymbol: '💢',
  speechBalloon: '💬',
  eyeInSpeechBubble: '👁️‍🗨️',
  thoughtBalloon: '💭',
  zzz: '💤',
  whiteFlower: '💮',
  barberPole: '💈',
  stopSign: '🛑',
  twelveOClock: '🕛',
  twelveThirty: '🕧',
  oneOClock: '🕐',
  oneThirty: '🕜',
  twoOClock: '🕑',
  twoThirty: '🕝',
  threeOClock: '🕒',
  threeThirty: '🕞',
  fourOClock: '🕓',
  fourThirty: '🕟',
  fiveOClock: '🕔',
  fiveThirty: '🕠',
  sixOClock: '🕕',
  sixThirty: '🕡',
  sevenOClock: '🕖',
  sevenThirty: '🕢',
  eightOClock: '🕗',
  eightThirty: '🕣',
  nineOClock: '🕘',
  nineThirty: '🕤',
  tenOClock: '🕙',
  tenThirty: '🕥',
  elevenOClock: '🕚',
  elevenThirty: '🕦',
  cyclone: '🌀',
  joker: '🃏',
  mahjongRedDragon: '🀄',
  flowerPlayingCards: '🎴',
  mutedSpeaker: '🔇',
  speakerLowVolume: '🔈',
  speakerMediumVolume: '🔉',
  speakerHighVolume: '🔊',
  loudspeaker: '📢',
  megaphone: '📣',
  postalHorn: '📯',
  bell: '🔔',
  bellwithSlash: '🔕',
  musicalNote: '🎵',
  musicalNotes: '🎶',
  chartIncreasingwithYen: '💹',
  aTMSign: '🏧',
  litterInBinSign: '🚮',
  potableWater: '🚰',
  wheelchairSymbol: '♿',
  mensRoom: '🚹',
  womensRoom: '🚺',
  restroom: '🚻',
  babySymbol: '🚼',
  waterCloset: '🚾',
  childrenCrossing: '🚸',
  noEntry: '⛔',
  prohibited: '🚫',
  noBicycles: '🚳',
  noSmoking: '🚭',
  noLittering: '🚯',
  nonPotableWater: '🚱',
  noPedestrians: '🚷',
  noMobilePhones: '📵',
  noOneUnderEighteen: '🔞',
  clockwiseVerticalArrows: '🔃',
  counterclockwiseArrowsButton: '🔄',
  backArrow: '🔙',
  endArrow: '🔚',
  onArrow: '🔛',
  soonArrow: '🔜',
  topArrow: '🔝',
  placeofWorship: '🛐',
  menorah: '🕎',
  dottedSixPointedStar: '🔯',
  aries: '♈',
  taurus: '♉',
  gemini: '♊',
  cancer: '♋',
  leo: '♌',
  virgo: '♍',
  libra: '♎',
  scorpio: '♏',
  sagittarius: '♐',
  capricorn: '♑',
  aquarius: '♒',
  pisces: '♓',
  ophiuchus: '⛎',
  shuffleTracksButton: '🔀',
  repeatButton: '🔁',
  repeatSingleButton: '🔂',
  fastForwardButton: '⏩',
  fastReverseButton: '⏪',
  upwardsButton: '🔼',
  fastUpButton: '⏫',
  downwardsButton: '🔽',
  fastDownButton: '⏬',
  stopButton: '⏹',
  cinema: '🎦',
  dimButton: '🔅',
  brightButton: '🔆',
  antennaBars: '📶',
  vibrationMode: '📳',
  mobilePhoneOff: '📴',
  plus: '➕',
  minus: '➖',
  divide: '➗',
  questionMark: '❓',
  whiteQuestionMark: '❔',
  whiteExclamationMark: '❕',
  exclamationMark: '❗',
  currencyExchange: '💱',
  heavyDollarSign: '💲',
  tridentEmblem: '🔱',
  nameBadge: '📛',
  japaneseSymbolforBeginner: '🔰',
  hollowRedCircle: '⭕',
  checkMarkButton: '✅',
  crossMark: '❌',
  crossMarkButton: '❎',
  curlyLoop: '➰',
  doubleCurlyLoop: '➿',
  keycapNumberSign: '#️⃣',
  keycapDigitZero: '0️⃣',
  keycapDigitOne: '1️⃣',
  keycapDigitTwo: '2️⃣',
  keycapDigitThree: '3️⃣',
  keycapDigitFour: '4️⃣',
  keycapDigitFive: '5️⃣',
  keycapDigitSix: '6️⃣',
  keycapDigitSeven: '7️⃣',
  keycapDigitEight: '8️⃣',
  keycapDigitNine: '9️⃣',
  keycap10: '🔟',
  inputLatinUppercase: '🔠',
  inputLatinLowercase: '🔡',
  inputNumbers: '🔢',
  inputSymbols: '🔣',
  inputLatinLetters: '🔤',
  aButtonBloodType: '🅰',
  aBButtonBloodType: '🆎',
  bButtonBloodType: '🅱',
  cLButton: '🆑',
  coolButton: '🆒',
  freeButton: '🆓',
  iDButton: '🆔',
  newButton: '🆕',
  nGButton: '🆖',
  oButtonBloodType: '🅾',
  oKButton: '🆗',
  pButton: '🅿',
  sOSButton: '🆘',
  upButton: '🆙',
  vsButton: '🆚',
  japaneseHereButton: '🈁',
  japaneseServiceChargeButton: '🈂',
  japaneseMonthlyAmountButton: '🈷',
  japaneseNotFreeofChargeButton: '🈶',
  japaneseReservedButton: '🈯',
  japaneseBargainButton: '🉐',
  japaneseDiscountButton: '🈹',
  japaneseFreeofChargeButton: '🈚',
  japaneseProhibitedButton: '🈲',
  japaneseAcceptableButton: '🉑',
  japaneseApplicationButton: '🈸',
  japanesePassingGradeButton: '🈴',
  japaneseVacancyButton: '🈳',
  japaneseOpenforBusinessButton: '🈺',
  japaneseNoVacancyButton: '🈵',
  redCircle: '🔴',
  orangeCircle: '🟠',
  yellowCircle: '🟡',
  greenCircle: '🟢',
  blueCircle: '🔵',
  purpleCircle: '🟣',
  brownCircle: '🟤',
  blackCircle: '⚫',
  whiteCircle: '⚪',
  redSquare: '🟥',
  orangeSquare: '🟧',
  yellowSquare: '🟨',
  greenSquare: '🟩',
  blueSquare: '🟦',
  purpleSquare: '🟪',
  brownSquare: '🟫',
  blackLargeSquare: '⬛',
  whiteLargeSquare: '⬜',
  largeOrangeDiamond: '🔶',
  largeBlueDiamond: '🔷',
  smallOrangeDiamond: '🔸',
  smallBlueDiamond: '🔹',
  redTrianglePointedUp: '🔺',
  redTrianglePointedDown: '🔻',
  diamondwithaDot: '💠',
  radioButton: '🔘',
  whiteSquareButton: '🔳',
  blackSquareButton: '🔲'
};

export default symbols;
