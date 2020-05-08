const emojis = {};

[...document.querySelectorAll('.emoji-list li')].forEach(emojiItem => {
  const getObjectName = name => name[0].toLowerCase() + name.slice(1);

  const itemTextContent = emojiItem.innerText.split(' ');
  const emojiFace = itemTextContent[0];
  itemTextContent.shift();
  const emojiName = getObjectName(
    itemTextContent
      .join('')
      .replace(/[-,:’.()!“”]/g, '')
      .replace(/[&]/, 'And')
  );
  emojis[emojiName] = emojiFace;
});

document.body.innerHTML = JSON.stringify(emojis);

// https://unicode.org/emoji/charts/full-emoji-list.html
// https://gist.github.com/oliveratgithub/0bf11a9aff0d6da7b46f1490f86a71eb
