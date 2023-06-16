export const DODAVANJE_RECEPTA = 'DODAVANJE_RECEPTA';

export const dodavanjeRecepta = (recept) => {
  return {
    type: DODAVANJE_RECEPTA,
    noviRecept: recept
  };
};
