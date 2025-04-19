import { View, Text, Image, StyleSheet, ImageSourcePropType } from "react-native";

interface MissionProps {
    image: ImageSourcePropType;
    title: string;
    subtitle: string;
    status: "done" | "pending";
}

export default function MissionsList({ image, title, subtitle, status }: MissionProps) {
    const isDone = status === "done";

    return (
        <View style={styles.container}>
            <View style={[styles.containerImage, isDone && styles.isDone]}>
                <Image source={image} style={styles.image} />
            </View>
            <View style={styles.containerInfo}>
                <Text style={styles.title}>{title}</Text>
                <Text style={styles.subtitle}>{subtitle}</Text>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        paddingHorizontal: 20,
        flexDirection: "row",
        alignItems: "center",
        gap: 12
    },
    containerImage: {
        width: 45,
        height: 45,
        backgroundColor: "#EBEBEB",
        borderRadius: 5,
        alignItems: "center",
        justifyContent: "center"
    },
    image: {
        width: 40,
        height: 40
    },
    isDone: {
        backgroundColor: "#000",
        opacity: 0.45,
    },
    containerInfo: {
        flex: 1,
        paddingVertical: 15
    },
    title: {
        fontSize: 16,
        fontWeight: "600",
        color: "#414141",
    },
    subtitle: {
        fontSize: 14,
        color: "#414141",
    }
});
