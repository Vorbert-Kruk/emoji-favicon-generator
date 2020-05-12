export const getFormatedCategoryName = categoryName =>
  categoryName
    .split(/(?=[A-Z])/)
    .join(' ')
    .toLowerCase();

export const getSvgEmoji = emoji =>
  `<svg xmlns=%22http://www.w3.org/2000/svg%22 viewBox=%220 0 100 100%22><text y=%22.9em%22 font-size=%2290%22>${emoji}</text></svg>">`;

export const getFaviconEmoji = emoji =>
  `<link rel="icon" href="data:image/svg+xml,${getSvgEmoji(emoji)}`;

const createTemporaryTextArea = () => {
  const textArea = document.createElement('textarea');
  textArea.style.position = 'absolute';
  textArea.style.left = '-9969px';
  textArea.setAttribute('readonly', 'readonly');
  return textArea;
};

export const copyToClipboard = textToCopy => {
  const textArea = createTemporaryTextArea();
  textArea.value = textToCopy;
  document.body.appendChild(textArea);
  textArea.select();
  document.execCommand('copy');
  document.body.removeChild(textArea);
};

export const downloadSvgFile = svg => {
  const downloadLink = document.createElement('a');
  const svgBlob = new Blob([svg], { type: 'image/svg+xml;charset=utf8' });
  const svgUrl = URL.createObjectURL(svgBlob);
  downloadLink.href = svgUrl;
  downloadLink.download = `emojiFavicon.svg`;
  document.body.appendChild(downloadLink);
  downloadLink.click();
  document.body.removeChild(downloadLink);
};

// TODO Vorbert -> zastanowić sie nad nazywaniem emoji
export const downloadEmojiAsSvg = emoji => downloadSvgFile(getSvgEmoji(emoji));
