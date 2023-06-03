import * as React from 'react';
import { View, TouchableOpacity } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { MaterialIcons } from '@expo/vector-icons';

import PocetniEkran from './screens/PocetniEkran';
import ReceptiEkran from './screens/ReceptiEkran';
import UnosEkran from './screens/UnosEkran';
import Boje from './constants/Boje';
const Stack = createNativeStackNavigator();
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
const Tab = createBottomTabNavigator()



const tabImenik = () => {
  return (
    <Tab.Navigator>
      <Tab.Screen name="svi" component={PopisEkran} initialParams={['svi']} />
      <Tab.Screen name="favoriti" component={PopisEkran} initialParams={['favoriti']}/>
    </Tab.Navigator>
  );
};

function App() {
  return (
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
              title: 'Moja kuharica',
            }}
          />
          <Stack.Screen
            name="Popis"
            component={tabImenik}
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
          
          <Stack.Screen name="Unos" component={UnosEkran} />
          <Stack.Screen name="Recepti" component={ReceptiEkran} />
        </Stack.Navigator>
      </NavigationContainer>
  );
}
export default App;
