//početni ekran pri pokretanju aplikacije
import * as React from 'react';
import { View, Text, StyleSheet, ScrollView } from 'react-native';
import Tipka from '../components/Tipka'
import Boje from '../constants/Boje'

const PocetniEkran = ({ navigation }) => {
  return (

    <ScrollView vertical={true} style={stil.ekran}>
      <View style={stil.kontrole}>
        <Tipka
          title="Moji recepti"
          onPress={() => navigation.navigate('Popis')}
        />
        <Tipka
          title="Novi recept"
          onPress={() => navigation.navigate('Unos')}
        />
      </View>
    </ScrollView>
  );
};

const stil = StyleSheet.create({
  ekran: {    
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor : Boje.Pozadina,
  },
  kontrole:{
    flex: 1,
    alignItems: "center",
    justifyContent: "space-around",
    height: 100
  }
});

export default PocetniEkran;
