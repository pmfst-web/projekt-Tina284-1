import * as React from 'react';
import { View, Text, StyleSheet, Button, Image, ScrollView } from 'react-native';
import Botun from '../components/Botun';
import Boje from '../constants/Boje'

const PocetniEkran = () => {
  return (
    <ScrollView vertical={true} style={stil.ekran}>
      <View>
        <Text>Neki tekst</Text>
        <View style={stil.kontrole}>
        <Botun
          title="Moji recepti"
          onPress={() => navigation.navigate('Recepti')}
        />
        <Botun
          title="Novi recept"
          onPress={() => navigation.navigate('Unos')}
        />
      </View>
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
});

export default PocetniEkran;