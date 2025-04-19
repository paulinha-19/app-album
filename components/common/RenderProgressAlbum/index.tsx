import { View, Text, TouchableOpacity, StyleSheet } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import RenderProgressIndicators from "../RenderProgressIndicators";
import { router } from "expo-router";
import { AreaProgress } from "@/interface/album";

interface Props {
    item: AreaProgress;
    onPress?: () => void;
}

export default function RenderProgressAlbum({ item, onPress }: Props) {
    return (
        <View style={styles.itemContainer}>
            <View style={styles.contentContainer}>
                <Text style={styles.title}>{item.area}</Text>
                <RenderProgressIndicators progress={item.progress} progressText={`${item.glued}/${item.totalStickers}`} />
            </View>
            <TouchableOpacity onPress={() => router.push({ pathname: "/album", params: { categoryIndex: item.categoryIndex } })}>
                <Ionicons name="chevron-forward" size={20} color="#999" />
            </TouchableOpacity>
        </View>
    );
}

const styles = StyleSheet.create({
    itemContainer: {
        backgroundColor: 'white',
        borderRadius: 10,
        padding: 16,
        gap: 20,
        flexDirection: 'row',
        alignItems: 'center',
        elevation: 1,
    },
    contentContainer: {
        flex: 1,
        marginRight: 12,
    },
    title: {
        fontSize: 15,
        fontWeight: '500',
        color: '#707070',
        marginBottom: 12,
    },
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
        fontSize: 14,
        color: '#707070',
        minWidth: 45,
    }
});
