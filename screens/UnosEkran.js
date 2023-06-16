//ekran za unos novih recepata
import React, {useState} from 'react';
import { View, Text, StyleSheet, TextInput} from 'react-native';
import Boje from '../constants/Boje';
import Tipka from '../components/Tipka';
import {useDispatch} from 'react-redux';
import {dodavanjeRecepta} from '../store/actions/dodavanjeRecepta'

const UnosEkran = () => {
  const [recept, postaviRecept] = useState({id:-1,naslov:'',tekst:"",vrsta:""})

  const promijeniIme = (ime) => {
    postaviRecept({...recept, naslov: ime })
  }
  const promijeniVrstu = (vrsta) => {
    postaviRecept({...recept, vrsta: vrsta })
  }
  const promijeniTekst = (tekst) => {
    postaviRecept({...recept, tekst: tekst })
  }
  const promijeniRb = (rb) => {
    postaviRecept({...recept, id: parseInt(rb) })
  }

  const dispatch = useDispatch()

  const akcijaNoviRecept = () =>{
    dispatch(dodavanjeRecepta(recept))
  }



  return (
    <View style={stil.ekran}>
    <Text style={stil.tekst}>Unesite redni broj recepta: </Text>
      <TextInput 
          onChangeText={(rb) => promijeniRb(rb)}
          />
      <Text style={stil.tekst}>Unesite naziv recepta: </Text>
      <TextInput 
          onChangeText={(ime) => promijeniIme(ime)}
          />
      <Text style={stil.tekst}>Unesite vrstu recepta: </Text>
      <TextInput 
          onChangeText={(vrsta) => promijeniVrstu(vrsta)}
          />
      <Text style={stil.tekst}>Unesite tekst recepta: </Text>
      <TextInput 
          onChangeText={(tekst) => promijeniTekst(tekst)}
          />
      <Tipka title='Dodaj' 
        onPress={akcijaNoviRecept}/>
    </View>
  );
};

const stil = StyleSheet.create({
  ekran: {
    width: '100%',
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: Boje.Pozadina
  },
  tekst: {
    color: Boje.Bijela
  }
});

export default UnosEkran;
