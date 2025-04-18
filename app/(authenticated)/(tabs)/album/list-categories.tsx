import React from "react";
import {
    View,
    StyleSheet,
    ScrollView,
} from "react-native";
import { getAlbumProgress } from "@/utils/album-screen";
import { RenderProgress } from "@/components/common";

export default function ListCategoriesScreen() {
    const progressData = getAlbumProgress();

    return (
        <View style={styles.container}>
            <ScrollView contentContainerStyle={styles.content} showsVerticalScrollIndicator={false}>
                {progressData.map((item, index) => (
                    <View key={index}>
                        <RenderProgress item={item} />
                    </View>
                ))}
            </ScrollView>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#F0F3F4",
        padding: 16,
    },
    content: {
        gap: 12
    },
    card: {
        backgroundColor: "white",
        borderRadius: 12,
        padding: 16,
        elevation: 2,
    },
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
    },
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
