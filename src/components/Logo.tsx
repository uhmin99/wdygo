import React, { useEffect, useState } from "react";
import { Image, ImageStyle, StyleProp, StyleSheet } from "react-native";

interface Props {
    logoStyle: StyleProp<ImageStyle>
}

const Logo: React.FC<Props> = (props) => {

    return(
        <Image
            style={props.logoStyle}
            source={require("../../res/img/main_logo.png")}
        />
    );
};

const styles = StyleSheet.create({});

export default Logo;