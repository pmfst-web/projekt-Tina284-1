//Komponenta nam služi kao botun; u ovoj opciji moguće je napraviti dizajn
import * as React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import Boje from '../constants/Boje'

const Tipka = (props) => {
  return (
    <TouchableOpacity onPress={props.onPress}>
      <View style={{...stil.tipka, ...props.style}}>
        <Text style={stil.naslov}>{props.title}</Text>
      </View>
    </TouchableOpacity>
  );
};

const stil = StyleSheet.create({
  tipka: {
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: Boje.Naglasak1,
    borderColor: Boje.Naglasak2,
    borderWidth: 2,
    width: 150,
    height: 35,
    borderRadius: 5,
    opacity: 0.99,
    elevation: 3,
    margin: 5
  },
  naslov:{
    color: Boje.Primarna
  }
});

export default Tipka;
