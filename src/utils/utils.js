export const formatCategoryName = categoryName =>
  categoryName
    .split(/(?=[A-Z])/)
    .join(' ')
    .toLowerCase();
