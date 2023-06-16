export const BRISANJE_RECEPTA = 'BRISANJE_RECEPTA';

export const brisanjeRecepta = (id) => {
  return {
    type: BRISANJE_RECEPTA,
    idRecepta: id
  };
};
