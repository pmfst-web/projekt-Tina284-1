import React, {useCallback, useEffect} from 'react';
import {useSelector, useDispatch} from 'react-redux'
import {promjenaFavorita} from '../store/actions/recepti'
import { View, Text, StyleSheet, Button } from 'react-native';
import Boje from '../constants/Boje';
import Tipka from '../components/Tipka'

const DetaljiEkran = ({ route, navigation }) => {

  const idRecepta = Number(route.params.id);
  const sviRecepti = useSelector(state => state.recepti.recepti)
  const recept = sviRecepti.find((r) => r.id === idRecepta);

  const dispatch = useDispatch()

  const akcijaFavorit = () =>{
    dispatch(promjenaFavorita(idRecepta))
  }
  

  return (
    <View style={stil.ekran}>
      <View style={stil.tablica}>
        <View style={stil.redak}>
          <View style={stil.stupac}>
            <Text style={stil.broj}>{recept.id}</Text>
          </View>
        </View>
        <View style={stil.redak}>
          <View style={stil.stupac}>
            <Text style={stil.naslovi}>Naziv recepta</Text>
          </View>
          <View style={stil.stupac}>
            <Text style={{...stil.ime}}>{recept.naslov}</Text>
          </View>
        </View>
        <View style={stil.redak}>
          <View style={stil.stupac}>
            <Text style={stil.naslovi}>Vrsta</Text>
          </View>
          <View style={stil.stupac}>
            <Text style={stil.tekst}>{recept.vrsta}</Text>
          </View>
        </View>
        <View style={stil.redak}>
          <View style={stil.stupac}>
            <Text style={stil.naslovi}>Tekst recepta</Text>
          </View>
          <View style={stil.stupac}>
            <Text style={stil.tekst}>{recept.tekst}</Text>
          </View>
        </View>
        
        <View style={stil.redak}>
          <View style={stil.stupac}>
            <Tipka title="Promjena favorita" onPress={akcijaFavorit}/>
          </View>
        </View>
      </View>
    </View>
  );
};

const stil = StyleSheet.create({
  ekran: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: Boje.Pozadina,
  },
  tablica: {
    width: '80%',
    flex: 1,
  },
  redak: {
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'space-around',
    height: 50,
    paddingVertical: 0,
    marginVertical: 15,
  },
  stupac: {
    alignItems: 'center',
    marginVertical: 5,
    
  },
  ime:{
    fontFamily: "Corinthia",
    fontSize: 34,
    color: Boje.Bijela
  },
  broj:{
    fontWeight: "bold",
    color: Boje.Bijela,
    fontSize: 40
  },
  tekst:{
    textAlign: 'justify',   
    color: Boje.Bijela
  },
  naslovi: {
    color: Boje.Bijela
  }
});

export default DetaljiEkran;
