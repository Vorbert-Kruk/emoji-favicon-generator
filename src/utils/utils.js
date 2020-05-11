export const getFormatedCategoryName = categoryName =>
  categoryName
    .split(/(?=[A-Z])/)
    .join(' ')
    .toLowerCase();

export const getFaviconEmoji = emoji =>
  `<link rel="icon" href="data:image/svg+xml,<svg xmlns=%22http://www.w3.org/2000/svg%22 viewBox=%220 0 100 100%22><text y=%22.9em%22 font-size=%2290%22>${emoji}</text></svg>">`;

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
