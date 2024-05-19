export const abbreviateTitle = (title) => {
  const words = title.split(" ");
  if (words.length >= 2) {
    return words.map((word) => word[0]).join("");
  }

  return title;
};
