export const getFormatedCategoryName = categoryName =>
  categoryName
    .split(/(?=[A-Z])/)
    .join(' ')
    .toLowerCase();
