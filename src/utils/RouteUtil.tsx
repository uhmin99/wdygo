import { useNavigationContainerRef } from "@react-navigation/native";
import { RouteNames } from "./RouteConsts";

const navigationRef = useNavigationContainerRef<any>();


class RouteUtil {
    public navigate(nextScreenName:RouteNames): void {
        setTimeout(() => {
            navigationRef.navigate(nextScreenName);
        }, 100);
    }
}

export default RouteUtil;