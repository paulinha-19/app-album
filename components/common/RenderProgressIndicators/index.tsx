import { View, Image, StyleSheet } from "react-native";

export default function RenderProgressIndicators({progress}: any) {
    return (
        <>
            <View style={[styles.starIconContainer, { left: "16%" }]}>
                {progress >= 25 ? (
                    <Image source={require("../../../assets/images/bronze-star.png")} style={styles.starIcon} />
                ) : (
                    <View style={styles.miniBar} />
                )}
            </View>
            <View style={[styles.starIconContainer, { left: "34%" }]}>
                {progress >= 50 ? (
                    <Image source={require("../../../assets/images/blue-star.png")} style={styles.starIcon} />
                ) : (
                    <View style={styles.miniBar} />
                )}
            </View>
            <View style={[styles.starIconContainer, { right: "22%" }]}>
                {progress === 100 && (
                    <Image source={require("../../../assets/images/gold-star.png")} style={styles.starIcon} />
                )}
            </View>
        </>
    );
}

const styles = StyleSheet.create({
    starIconContainer: {
        position: 'absolute',
    },
    starIcon: {
        width: 15,
        height: 15,
        top: 0
    },
    miniBar: {
        width: 2,
        height: 10,
        backgroundColor: "#707070",
        top: 0
    }
})