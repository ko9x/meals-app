import { StyleSheet, View } from "react-native";

export default function Screen(props) {
    return (
        <View style={{...props.style, ...styles.screen}}>{props.children}</View>
    )
};

const styles = StyleSheet.create({
    screen: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    }
});