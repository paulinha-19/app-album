import { View, Text, StyleSheet, Image, ScrollView } from "react-native";

export default function AboutAppScreen() {
    return (
        <ScrollView contentContainerStyle={styles.container} showsVerticalScrollIndicator={false}>
            <Image
                source={require("../../../../assets/images/logo.png")}
                style={styles.logo}
                resizeMode="contain"
            />

            <Text style={styles.description}>
                <Text style={styles.italic}>
                    "Converge que Cola!"
                </Text> é um álbum de figurinhas digital criado para o evento Convergência 2025.
            </Text>

            <View style={styles.section}>
                <Text style={styles.category}>Organização</Text>
                <Text style={styles.name}>Klena Sarges</Text>
            </View>

            <View style={styles.section}>
                <Text style={styles.category}>Ideação, UX e UI</Text>
                <Text style={styles.name}>Deborah Rezende Gouvêa</Text>
            </View>

            <View style={styles.section}>
                <Text style={styles.category}>Desenvolvimento</Text>
                <Text style={styles.name}>João Pedro{"\n"}Paula Soares</Text>
            </View>

            <View style={styles.section}>
                <Text style={styles.category}>Gamificação</Text>
                <Text style={styles.name}>Deborah Rezende Gouvêa{"\n"}Rodrigo Cervazi</Text>
            </View>
        </ScrollView>
    );
}

const styles = StyleSheet.create({
    container: {
        padding: 20,
        alignItems: "center",
        backgroundColor: "#4AACB3",
        flexGrow: 1,
    },
    logo: {
        width: 180,
        height: 100,
        marginBottom: 16,
    },
    description: {
        fontSize: 18,
        color: "white",
        textAlign: "center",
        marginBottom: 24,
        fontStyle: "italic",
    },
    italic: {
        fontStyle: "italic",
        fontWeight: "400",
    },
    section: {
        marginBottom: 16,
        alignItems: "center",
    },
    category: {
        fontSize: 18,
        fontWeight: "700",
        color: "white"
    },
    name: {
        fontSize: 18,
        color: "white",
        textAlign: "center",
    },
});
