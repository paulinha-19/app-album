import { View, Text, StyleSheet, Image } from "react-native";
import RenderProgressIndicators from "@/components/common/RenderProgressIndicators";

interface Props {
    name: string;
    level: number;
    progress: number;
    imageUrl: string;
}

export default function UserProfile({ name, level, progress, imageUrl }: Props) {
    return (
        <View style={styles.profileBox}>
            <Image
                source={{ uri: imageUrl }}
                style={styles.profileImage}
            />
            <View style={styles.info}>
                <View style={styles.nameContainer}>
                    <Text style={styles.name}>{name}</Text>
                    <View style={styles.levelContainer}>
                        <Text style={styles.levelText}>Nível {level}</Text>
                    </View>
                </View>
                <Text style={styles.status}>Status do álbum</Text>
                <RenderProgressIndicators progress={progress} progressText={`${Math.round(progress)}%`} />
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    profileBox: {
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: '#fff',
        elevation: 2,
        padding: 12
    },
    profileImage: {
        width: 86,
        height: 86,
        borderRadius: 50,
        marginRight: 12
    },
    info: {
        flex: 1,
    },
    nameContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        gap: 12
    },
    name: {
        fontSize: 24,
        fontWeight: '600',
        color: '#414141'
    },
    levelContainer: {
        backgroundColor: "#D1349B",
        borderRadius: 5,
        paddingHorizontal: 8,
        paddingVertical: 3,
    },
    levelText: {
        color: "#fff",
        fontSize: 12,
        fontWeight: "600"
    },
    status: {
        fontSize: 18,
        color: "#707070",
        fontWeight: "600"
    }
});
