import { ComponentProvider } from "react-native/types";
import AskPage from "../pages/AskPage/AskPage";
import HomePage from "../pages/HomePage/HomePage";
import App from "../../App";

export enum RouteNames {
    APP = "App",
    HOME_PAGE = "HomePage",
    ASK_PAGE = "AskPage",
}

export enum RouteStacks {
    MAIN = "main",
}

type RouteElement = {
    name: RouteNames;
    component: ComponentProvider;
}
export const RouteScreensList: RouteElement[] = [
    {
        name: RouteNames.APP,
        component: ()=>App
    },
    {
        name: RouteNames.HOME_PAGE,
        component: ()=>HomePage
    },
    {
        name: RouteNames.ASK_PAGE,
        component: ()=>AskPage
    },
]