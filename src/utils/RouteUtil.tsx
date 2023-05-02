import { LayoutComponent, Navigation } from "react-native-navigation";
import { RouteScreensList, RouteNames, RouteStacks } from "./RouteConsts";


export function registerScreens() {
    RouteScreensList.map((screen) => {
        Navigation.registerComponent(screen.name, screen.component);
    });
}

//Routes
export function pushMainRoute(): void {
    Navigation.setRoot({
        root: {
            stack: {
                id: RouteStacks.MAIN,
                children: [
                    {
                        component: {
                        name: RouteNames.HOME_PAGE
                        }
                    }
                ],
                options: {
                    topBar: { visible: false },
                }
            }
        }
    });
}

export function pushLoginRoute(): void {}

export function pushApp(): void {
    Navigation.setRoot({
        root: {
            stack: {
                children: [
                    {
                        component: {
                            name: RouteNames.APP,
                        },
                    },
                ],
                options: {
                    topBar: { visible: false },
                }
            },
        },
    }).catch(error => console.log(error));
}

//screen navigation
export function navigate(stack: string, nextPage:RouteNames, props?:LayoutComponent) {
    Navigation.push(stack, {
        component: {
            name: nextPage,
            passProps: props,
            options: {}
        }
    });
}