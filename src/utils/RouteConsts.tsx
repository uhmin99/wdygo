import { createNativeStackNavigator } from "@react-navigation/native-stack";
import HomePage from "../pages/HomePage/HomePage";
import AskPage from "../pages/AskPage/AskPage";

const Stack = createNativeStackNavigator();

export enum RouteNames {
    HomePage="HomePage",
    AskPage="AskPage"
};

export const routes: Array<React.ComponentProps<typeof Stack.Screen>> = [
    {
      name: RouteNames.HomePage,
      component: HomePage,
    },
    {
      name: RouteNames.AskPage,
      component: AskPage,
    },
];