import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import ErrorScreen from "./ErrorScreen";
import HomeScreen from "./HomeScreen";
import SingleScreen from "./SingleScreen";

const Stack = createNativeStackNavigator();

function Navigator() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen
          name="Home"
          component={HomeScreen}
          options={{ title: "Home" }}
        />
        <Stack.Screen
          name="Photo"
          component={SingleScreen}
          options={{ title: "Photo Post" }}
        />
        <Stack.Screen
          name="Error"
          component={ErrorScreen}
          options={{ title: "Oops, there's an error.." }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default Navigator;
