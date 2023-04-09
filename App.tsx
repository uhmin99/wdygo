import React from "react";
import HomePage from "./src/pages/HomePage/HomePage";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { routes } from "./src/utils/RouteConsts";

const Stack = createNativeStackNavigator();

const App = () => {

  return(
    <NavigationContainer>
      <Stack.Navigator>
        {routes.map((stackRoute) => (
          <Stack.Screen key={stackRoute.name} {...stackRoute} />
        ))}
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;