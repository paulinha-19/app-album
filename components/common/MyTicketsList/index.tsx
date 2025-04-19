import { View, Text, Image, StyleSheet, ImageSourcePropType } from "react-native";

interface MyTicketsProps {
    image: ImageSourcePropType;
    numero: number;
}

export default function MyTicketsList({ image, numero }: MyTicketsProps) {
    return (
        <View style={styles.container}>
            <View style={[styles.containerImage]}>
                <Image source={image} style={styles.image} />
            </View>
            <View style={styles.containerInfo}>
                <Text style={styles.numberTicket}><Text style={styles.n}>n°: </Text>{numero}</Text>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        paddingHorizontal: 20,
        flexDirection: "row",
        alignItems: "center",
        gap: 12,
        paddingVertical: 15
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
    containerInfo: {
        flex: 1,
    },
    numberTicket: {
        fontSize: 14,
        color: "#414141",
    },
    n: {
        fontSize: 14,
        fontWeight: "bold"
    }
});
