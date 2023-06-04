import * as React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import Boje from '../constants/Boje';
import { Foundation } from '@expo/vector-icons';

const ListaElement = (props) => {
  return (
      <TouchableOpacity style={{alignItems: "center"}}
        onPress={props.onPress}>
        <View style={{ ...stil.tipka, ...props.style }}>
          <View style={stil.ime}>
            <Text style={stil.naslov}>{props.natpis}</Text>
          </View>
          <View style={stil.ikona}>
            <Foundation name="magnifying-glass" size={16} color={Boje.Naglasak2} />
          </View>
        </View>
      </TouchableOpacity>
  );
};

const stil = StyleSheet.create({
  tipka: {
    alignItems: 'center',
    justifyContent: 'space-around',
    backgroundColor: Boje.Naglasak1,
    borderColor: Boje.Naglasak2,
    borderWidth: 2,
    maxWidth: "80%",
    width: 400,
    height: 50,
    borderRadius: 5,
    paddingVertical: 10,
    marginVertical: 15,
    elevation: 3,
    flexDirection: 'row',
    opacity: 0.99,
    flex: 0.99,
  },
  naslov: {
    color: Boje.Primarna,
    numberOfLines: 1,
  },
  ime: {
    width: '70%',
    numberOfLines: 1,
    ellipsizeMode: 'tail',
    flex: 1,
    padding: 5,
  },
  ikona: {
    width: '20%',
    alignItems: 'center',
  },
});

export default ListaElement;
