import React, { useState } from 'react';
import { View, Text, Button, TouchableOpacity } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { MaterialIcons } from '@expo/vector-icons';
import AppLoading from 'expo-app-loading';
import * as Font from 'expo-font';

import { createStore, combineReducers } from 'redux';
import receptReducer from './store/reducers/recepti';
import { Provider } from 'react-redux';

import PocetniEkran from './screens/PocetniEkran';
import PopisEkran from './screens/PopisEkran';
import DetaljiEkran from './screens/DetaljiEkran';
import UnosEkran from './screens/UnosEkran';
import Boje from './constants/Boje';
const Stack = createNativeStackNavigator();
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
const Tab = createBottomTabNavigator();
import { createDrawerNavigator } from '@react-navigation/drawer';
const Drawer = createDrawerNavigator();
global.__reanimatedWorkletInit = () => {}
import { RECEPTI } from './data/test-podaci';

const ucitajFontove = () => {
  return Font.loadAsync({
    Baloo: require('./assets/Baloo.ttf'),
    Corinthia: require('./assets/Corinthia-Regular.ttf'),
  });
};

// Spajanje svih reducera u jedan objekt
const glavniReducer = combineReducers({
  recepti: receptReducer,
});
// Stvaramo centralni spremnik
const store = createStore(glavniReducer);

const tabImenik = () => {
  return (
    <Tab.Navigator>
      <Tab.Screen name="svi" component={PopisEkran} initialParams={['svi']}/>
      <Tab.Screen name="favoriti" component={PopisEkran} initialParams={['favoriti']}/>
    </Tab.Navigator>
  );
};

const drawerImenik = () => {
  return (
    <Drawer.Navigator>
      <Drawer.Screen name="Sva jela" component={PopisEkran} initialParams={{prikaz: 'svi'}}/>
      <Drawer.Screen name="Omiljena jela" component={PopisEkran} initialParams={{prikaz: 'favoriti'}}/>
      <Drawer.Screen name="Juhe" component={PopisEkran}/>
      <Drawer.Screen name="Predjelo" component={PopisEkran}/>
      <Drawer.Screen name="Glavno jelo" component={PopisEkran}/>
      <Drawer.Screen name="Desert" component={PopisEkran}/>
    </Drawer.Navigator>
  );
};

function App() {
  const [fontUcitan, ucitano] = useState(false);

  if (!fontUcitan) {
    return (
      <AppLoading
        startAsync={ucitajFontove}
        onFinish={() => ucitano(true)}
        onError={console.warn}
      />
    );
  }
  return (
    <Provider store={store}>
      <NavigationContainer>
        <Stack.Navigator
          screenOptions={{
            headerStyle: {
              backgroundColor: Boje.Naglasak1,
            },
            headerTintColor: Boje.Primarna,
          }}>
          <Stack.Screen
            name="Naslovna"
            component={PocetniEkran}
            options={{
              title: 'Kuharica',
            }}
          />
          <Stack.Screen
            name="Popis"
            component={drawerImenik}
            options={({ route, navigation }) => {
              return {
                headerRight: () => {
                  return (
                    <TouchableOpacity
                      onPress={() => navigation.navigate('Unos')}>
                      <View>
                        <MaterialIcons
                          name="note-add"
                          size={26}
                          color={Boje.Primarna}
                        />
                      </View>
                    </TouchableOpacity>
                  );
                },
              };
            }}
          />
          <Stack.Screen
            name="Detalji"
            component={DetaljiEkran}
            options={({ route, navigation }) => {
              const idOsobe = Number(route.params.id);
              const recept = RECEPTI.find((r) => r.id === idOsobe);
              return {
                headerTitle: recept?.naslov,
                headerRight: () => {
                  return (
                    <TouchableOpacity
                      onPress={() => navigation.navigate('Naslovna')}>
                      <View>
                        <MaterialIcons
                          name="home"
                          size={26}
                          color={Boje.Primarna}
                        />
                      </View>
                    </TouchableOpacity>
                  );
                },
              };
            }}
          />
          <Stack.Screen name="Unos" component={UnosEkran} />
        </Stack.Navigator>
      </NavigationContainer>
    </Provider>
  );
}
export default App;
