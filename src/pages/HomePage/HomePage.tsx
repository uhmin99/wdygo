import React, { useEffect, useState } from "react";
import { SafeAreaView, StyleSheet } from "react-native";
import Logo from "../../components/Logo";
import Menus from "./MenuList";

const HomePage = ({}) => {

    return(
        <SafeAreaView style={styles.wrapper}>
            <Logo logoStyle={styles.logoStyle}/>
            <Menus/>
        </SafeAreaView>
    );
};

const styles = StyleSheet.create({
    wrapper:{},
    logoStyle:{},
});

export default HomePage;