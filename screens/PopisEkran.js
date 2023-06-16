//ekran koji prikazuje popise recepata, sve ili one koji zadovoljavaju uvjet filtriranja
import * as React from 'react';
import {
  View,
  StyleSheet,
  FlatList,
} from 'react-native';

import Boje from '../constants/Boje';
import ListaElement from '../components/ListaElement';
import { useSelector } from 'react-redux';

const PopisEkran = ({ route, navigation }) => {

  const prikazElementa = (podaci) => {
    return (
      <ListaElement
        onPress={() => navigation.navigate('Detalji', { id: podaci.item.id })}
        natpis={podaci.item.naslov}
      />
    );
  };

  const prikaz = route.params.prikaz;
  console.log(prikaz);
  const receptiPrikaz = useSelector((state) => {
    if (prikaz === 'svi') {
      return state.recepti.filterRecepti;
    } else if (prikaz === 'favoriti') {
      return state.recepti.favoritRecepti;
    }else if (prikaz === 'juhe') {
      return state.recepti.juheRecepti;
    }else if (prikaz === 'predjela') {
      return state.recepti.predjelaRecepti;
    }else if (prikaz === 'glavnaJela') {
      return state.recepti.glavnaRecepti;
    }else if (prikaz === 'deserti') {
      return state.recepti.desertRecepti;
    }
    return null;
  });

  return (
    <View style={stil.ekran}>
      <View style={stil.lista}>
        <FlatList
          showsVerticalScrollIndicator={false}
          style={{ margin: 5 }}
          data={receptiPrikaz}
          renderItem={prikazElementa}
          numColumns={1}
        />
      </View>
    </View>
  );
};

const stil = StyleSheet.create({
  ekran: {
    width: '100%',
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: Boje.Pozadina,
  },
  lista: {
    flex: 1,
    width: '100%',
    alignItems: 'center',
  },
});

export default PopisEkran;
