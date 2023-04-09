import React from "react";
import { FlatList, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { RouteNames } from "../../utils/RouteConsts";
import RouteUtil from "../../utils/RouteUtil";
import { useNavigationContainerRef } from "@react-navigation/native";

interface MenuInfo{
    name: string;
    action: ()=>void;
    color: string;
}  

const navigationRef = useNavigationContainerRef<any>();

const MENU_INFO_LIST: MenuInfo[] = [
    {
        name:"ASK WDYGO",
        action: ()=> {
            console.log("action pressed");
            console.log("is ready : " + navigationRef.isReady());
            if(navigationRef.isReady()) {
                navigationRef.navigate(RouteNames.AskPage);
            } else {
                const navigationRef = useNavigationContainerRef<any>();
                navigationRef.navigate(RouteNames.AskPage);
            }
            
            
        },
        color:"#123456",
    }
];

const Menus = () => {

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