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
