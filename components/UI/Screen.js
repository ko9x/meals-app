import { StyleSheet, View } from "react-native";

export default function Screen(props) {
    return (
        <View style={{...styles.screen, ...props.style}}>{props.children}</View>
    )
};

const styles = StyleSheet.create({
    screen: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        margin: 20,
    }
});