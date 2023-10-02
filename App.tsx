import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Home from "./screens/Home";
import Colors from "./lib/Colors";
import { GestureHandlerRootView } from "react-native-gesture-handler";


export type RootStackParamList = {
  Home: undefined;
};
const Stack = createNativeStackNavigator<RootStackParamList>();


function App(): JSX.Element {
  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
      <NavigationContainer>
        <Stack.Navigator initialRouteName="Home">
          <Stack.Screen
            name="Home"
            component={Home}
            options={{
              title: "SQL Editor",
              headerTintColor: "white",
              headerStyle: { backgroundColor: "tomato" },
              headerTitleStyle: {
                fontWeight: "bold",
              },
            }}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </GestureHandlerRootView>
  );
}

export default App;
