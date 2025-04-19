import { View, Image, StyleSheet, Text } from "react-native";

interface RenderProgressIndicatorsProps {
    progress: number;
    progressText: string;
}

export default function RenderProgressIndicators({ progress, progressText }: RenderProgressIndicatorsProps) {
    return (
        <View style={styles.progressContainer}>
            <View style={styles.progressBackground}>
                <View
                    style={[
                        styles.progressFill,
                        { width: `${progress}%` }
                    ]}
                />
            </View>
            <View style={[styles.starIconContainer, { left: "23%" }]}>
                {progress >= 33 ? (
                    <Image source={require("../../../assets/images/bronze-star.png")} style={styles.starIcon} />
                ) : (
                    <View style={styles.miniBar} />
                )}
            </View>
            <View style={[styles.starIconContainer, { left: "45%" }]}>
                {progress >= 66 ? (
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
            <Text style={styles.progressText}>
                {progressText}
            </Text>
        </View>
    );
}

const styles = StyleSheet.create({
    progressContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        gap: 15,
    },
    progressBackground: {
        flex: 1,
        height: 8,
        backgroundColor: '#e0e0e0',
        borderRadius: 4,
        overflow: 'hidden',
        position: 'relative',
        paddingVertical: 5,
    },
    progressFill: {
        position: 'absolute',
        left: 0,
        top: 0,
        bottom: 0,
        backgroundColor: '#ffa726',
        borderRadius: 4
    },
    progressText: {
        fontSize: 18,
        color: '#707070',
        minWidth: 45,
    },
    starIconContainer: {
        position: 'absolute',
    },
    starIcon: {
        width: 15,
        height: 22,
        top: -1
    },
    miniBar: {
        width: 2,
        height: 10,
        backgroundColor: "#707070",
        top: 0
    },
})