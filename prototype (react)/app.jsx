// App.js
import 'react-native-gesture-handler';
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { SafeAreaView, Text, Button } from 'react-native';
import AddStock from './AddStock';

const Stack = createStackNavigator();

const HomeScreen = ({ navigation }) => {
  return (
    <SafeAreaView>
      <Text>Welcome to My App</Text>
      <Button title="Add Stock" onPress={() => navigation.navigate('AddStock')} />
    </SafeAreaView>
  );
};

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="AddStock" component={AddStock} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
