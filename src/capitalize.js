// @ts-check

const capitalize = (text) => {
  // Caso límite: cadena vacía
  if (text === '') {
    return '';
  }

  const firstChar = text[0].toUpperCase();
  const restSubstring = text.slice(1);

  return `${firstChar}${restSubstring}`;
};

export default capitalize;