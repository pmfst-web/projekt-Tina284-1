import * as React from 'react';
import {
  View,
  Text,
  StyleSheet,
  FlatList,
  TouchableOpacity,
} from 'react-native';

import Boje from '../constants/Boje';
//import ListaElement from '../components/ListaElement';
import { useSelector } from 'react-redux';
//import { RADOVI } from '../data/test-podaci';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
const Tab = createBottomTabNavigator();

const ReceptiEkran = ({ route, navigation }) => {
  const radoviPrikaz = useSelector((state) => state.radovi.filterRadovi);
  const radoviFavorit = useSelector((state) => state.radovi.favoritRadovi);

  const prikazElementa = (podaci) => {
    return (
      /*<ListaElement
        onPress={() => navigation.navigate('Detalji', { id: podaci.item.id })}
        natpis={podaci.item.student}
      />
    );*/
    <Text>prikaz elementa </Text>)
  };


  return (
    <View style={stil.ekran}>
      <View style={stil.lista}>
        <FlatList
          showsVerticalScrollIndicator={false}
          style={{ margin: 5 }}
          data={radoviPrikaz}
          renderItem={prikazElementa}
          numColumns={1}
        />
      </View>
      <View style={stil.lista}>
      <Text>FAVORITI</Text>
        <FlatList
          showsVerticalScrollIndicator={false}
          style={{ margin: 5 }}
          data={radoviFavorit}
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

export default ReceptiEkran;

/*import * as React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const ReceptiEkran = ({ route, navigation }) => {
  return (
    <View>
      <Text>Recepti ekran</Text>
    </View>
  );
};

const stil = StyleSheet.create({
  
});

export default ReceptiEkran;*/