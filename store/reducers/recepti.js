//reducer koji radi promjene ovisno o poduzetoj akciji
import { RECEPTI } from '../../data/test-podaci';
import { PROMJENA_FAVORITA } from '../actions/recepti';
import { DODAVANJE_RECEPTA } from '../actions/dodavanjeRecepta';
import { BRISANJE_RECEPTA } from '../actions/brisanjeRecepta';

const pocetnoStanje = {
  recepti: RECEPTI,
  filterRecepti: RECEPTI,
  favoritRecepti: [],
  juheRecepti: [],
  predjelaRecepti: [RECEPTI[3]],
  glavnaRecepti: [RECEPTI[1]],
  desertRecepti: [RECEPTI[0], RECEPTI[2], RECEPTI[4]],
  dodaniRecepti: RECEPTI
};

const receptReducer = (state = pocetnoStanje, action) => {
  switch (action.type) {
    case PROMJENA_FAVORITA: {
      const odabran = state.favoritRecepti.findIndex(
        (recept) => recept.id === action.idRecepta
      );
      if (odabran >= 0) {
        const noviFavoriti = [...state.favoritRecepti];
        noviFavoriti.splice(odabran, 1);
        return { ...state, favoritRecepti: noviFavoriti };
      } else {
        const recept = state.filterRecepti.find(
          (recept) => recept.id === action.idRecepta
        );
        return {
          ...state,
          favoritRecepti: state.favoritRecepti.concat(recept),
        };
      }
    }
    case BRISANJE_RECEPTA: {
      const odabran = state.filterRecepti.findIndex(
        (recept) => recept.id === action.idRecepta
      );
      const odabranaJuha = state.juheRecepti.findIndex(
        (recept) => recept.id === action.idRecepta
      );
      const odabranoPredjelo = state.predjelaRecepti.findIndex(
        (recept) => recept.id === action.idRecepta
      );
      const odabranoGlavno = state.glavnaRecepti.findIndex(
        (recept) => recept.id === action.idRecepta
      );
      const odabranDesert = state.desertRecepti.findIndex(
        (recept) => recept.id === action.idRecepta
      );
      const odabranFavorit = state.favoritRecepti.findIndex(
        (recept) => recept.id === action.idRecepta
      );
      if(odabranFavorit >= 0){
        const noviFavoriti = [...state.favoritRecepti];
        noviFavoriti.splice(odabranFavorit, 1);
        state.favoritRecepti = noviFavoriti
      }
      if(odabranaJuha >= 0){
        const noveJuhe = [...state.juheRecepti];
        noveJuhe.splice(odabranaJuha, 1);
        state.juheRecepti = noveJuhe
      }
      if(odabranoPredjelo >= 0){
        const novaPredjela = [...state.predjelaRecepti];
        novaPredjela.splice(odabranoPredjelo, 1);
        state.predjelaRecepti = novaPredjela
      }
      if(odabranoGlavno >= 0){
        const novoGlavno = [...state.glavnaRecepti];
        novoGlavno.splice(odabranoGlavno, 1);
        state.glavnaRecepti = novoGlavno
      }
      if(odabranDesert >= 0){
        const noviDeserti = [...state.desertRecepti];
        noviDeserti.splice(odabranDesert, 1);
        state.desertRecepti = noviDeserti
      }
      if (odabran >= 0) {
        const noviSvi = [...state.filterRecepti];
        noviSvi.splice(odabran, 1);
        return { ...state, filterRecepti: noviSvi };
      } else {
        return { ...state, filterRecepti: state.filterRecepti };
      }
    }
    case DODAVANJE_RECEPTA: {
      state.filterRecepti = state.filterRecepti.concat(action.noviRecept)
      state.dodaniRecepti = state.dodaniRecepti.concat(action.noviRecept)
      if (action.noviRecept.vrsta === 'Juha'){
        state.juheRecepti = state.juheRecepti.concat(action.noviRecept)
      } else if (action.noviRecept.vrsta === 'Predjelo'){
        state.predjelaRecepti = state.predjelaRecepti.concat(action.noviRecept)
      }else if (action.noviRecept.vrsta === 'Glavno jelo'){
        state.glavnaRecepti = state.glavnaRecepti.concat(action.noviRecept)
      }else {
        state.desertRecepti = state.desertRecepti.concat(action.noviRecept)
      }
      return { ...state}
    }
    default:
      return state;
  }
};
export default receptReducer;

