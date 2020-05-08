const heh = {};

[...document.querySelectorAll('.emoji-list li')].forEach(emojiItem => {
  const getObjectName = name => name[0].toLowerCase() + name.slice(1);

  const itemContent = emojiItem.innerText.split(' ');
  const emojiFace = itemContent[0];
  itemContent.shift();
  const emojiName = getObjectName(
    itemContent
      .join('')
      .replace(/[-,:’.()!“”]/g, '')
      .replace(/[&]/, 'And')
  );
  heh[emojiName] = emojiFace;
});

document.body.innerHTML = JSON.stringify(heh);
