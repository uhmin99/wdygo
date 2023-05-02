import React from "react";
import { FlatList, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { navigate } from "../../utils/RouteUtil";
import { NavigationFunctionComponent } from "react-native-navigation";
import { RouteNames, RouteStacks } from "../../utils/RouteConsts";

interface MenuInfo{
    name: string;
    action: ()=>void;
    color: string;
}  


const Menus = () => {

    const MENU_INFO_LIST: MenuInfo[] = [
        {
            name:"ASK WDYGO",
            action: ()=> {
                console.log("action pressed");
                navigate(RouteStacks.MAIN, RouteNames.ASK_PAGE);
            },
            color:"#123456",
        }
    ];

    const menuItemRender = ({item}: {item: MenuInfo}) => {
        return(
            <SingleMenuItem
                title={item.name}
                onPress={item.action}
                backgroundColor={item.color}
            />
        );
    }

    return(
        <FlatList
            style={styles.flatListStyle}
            data={MENU_INFO_LIST}
            keyExtractor={(item, index)=> index+item.name}
            renderItem={menuItemRender}
        />
    );
};


interface SingleMenuItemProps {
    title: string;
    onPress: ()=>void;
    backgroundColor: string;
}

const SingleMenuItem: React.FC<SingleMenuItemProps> = (props) => {
    return(
        <TouchableOpacity
            style={[styles.menuBtn, {backgroundColor: props.backgroundColor}]}
            onPress={props.onPress}
        >
            <Text style={styles.menuBtnTitle}>
                {props.title}
            </Text>
        </TouchableOpacity>
    );
};

const styles = StyleSheet.create({
    flatListStyle:{},
    menuBtn:{},
    menuBtnTitle:{},
});

export default Menus;